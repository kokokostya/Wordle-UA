const words = ["слово","рація","хвиля"];
const dic = ["слово","рація","хвиля","праця","покер","місто","проба","колір","вівця","ооооо"];
  
function App(props) {
  const [currentIssueNumber, setCurrentIssueNumber] = React.useState(getIssueNumber());
  const [attempts, setAttempts] = React.useState([]);
  const [feedback, setFeedback] = React.useState([]);
  const [result, setResult] = React.useState(null);
  const [cursor, setCursor] = React.useState({ 
    attempt: 0, 
    letter: 0});
  const [stats, setStats] = React.useState({ 
    games: 0, 
    won: 0,
    streak: 0,
    maxStreak: 0,
    attempts: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    }
  });
  const [settings, setSettings] = React.useState({ 
    darkTheme: false, 
    colorBlind: false});
  const [modal, setModal] = React.useState(null);
  const [timeLeft, setTimeLeft] = React.useState(null);

  var timer = null;

  // Temporary alert message
  function renderAlert(str) {
    let msg = document.createElement("div");
    msg.classList.add("alert");
    msg.innerHTML = (str);
    document.body.append(msg);
    setTimeout(function() {
      msg.remove();
    }, 3000);
  }

  // Initialize state
  React.useEffect(() => {
    setTimeLeft(getTimeTillMidnight());
    timer = setInterval(countDown, 1000);
  }, []);

  function countDown() {
    setTimeLeft(getTimeTillMidnight());
    if (getTimeTillMidnight() == {"h": 0, "m": 0, "s": 0}) {
      setCurrentIssueNumber(currentIssueNumber + 1);
      resetGame();
    }
  }
  
  function resetGame() {
    localStorage.removeItem("attempts");
    localStorage.removeItem("feedback");
    setResult(null);
  }

  // Days from Jan 20 2022 in Kyiv
  function getIssueNumber() {
    const first = new Date("Thu Jan 20 2022 00:00:00 GMT+0200 (EET)");
    const localNow = new Date().toLocaleString("en-US", { timeZone: "Europe/Kiev" });
    const now = new Date(localNow);
    const diff = Math.round((now-first)/(1000*60*60*24));
    return diff % words.length;
  }

  // HH:MM:SS till midnight in Kyiv
  function getTimeTillMidnight() {
    const localNow = new Date().toLocaleString("en-US", { timeZone: "Europe/Kiev" });
    const now = new Date(localNow);
    let midnight = new Date();
    midnight.setHours(24);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0);
    let secs = (midnight.getTime() - now.getTime()) / 1000

    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours < 10 ? "0" + hours : hours,
      "m": minutes < 10 ? "0" + minutes : minutes,
      "s": seconds < 10 ? "0" + seconds : seconds
    };
    return obj;
  }

  // Validate local storage and load from it
  React.useEffect(() => {
    let lastPlayedIssueNumber = JSON.parse(localStorage.getItem("lastPlayedIssueNumber"));
    if (lastPlayedIssueNumber != currentIssueNumber) {
      localStorage.setItem("lastPlayedIssueNumber", JSON.stringify(currentIssueNumber));
      resetGame();
    } else {
      let localAttempts = JSON.parse(localStorage.getItem("attempts"));
      let localFeedback = JSON.parse(localStorage.getItem("feedback"));
      let localResult = JSON.parse(localStorage.getItem("result"));
      let localSettings = JSON.parse(localStorage.getItem("settings"));
      localAttempts && setAttempts(localAttempts);
      localFeedback && setFeedback(localFeedback);
      localResult && setResult(localResult);
      localSettings && setSettings(localSettings);
      setCursor({
        attempt: (localFeedback) ? localFeedback.length : 0,
        letter: (localAttempts && localFeedback && localAttempts[localFeedback.length]) ? localAttempts[localFeedback.length].length : 0
      });
    }
    let localStats = JSON.parse(localStorage.getItem("stats"));
    localStats && setStats(localStats);
  }, []);
    
  // Save game to local storage
  React.useEffect(() => {
    localStorage.setItem("lastPlayedIssueNumber", JSON.stringify(currentIssueNumber));
  }, [currentIssueNumber]);
  React.useEffect(() => {
    localStorage.setItem("attempts", JSON.stringify(attempts));
  }, [attempts]);
  React.useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  React.useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);
  React.useEffect(() => {
    localStorage.setItem("result", JSON.stringify(result));
    if (result != null) setModal("stats");
  }, [result]);
  
  // Update theme and save to local storage
  React.useEffect(() => {
    settings.darkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    settings.colorBlind ? document.body.classList.add("color-blind") : document.body.classList.remove("color-blind");
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  function enterLetter(letter) {
    if ((result == null) && (cursor.attempt < 6) && (cursor.letter < 5)) {
      const newAttempts = [...attempts];
      let newString = newAttempts[cursor.attempt] || "";
      newString += letter;
      newAttempts[cursor.attempt] = newString;
      setAttempts(newAttempts);
      setCursor({attempt: cursor.attempt, letter: cursor.letter+1});
    }
  }

  function eraseLetter() {
    if ((result == null) && (cursor.letter > 0)) {
      const newAttempts = [...attempts];
      newAttempts[cursor.attempt] = attempts[cursor.attempt].substring(0, cursor.letter-1);
      setAttempts(newAttempts);
      setCursor({attempt: cursor.attempt, letter: cursor.letter-1});
    }
  }

  function checkWord() {
    var attempt = attempts[cursor.attempt];
    var solution = words[currentIssueNumber-1];

    // Attempts left
    if ((result == null) && (cursor.attempt < 6) && (cursor.letter > 4)) {
      // Actual word
      if ("dic.includes(attempt)") {
        var newResult = null;
        let newFeedback = [...feedback];
        // Solved!
        if (attempt == solution) {
          newFeedback.push(["hit","hit","hit","hit","hit"]);
          newResult = "won";
        // Check letters 
        } else {
          let res = Array(5).fill("miss");
          // Hit letters
          [...attempt].map((ltr, i) => {
            if (ltr == solution[i]) {
              res[i] = "hit";
              attempt = attempt.substring(0,i) + "-" + attempt.substring(i+1);
              
              solution = solution.substring(0,i) + "-" + solution.substring(i+1);
            }
          });
          // Letters found
          [...attempt].map((ltr, i) => {
            if ((ltr != "-") && solution.includes(ltr)) {
              res[i] = "found";
              solution = solution.substring(0,solution.indexOf(ltr)) + "-" + solution.substring(solution.indexOf(ltr)+1);
            }
          });
          newFeedback.push(res);
          if (cursor.attempt == 5) newResult = "lost";
        }
        setFeedback(newFeedback);
        
        // Game over
        if (newResult != null) {
          let newStats = {...stats}; 
          newStats.games += 1;    
          if (newResult == "won") {
            newStats.won += 1;
            newStats.streak += 1;
            if (newStats.streak > newStats.maxStreak) newStats.maxStreak = newStats.streak;
            newStats.attempts[feedback.length+1] += 1;
          } else {
            newStats.streak = 0;
          }
          setResult(newResult);
          setStats(newStats);
          setModal("stats");
        // Game continues
        } else {
          setCursor({attempt: cursor.attempt+1, letter: 0});
        }
      } else {
        renderAlert("Введіть словарний іменник");
      }
    }
  }

  function shareResult() {
    let str = "Український Wordle №" + currentIssueNumber + " з " + cursor.attempt + "-ї спроби:";
    feedback.map(attempt => {
      str += "\n";
      attempt.map(res => str += (res=="hit") ? "🟩" : (res=="found") ? "🟨" : "⬜")
    });
    
    let el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    renderAlert("Cкопійовано");
  }

  // Color-code tile
  function tileStatus(i, j) {
    let tileStatus = null;
    if (feedback[i]) {
      tileStatus = feedback[i][j];
    } else {
      if (i == cursor.attempt) {
        tileStatus = (j < cursor.letter) ? "set" : (j == cursor.letter) && (result == null) ? "active" : "";
      } else {
        tileStatus = "";
      }
    }
    return tileStatus;
  }

  // Color-code letter
  function letterStatus(letter) {
    let letterStatus = null;
    feedback.map((statuses, i) => {
      statuses.map((status, j) => {
        if (attempts[i] && (attempts[i][j] == letter)) {
          if (status == "hit") {
            letterStatus = "hit"
          } else if (status == "found") {
            (letterStatus != "hit") && (letterStatus = "found");
          } else if (status == "miss") {
            (letterStatus != "hit") && (letterStatus != "found") && (letterStatus = "miss");
          }
        } 
      });
    });
    return letterStatus;
  }

  return (
    <React.Fragment>
      <header>
        <h1>Wordle <em>українською</em></h1>
        <button id="btn-help" className="icon" aria-label="Як грати?" onClick={() => setModal("help")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
        </button>
        <button id="btn-stats" className="icon" aria-label="Моя статистика" onClick={() => setModal("stats")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
          </svg>
        </button>
        <button id="btn-settings" className="icon" aria-label="Налаштування" onClick={() => setModal("settings")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
          </svg>
        </button>
      </header>

      <main id="board-container">
        <div id="board">
        {[...Array(6)].map((val, i) =>
          <div key={i} className="row">
          {[...Array(5)].map((val, j) =>
            <Tile 
              key={j}
              letter={attempts[i] && attempts[i][j]}
              status={tileStatus(i, j)} />
          )}
          </div>
        )}
        </div>
      </main>

      <footer id="keyboard">
        <div className="row">
          <div className="spacer half"></div>
          {[..."йцукенгшщзхї"].map((letter) =>
            <Key
              key={letter}
              letter={letter}
              clickHandler={enterLetter}
              status={letterStatus(letter)} />
          )}
          <div className="spacer half"></div>
        </div>
        <div className="row">
          <div className="spacer"></div>
          {[..."фівапролджє"].map((letter) =>
            <Key
              key={letter}
              letter={letter}
              clickHandler={enterLetter}
              status={letterStatus(letter)} />
          )}
          <div className="spacer"></div>
        </div>
        <div className="row">
          <button id="backspace" className="one-and-a-half" aria-label="Видалити букву" onClick={eraseLetter}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
              <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
            </svg>
          </button>
          {[..."ячсмитьбюґ"].map((letter) =>
            <Key
              key={letter}
              letter={letter}
              clickHandler={enterLetter}
              status={letterStatus(letter)} />
          )}
          <button id="enter" className="one-and-a-half" aria-label="Перевірити слово" onClick={checkWord}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </button>
        </div>
      </footer>
      
      { modal && <Modal
        type={modal}
        handleClose={setModal}
        n={currentIssueNumber}
        stats={stats}
        settings={settings}
        setSettings={setSettings}
        result={result}
        timeLeft={timeLeft}
        attempt={cursor.attempt}
        shareResult={shareResult} /> }
    </React.Fragment>
  )
}

function Tile(props) {
  return (
    <div className={"tile" + (props.status ? (" " + props.status) : "")}>{ props.letter }</div>
  )
}

function Key(props) {
  return (
    <button className={props.status}
      onClick={(e) => props.clickHandler(props.letter)}>{ props.letter }</button>
  )
}

function Modal(props) {
  var title = null;
  var message = null;
  var content = null;

  if (props.type == "help") {
    title = "Як грати?";
    content = <React.Fragment>
      <p><b>Вгадайте слово з 6 спроб.</b> Кожна здогадка мусить бути словарним іменником. Після кожної спроби колір підкаже, наскільки близько ви були:</p>

      <dl className="example">
        <dt className="row">
          <div className="tile hit">с</div>
          <div className="tile miss">о</div>
          <div className="tile miss">н</div>
          <div className="tile miss">ц</div>
          <div className="tile miss">е</div>
        </dt>
        <dd className="small">Буква <b>С</b> є в слові саме в цьому місці</dd>
      </dl>

      <dl className="example">
        <dt className="row">
          <div className="tile miss">п</div>
          <div className="tile found">р</div>
          <div className="tile miss">а</div>
          <div className="tile miss">ц</div>
          <div className="tile miss">я</div>
        </dt>
        <dd className="small">Буква <b>Р</b> є в слові, але не в цьому місці</dd>
      </dl>

      <dl className="example">
        <dt className="row">
          <div className="tile miss">а</div>
          <div className="tile miss">к</div>
          <div className="tile miss">т</div>
          <div className="tile miss">о</div>
          <div className="tile miss">р</div>
        </dt>
        <dd className="small">Жодної з цих букв немає в слові</dd>
      </dl>

      <hr />

      <div className="fade small">
        <p>Оригінальна гра: <a href="https://www.powerlanguage.co.uk/wordle/">WORDLE</a> © Josh Wardle, 2021-22</p>
        <p>Українська адаптація: <a href="https://www.facebook.com/kokokostya/">Костя Череповський</a>, 2022</p>
        <p>№{ props.n }</p>
      </div>
    </React.Fragment>
  } else if (props.type == "stats") {
    title = "Статистика";
    message = (props.result == "won") ? <React.Fragment>
      <p><b>Неймовірно!</b> Ви вгадали з {props.attempt }-ї спроби. Зможете завтра повторити?</p>
      <button id="share" onClick={props.shareResult}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
        </svg>
        Поділитись
      </button>
    </React.Fragment> :
    (props.result == "lost") ? <React.Fragment>
      <p>Не засмучуйтесь. Ви добре змагались, наступного разу вам точно пощастить.</p>
    </React.Fragment> : null;
    content = <React.Fragment>
      <ul id="stats">
          <li>
            <span className="value">{ props.stats.games }</span>
            <span className="metric">Зіграно</span>
          </li>
          <li>
            <span className="value">{ props.stats.won }</span>
            <span className="metric">Виграно</span>
          </li>
          <li>
            <span className="value">{ props.stats.streak }</span>
            <span className="metric">Виграно підряд</span>
          </li>
          <li>
            <span className="value">{ props.stats.maxStreak }</span>
            <span className="metric">Рекорд підряд</span>
          </li>
        </ul>

        <h3>Виграшні спроби</h3>
        {[...Array(6)].map((val, i) =>
          <GraphBar
            key={i}
            num={i+1}
            attempts={props.stats.attempts} />
        )}

        <h3>Наступне слово через</h3>
        <div id="timer">{ props.timeLeft["h"] }:{ props.timeLeft["m"] }<span className="small">:{ props.timeLeft["s"] }</span></div>
    </React.Fragment>
  } else if (props.type == "settings") {
    title = "Налаштування";
    content = <React.Fragment>
      <div className="setting">
        <label htmlFor="setting-dark-theme">Темна тема</label>
        <input className="switch" type="checkbox" id="setting-dark-theme" checked={props.settings.darkTheme} onChange={() => props.setSettings({darkTheme: !props.settings.darkTheme, colorBlind: props.settings.colorBlind})} />
      </div>

      <div className="setting">
        <label htmlFor="setting-color-blind">Режим для дальтоників</label>
        <input className="switch" type="checkbox" id="setting-color-blind" checked={props.settings.colorBlind} onChange={() => props.setSettings({darkTheme: props.settings.darkTheme, colorBlind: !props.settings.colorBlind})} />
      </div>
    </React.Fragment>
  }

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="body">
        { message && <div className={"message" + ((props.result == "won") ? " success" : "")}>{ message }</div> }
        <header>
          <h2>{ title }</h2>
          <button id="btn-close" className="icon" aria-label="Повернутись до гри" onClick={(e) => props.handleClose(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
              <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg>
          </button>
        </header>
        <main>{ content }</main>
      </div>
    </div>,
    document.querySelector("#modal"),
  );
}

function GraphBar(props) {
  const max = Math.max(...Object.entries(props.attempts).map(pair => pair[1]));
  let width = Math.round(100*props.attempts[props.num]/max);
  if (width < 5) width = 5;

  return (
    <div className="graph">
      <div className="label">{ props.num }</div>
      <div className={"bar" + (!props.attempts[props.num] ? " none" : "")} style={{width: width + "%"}}>{ props.attempts[props.num] }</div>
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.querySelector('#app'));