"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App(props) {
  var _React$useState = React.useState(getIssueNumber()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentIssueNumber = _React$useState2[0],
      setCurrentIssueNumber = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      attempts = _React$useState4[0],
      setAttempts = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      feedback = _React$useState6[0],
      setFeedback = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      result = _React$useState8[0],
      setResult = _React$useState8[1];

  var _React$useState9 = React.useState({
    attempt: 0,
    letter: 0
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      cursor = _React$useState10[0],
      setCursor = _React$useState10[1];

  var _React$useState11 = React.useState({
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
      6: 0
    }
  }),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      stats = _React$useState12[0],
      setStats = _React$useState12[1];

  var _React$useState13 = React.useState({
    darkTheme: false,
    colorBlind: false
  }),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      settings = _React$useState14[0],
      setSettings = _React$useState14[1];

  var _React$useState15 = React.useState(null),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      modal = _React$useState16[0],
      setModal = _React$useState16[1];

  var _React$useState17 = React.useState(null),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      timeLeft = _React$useState18[0],
      setTimeLeft = _React$useState18[1];

  var _React$useState19 = React.useState(false),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      wrongAttempt = _React$useState20[0],
      setWrongAttempt = _React$useState20[1]; // Keep track of time


  React.useEffect(function () {
    setTimeLeft(getTimeTillMidnight());
    setInterval(countDown, 1000);
  }, []);

  function countDown() {
    setTimeLeft(getTimeTillMidnight());

    if (getTimeTillMidnight() == {
      "h": 0,
      "m": 0,
      "s": 0
    }) {
      setCurrentIssueNumber(currentIssueNumber + 1);
      resetGame();
    }
  } // Days from Jan 20 2022 in Kyiv


  function getIssueNumber() {
    var first = new Date("Thu Jan 22 2022 00:00:00 GMT+0200 (EET)");
    var localNow = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Kiev"
    });
    var now = new Date(localNow);
    var diff = Math.round((now - first) / (1000 * 60 * 60 * 24));
    return diff % props.words.length;
  } // HH:MM:SS till midnight in Kyiv


  function getTimeTillMidnight() {
    var localNow = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Kiev"
    });
    var now = new Date(localNow);
    var midnight = new Date();
    midnight.setHours(24);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0);
    var secs = (midnight.getTime() - now.getTime()) / 1000;
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    var obj = {
      "h": hours < 10 ? "0" + hours : hours,
      "m": minutes < 10 ? "0" + minutes : minutes,
      "s": seconds < 10 ? "0" + seconds : seconds
    };
    return obj;
  } // Validate local storage and load from it


  React.useEffect(function () {
    var lastPlayedIssueNumber = JSON.parse(localStorage.getItem("lastPlayedIssueNumber"));

    if (lastPlayedIssueNumber != getIssueNumber()) {
      localStorage.setItem("lastPlayedIssueNumber", JSON.stringify(getIssueNumber()));
      resetGame();
    } else {
      var localAttempts = JSON.parse(localStorage.getItem("attempts"));
      var localFeedback = JSON.parse(localStorage.getItem("feedback"));
      var localResult = JSON.parse(localStorage.getItem("result"));
      var localSettings = JSON.parse(localStorage.getItem("settings"));
      localAttempts && setAttempts(localAttempts);
      localFeedback && setFeedback(localFeedback);
      localResult && setResult(localResult);
      localSettings && setSettings(localSettings);
      setCursor({
        attempt: localFeedback ? localFeedback.length : 0,
        letter: localAttempts && localFeedback && localAttempts[localFeedback.length] ? localAttempts[localFeedback.length].length : 0
      });
    }

    var localStats = JSON.parse(localStorage.getItem("stats"));
    localStats && setStats(localStats);
  }, []); // Save game to local storage

  React.useEffect(function () {
    localStorage.setItem("lastPlayedIssueNumber", JSON.stringify(currentIssueNumber));
  }, [currentIssueNumber]);
  React.useEffect(function () {
    localStorage.setItem("attempts", JSON.stringify(attempts));
  }, [attempts]);
  React.useEffect(function () {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  React.useEffect(function () {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);
  React.useEffect(function () {
    localStorage.setItem("result", JSON.stringify(result));
    if (result != null) setTimeout(function () {
      return setModal("stats");
    }, 1000);
  }, [result]); // Update theme and save to local storage

  React.useEffect(function () {
    settings.darkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    settings.colorBlind ? document.body.classList.add("color-blind") : document.body.classList.remove("color-blind");
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  function resetGame() {
    localStorage.removeItem("attempts");
    localStorage.removeItem("feedback");
    setResult(null);
  }

  function enterLetter(letter) {
    if (result == null && cursor.attempt < 6 && cursor.letter < 5) {
      var newAttempts = _toConsumableArray(attempts);

      var newString = newAttempts[cursor.attempt] || "";
      newString += letter;
      newAttempts[cursor.attempt] = newString;
      setAttempts(newAttempts);
      setCursor({
        attempt: cursor.attempt,
        letter: cursor.letter + 1
      });
    }
  }

  function eraseLetter() {
    if (result == null && cursor.letter > 0) {
      var newAttempts = _toConsumableArray(attempts);

      newAttempts[cursor.attempt] = attempts[cursor.attempt].substring(0, cursor.letter - 1);
      setAttempts(newAttempts);
      setCursor({
        attempt: cursor.attempt,
        letter: cursor.letter - 1
      });
      setWrongAttempt(false);
    }
  } // Provide feedback letter by letter


  function provideFeedback(newFeedback) {
    var revealedLetter = 0;
    revealLetter();
    var letterTimer = setInterval(revealLetter, 150);

    function revealLetter() {
      if (revealedLetter < 5) {
        var letterFeedback = _toConsumableArray(newFeedback);

        letterFeedback[letterFeedback.length - 1] = newFeedback[newFeedback.length - 1].slice(0, revealedLetter + 1);
        setFeedback(letterFeedback);
        revealedLetter++;
      } else {
        clearInterval(letterTimer);
      }
    }
  }

  function checkWord() {
    var attempt = attempts[cursor.attempt];
    var solution = props.words[currentIssueNumber - 1]; // Attempts left

    if (result == null && cursor.attempt < 6 && cursor.letter > 4) {
      // Actual word
      if (props.dic.includes(attempt)) {
        var newResult = null;

        var newFeedback = _toConsumableArray(feedback); // Solved!


        if (attempt == solution) {
          newFeedback.push(["hit", "hit", "hit", "hit", "hit"]);
          provideFeedback(newFeedback);
          newResult = "won"; // Check letters 
        } else {
          var res = Array(5).fill("miss"); // Hit letters

          _toConsumableArray(attempt).map(function (ltr, i) {
            if (ltr == solution[i]) {
              res[i] = "hit";
              attempt = attempt.substring(0, i) + "-" + attempt.substring(i + 1);
              solution = solution.substring(0, i) + "-" + solution.substring(i + 1);
            }
          }); // Letters found


          _toConsumableArray(attempt).map(function (ltr, i) {
            if (ltr != "-" && solution.includes(ltr)) {
              res[i] = "found";
              solution = solution.substring(0, solution.indexOf(ltr)) + "-" + solution.substring(solution.indexOf(ltr) + 1);
            }
          });

          newFeedback.push(res);
          if (cursor.attempt == 5) newResult = "lost";
        }

        provideFeedback(newFeedback); // Game over

        if (newResult != null) {
          var newStats = _objectSpread({}, stats);

          newStats.games += 1;

          if (newResult == "won") {
            newStats.won += 1;
            newStats.streak += 1;
            if (newStats.streak > newStats.maxStreak) newStats.maxStreak = newStats.streak;
            newStats.attempts[feedback.length + 1] += 1;
          } else {
            newStats.streak = 0;
          }

          setResult(newResult);
          setStats(newStats); // Game continues
        } else {
          setCursor({
            attempt: cursor.attempt + 1,
            letter: 0
          });
        }
      } else {
        setWrongAttempt(true);
        renderAlert("Введіть словарний іменник");
      }
    }
  }

  function shareResult() {
    var str = "Wordle українською №" + currentIssueNumber + " з " + cursor.attempt + "-ї спроби:";
    feedback.map(function (attempt) {
      str += "\n";
      attempt.map(function (res) {
        return str += res == "hit" ? "🟩" : res == "found" ? "🟨" : "⬜";
      });
    });
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    renderAlert("Cкопійовано");
  } // Temporary alert message


  function renderAlert(str) {
    var msg = document.createElement("div");
    msg.classList.add("alert");
    msg.innerHTML = str;
    document.body.append(msg);
    setTimeout(function () {
      msg.remove();
    }, 3000);
  } // Color-code tile


  function tileStatus(i, j) {
    var tileStatus = null;

    if (feedback[i]) {
      tileStatus = feedback[i][j];
    } else {
      if (i == cursor.attempt) {
        tileStatus = j < cursor.letter ? "set" : j == cursor.letter && result == null ? "active" : "";
      } else {
        tileStatus = "";
      }
    }

    return tileStatus;
  } // Color-code letter


  function letterStatus(letter) {
    var letterStatus = null;
    feedback.map(function (statuses, i) {
      statuses.map(function (status, j) {
        if (attempts[i] && attempts[i][j] == letter) {
          if (status == "hit") {
            letterStatus = "hit";
          } else if (status == "found") {
            letterStatus != "hit" && (letterStatus = "found");
          } else if (status == "miss") {
            letterStatus != "hit" && letterStatus != "found" && (letterStatus = "miss");
          }
        }
      });
    });
    return letterStatus;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, "Wordle ", /*#__PURE__*/React.createElement("em", null, "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E")), /*#__PURE__*/React.createElement("button", {
    id: "btn-help",
    className: "icon",
    "aria-label": "\u042F\u043A \u0433\u0440\u0430\u0442\u0438?",
    onClick: function onClick() {
      return setModal("help");
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
  }))), /*#__PURE__*/React.createElement("button", {
    id: "btn-stats",
    className: "icon",
    "aria-label": "\u041C\u043E\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    onClick: function onClick() {
      return setModal("stats");
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
  }))), /*#__PURE__*/React.createElement("button", {
    id: "btn-settings",
    className: "icon",
    "aria-label": "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
    onClick: function onClick() {
      return setModal("settings");
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
  })))), /*#__PURE__*/React.createElement("main", {
    id: "board-container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "board"
  }, _toConsumableArray(Array(6)).map(function (val, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "row" + (wrongAttempt && cursor.attempt == i ? " wrong" : "")
    }, _toConsumableArray(Array(5)).map(function (val, j) {
      return /*#__PURE__*/React.createElement(Tile, {
        key: j,
        letter: attempts[i] && attempts[i][j],
        status: tileStatus(i, j)
      });
    }));
  }))), /*#__PURE__*/React.createElement("footer", {
    id: "keyboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, _toConsumableArray("'йцукенгшщзхї").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacer half"
  }), _toConsumableArray("фівапролджєґ").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "spacer half"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacer half"
  }), /*#__PURE__*/React.createElement("button", {
    id: "backspace",
    className: "one-and-a-half",
    "aria-label": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0431\u0443\u043A\u0432\u0443",
    onClick: eraseLetter
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"
  }))), _toConsumableArray("ячсмитьбю").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
  }), /*#__PURE__*/React.createElement("button", {
    id: "enter",
    className: "one-and-a-half",
    "aria-label": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0441\u043B\u043E\u0432\u043E",
    onClick: checkWord
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "spacer half"
  }))), modal && /*#__PURE__*/React.createElement(Modal, {
    type: modal,
    handleClose: setModal,
    n: currentIssueNumber,
    stats: stats,
    settings: settings,
    setSettings: setSettings,
    timeLeft: timeLeft,
    attempt: cursor.attempt + 1,
    result: result,
    shareResult: shareResult,
    solution: props.words[currentIssueNumber - 1]
  }));
}

function Tile(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tile" + (props.status ? " " + props.status : "")
  }, props.letter);
}

function Key(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: props.status,
    onClick: function onClick(e) {
      return props.clickHandler(props.letter);
    }
  }, props.letter);
}

function Modal(props) {
  var title = null;
  var message = null;
  var content = null;

  if (props.type == "help") {
    title = "Як грати?";
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "\u0412\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0437 6 \u0441\u043F\u0440\u043E\u0431."), " \u041A\u043E\u0436\u043D\u0430 \u0437\u0434\u043E\u0433\u0430\u0434\u043A\u0430 \u043C\u0443\u0441\u0438\u0442\u044C \u0431\u0443\u0442\u0438 \u0441\u043B\u043E\u0432\u0430\u0440\u043D\u0438\u043C \u0456\u043C\u0435\u043D\u043D\u0438\u043A\u043E\u043C, \u0430\u043B\u0435 \u043D\u0435 \u0432\u043B\u0430\u0441\u043D\u043E\u044E \u043D\u0430\u0437\u0432\u043E\u044E. \u041F\u0456\u0441\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0441\u043F\u0440\u043E\u0431\u0438 \u043A\u043E\u043B\u0456\u0440 \u043F\u0456\u0434\u043A\u0430\u0436\u0435, \u043D\u0430\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0432\u0438 \u0431\u0443\u043B\u0438:"), /*#__PURE__*/React.createElement("dl", {
      className: "example"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile hit"
    }, "\u0441"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043E"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043D"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0446"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0435")), /*#__PURE__*/React.createElement("dd", {
      className: "small"
    }, "\u0411\u0443\u043A\u0432\u0430 ", /*#__PURE__*/React.createElement("b", null, "\u0421"), " \u0454 \u0432 \u0441\u043B\u043E\u0432\u0456 \u0441\u0430\u043C\u0435 \u0432 \u0446\u044C\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456")), /*#__PURE__*/React.createElement("dl", {
      className: "example"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043F"), /*#__PURE__*/React.createElement("div", {
      className: "tile found"
    }, "\u0440"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0430"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0446"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u044F")), /*#__PURE__*/React.createElement("dd", {
      className: "small"
    }, "\u0411\u0443\u043A\u0432\u0430 ", /*#__PURE__*/React.createElement("b", null, "\u0420"), " \u0454 \u0432 \u0441\u043B\u043E\u0432\u0456, \u0430\u043B\u0435 \u043D\u0435 \u0432 \u0446\u044C\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456")), /*#__PURE__*/React.createElement("dl", {
      className: "example"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043C"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\xB4"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u044F"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0442"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0430")), /*#__PURE__*/React.createElement("dd", {
      className: "small"
    }, "\u0416\u043E\u0434\u043D\u043E\u0457 \u0437 \u0446\u0438\u0445 \u0431\u0443\u043A\u0432 \u043D\u0435\u043C\u0430\u0454 \u0432 \u0441\u043B\u043E\u0432\u0456")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
      className: "fade small"
    }, /*#__PURE__*/React.createElement("p", null, "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0430 \u0433\u0440\u0430: ", /*#__PURE__*/React.createElement("a", {
      href: "https://www.powerlanguage.co.uk/wordle/"
    }, "WORDLE"), " \xA9 Josh Wardle, 2021-22"), /*#__PURE__*/React.createElement("p", null, "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044F: ", /*#__PURE__*/React.createElement("a", {
      href: "https://www.facebook.com/kokokostya/"
    }, "\u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0430"), ", ", /*#__PURE__*/React.createElement("a", {
      href: "https://www.facebook.com/artem.shevchenko.ukraine"
    }, "\u0441\u043B\u043E\u0432\u0430"), "."), /*#__PURE__*/React.createElement("p", null, "\u2116", props.n)));
  } else if (props.type == "stats") {
    title = "Статистика";
    message = props.result == "won" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "\u041D\u0435\u0439\u043C\u043E\u0432\u0456\u0440\u043D\u043E!"), " \u0412\u0438 \u0432\u0433\u0430\u0434\u0430\u043B\u0438 \u0437 ", props.attempt, "-\u0457 \u0441\u043F\u0440\u043E\u0431\u0438. \u0417\u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0432\u0442\u0440\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438?"), /*#__PURE__*/React.createElement("button", {
      id: "share",
      onClick: props.shareResult
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
    })), "\u041F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044C")) : props.result == "lost" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "\u0412\u0456\u0434\u0433\u0430\u0434\u043A\u0430: ", /*#__PURE__*/React.createElement("b", null, props.solution), ". \u041D\u0435 \u0437\u0430\u0441\u043C\u0443\u0447\u0443\u0439\u0442\u0435\u0441\u044C. \u0412\u0438 \u0434\u043E\u0431\u0440\u0435 \u0433\u0440\u0430\u043B\u0438 \u0456 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443 \u0442\u043E\u0447\u043D\u043E \u0432\u0433\u0430\u0434\u0430\u0454\u0442\u0435.")) : null;
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
      id: "stats"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.games), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0417\u0456\u0433\u0440\u0430\u043D\u043E")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.won), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0412\u0438\u0433\u0440\u0430\u043D\u043E")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.streak), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0412\u0438\u0433\u0440\u0430\u043D\u043E \u043F\u0456\u0434\u0440\u044F\u0434")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.maxStreak), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0420\u0435\u043A\u043E\u0440\u0434 \u043F\u0456\u0434\u0440\u044F\u0434"))), /*#__PURE__*/React.createElement("h3", null, "\u0412\u0438\u0433\u0440\u0430\u0448\u043D\u0456 \u0441\u043F\u0440\u043E\u0431\u0438"), _toConsumableArray(Array(6)).map(function (val, i) {
      return /*#__PURE__*/React.createElement(GraphBar, {
        key: i,
        num: i + 1,
        attempts: props.stats.attempts
      });
    }), /*#__PURE__*/React.createElement("h3", null, "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0435 \u0441\u043B\u043E\u0432\u043E \u0447\u0435\u0440\u0435\u0437"), /*#__PURE__*/React.createElement("div", {
      id: "timer"
    }, props.timeLeft["h"], ":", props.timeLeft["m"], /*#__PURE__*/React.createElement("span", {
      className: "small"
    }, ":", props.timeLeft["s"])));
  } else if (props.type == "settings") {
    title = "Налаштування";
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "setting"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "setting-dark-theme"
    }, "\u0422\u0435\u043C\u043D\u0430 \u0442\u0435\u043C\u0430"), /*#__PURE__*/React.createElement("input", {
      className: "switch",
      type: "checkbox",
      id: "setting-dark-theme",
      checked: props.settings.darkTheme,
      onChange: function onChange() {
        return props.setSettings({
          darkTheme: !props.settings.darkTheme,
          colorBlind: props.settings.colorBlind
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "setting"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "setting-color-blind"
    }, "\u0420\u0435\u0436\u0438\u043C \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u0442\u043E\u043D\u0438\u043A\u0456\u0432"), /*#__PURE__*/React.createElement("input", {
      className: "switch",
      type: "checkbox",
      id: "setting-color-blind",
      checked: props.settings.colorBlind,
      onChange: function onChange() {
        return props.setSettings({
          darkTheme: props.settings.darkTheme,
          colorBlind: !props.settings.colorBlind
        });
      }
    })));
  }

  return ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, message && /*#__PURE__*/React.createElement("div", {
    className: "message" + (props.result == "won" ? " success" : "")
  }, message), /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("button", {
    id: "btn-close",
    className: "icon",
    "aria-label": "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u0434\u043E \u0433\u0440\u0438",
    onClick: function onClick(e) {
      return props.handleClose(null);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    className: "bi bi-x-lg",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
  })))), /*#__PURE__*/React.createElement("main", null, content))), document.querySelector("#modal"));
}

function GraphBar(props) {
  var max = Math.max.apply(Math, _toConsumableArray(Object.entries(props.attempts).map(function (pair) {
    return pair[1];
  })));
  var width = Math.round(100 * props.attempts[props.num] / max);
  if (width < 5) width = 5;
  return /*#__PURE__*/React.createElement("div", {
    className: "graph"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, props.num), /*#__PURE__*/React.createElement("div", {
    className: "bar" + (!props.attempts[props.num] ? " none" : ""),
    style: {
      width: width + "%"
    }
  }, props.attempts[props.num]));
}

var words = ["слово", "радіо", "танок", "покер", "місто", "хвиля", "проба", "колір", "вівця", "місія"];
var dic = ["вим'я", "вір'я", "в'ізд", "вор'я", "в'язи", "в'язь", "в'язь", "в'янь", "дуб'я", "з'іди", "з'іжа", "з'ізд", "зуб'я", "з'ява", "кеш'ю", "куп'я", "луб'я", "м'яло", "м'ясо", "м'ята", "нив'я", "об'єм", "об'яв", "п'єза", "п'єса", "пір'я", "п'ядь", "п'яза", "п'яло", "п'ята", "рам'я", "рам'я", "рев'ю", "риб'я", "руб'я", "сем'я", "сім'я", "сім'я", "тім'я", "ф'яба", "цур'я", "абаза", "абазг", "абака", "абвер", "абзац", "аборт", "абрек", "абрис", "абхаз", "абцуг", "абшит", "аваль", "аванс", "авгіт", "авгур", "авдит", "авеню", "аверс", "авізо", "авлос", "аврал", "авран", "автол", "автор", "агава", "агама", "агамі", "агапе", "агент", "агент", "агнат", "агона", "агора", "аграф", "агуті", "аґрус", "адакс", "адепт", "адиге", "адоба", "адрес", "адрон", "аероб", "аерон", "аерон", "ажгон", "азарт", "азіат", "аиван", "аимак", "аиран", "аисор", "акажу", "акант", "аканф", "акорд", "акорд", "акрил", "аксис", "аксон", "актив", "актин", "актор", "акула", "акциз", "акція", "акція", "аларм", "алгол", "алель", "алеут", "алича", "алібі", "алкан", "алкаш", "алкен", "алкіл", "алкін", "алмаз", "алмаз", "алоза", "алонж", "алтеи", "алтея", "алтин", "альба", "альфа", "алярм", "амбал", "амбар", "амбра", "амбре", "амвон", "амеба", "аміак", "аміни", "амінь", "ампер", "ампір", "ампль", "амури", "анарх", "анаша", "ангар", "ангел", "англи", "ангоб", "ангол", "аніон", "анкер", "анона", "анонс", "антал", "антик", "антка", "антре", "антьє", "анчар", "аорта", "апачі", "аплет", "апное", "апорт", "апрет", "апрош", "аргон", "аргус", "аргус", "аргус", "арден", "ареал", "арека", "арена", "арешт", "аркан", "аркоз", "аркуш", "армія", "арсен", "арсин", "артоз", "архар", "археи", "архів", "аршин", "асана", "аскер", "аскет", "аспид", "аспід", "аспід", "аспрі", "астат", "астма", "асцит", "атака", "аташе", "атлас", "атлас", "атлет", "аттик", "атфаз", "аудит", "аудіо", "аурум", "афект", "афера", "афина", "афікс", "афіша", "ацтек", "бабаи", "бабак", "бабак", "бабич", "бабіи", "бабіт", "бабка", "бабка", "бабка", "бабка", "бабка", "бабка", "бабка", "бабка", "бабка", "бабка", "бабки", "бабня", "бабця", "багаж", "багач", "багер", "багет", "багно", "багор", "багра", "бадан", "баддя", "базар", "базис", "баида", "баиза", "баика", "баика", "бакаи", "бакан", "бакен", "бакен", "бакун", "бакша", "балан", "балда", "балет", "балик", "балія", "балка", "балка", "балка", "балон", "балта", "бальі", "бамія", "банан", "банда", "бандо", "бандо", "банер", "банит", "баніт", "банка", "банка", "банка", "банко", "банко", "банта", "банту", "банту", "бануш", "баняк", "бараж", "барак", "баран", "баран", "баран", "барва", "барда", "барда", "бареж", "баржа", "барит", "бариш", "баріи", "барка", "барки", "барми", "барок", "барон", "басет", "басма", "басма", "басок", "басон", "бастр", "басун", "батав", "батак", "батан", "батат", "батик", "батир", "батіг", "батон", "батун", "батут", "батян", "батяр", "баунс", "бахур", "бахус", "бахші", "бачки", "бачок", "башка", "башта", "баюра", "баяті", "бебех", "бевзь", "бевка", "бедро", "безум", "беидж", "беиза", "бекар", "бекас", "бекет", "бекон", "беміт", "бенді", "бердо", "берег", "берет", "берил", "берло", "берма", "берці", "бесур", "бетон", "бидло", "билля", "бинда", "бирич", "бирка", "бирка", "бирка", "бирка", "битва", "битка", "биток", "биток", "биття", "битюг", "битюк", "бичня", "бичок", "бичок", "бичок", "бичок", "бишак", "біакс", "бібка", "бібоп", "бівак", "бігль", "бігос", "бігун", "бігун", "бігун", "бігун", "біґос", "бідак", "бідар", "бідка", "бідон", "бізон", "біика", "біиня", "білан", "білаш", "білет", "білик", "білка", "білль", "білля", "білок", "білок", "білон", "білон", "біляк", "біляк", "біляк", "біляш", "бінго", "біном", "біонт", "біонт", "біота", "біржа", "бірка", "бісер", "бісик", "бісса", "бістр", "бісус", "бітер", "бітлз", "бітли", "бітум", "благо", "бланк", "блиск", "блінт", "блоха", "блохи", "блуза", "блюдо", "блюза", "бляга", "бляск", "бляха", "бляха", "бобер", "бобик", "бобик", "бобир", "бобок", "бобур", "богол", "бодня", "бодхі", "бодян", "боєць", "божба", "божок", "бозон", "боінг", "боіще", "боико", "боиня", "боиок", "бокаж", "бокал", "бокло", "бокор", "болід", "болід", "болюс", "бомба", "бомжа", "бомки", "бонго", "бонза", "бонна", "бонус", "боран", "борат", "бордо", "бореи", "борид", "борня", "борть", "босяк", "ботеи", "ботик", "ботик", "ботюк", "боцюн", "боцян", "бочка", "бочка", "бочок", "брага", "брама", "бранч", "брань", "браса", "брача", "бреве", "бреик", "бренд", "бридж", "брижа", "брика", "брила", "бриль", "бриця", "бріар", "бріош", "брова", "бронх", "бронь", "броня", "броня", "брухт", "брюки", "брязк", "бубир", "бубна", "бубна", "бубон", "бубон", "бугаи", "бугаи", "бугаи", "бугор", "будда", "будка", "будяк", "бузок", "буиок", "буква", "букер", "букет", "букле", "букля", "букса", "букша", "булат", "булат", "булет", "буліт", "булка", "булла", "бунда", "бурав", "буран", "бурат", "бурда", "буреи", "бурет", "бурка", "бурка", "бурки", "бурло", "бурма", "бурса", "бурта", "бурун", "бурці", "буряк", "буряк", "бурят", "бусел", "бусол", "бутан", "бутен", "бутик", "бутил", "бутин", "бутин", "бутин", "бутон", "буття", "бутут", "буфер", "буфет", "буфет", "буфон", "бухан", "бухло", "бухта", "бухта", "буцик", "бучок", "бушля", "бювар", "бювет", "бюкса", "бюлюк", "бюрко", "вабик", "вавка", "вагар", "вагон", "вагус", "важок", "вазка", "вазон", "ваида", "ваило", "вакат", "вакса", "валах", "валер", "валет", "валик", "валик", "валін", "валка", "валок", "валок", "валок", "валок", "валуи", "валун", "вальс", "валюш", "ванна", "ванна", "ванта", "вапна", "вапно", "варан", "варга", "варка", "варми", "варна", "варта", "варяг", "васаг", "васал", "ватаг", "ватер", "ватин", "ватка", "ватра", "вафля", "вахня", "вахта", "вдача", "вдова", "вдяка", "вебер", "вежка", "векша", "велет", "велик", "велич", "велум", "вельд", "велюр", "венед", "венет", "верба", "веред", "веред", "верес", "верея", "верея", "верже", "верки", "верло", "версо", "верша", "весло", "весна", "вессі", "вечір", "взвод", "вибіг", "вибіи", "вибіи", "вибір", "вибух", "вивал", "вивар", "вивих", "вивід", "вивід", "вивід", "вивіз", "вивіз", "вигад", "вигар", "вигин", "вигін", "вигна", "вигук", "вигул", "вигул", "видик", "видих", "виділ", "видма", "видок", "видра", "вижга", "вижга", "вижим", "виізд", "виказ", "викид", "викот", "викуп", "викус", "вилаз", "вилив", "виліт", "вилка", "вилка", "вилки", "вилов", "вилом", "вимах", "вимін", "вимір", "вимок", "винар", "винос", "винце", "випад", "випал", "випар", "випас", "випин", "випис", "випит", "випік", "випіт", "випор", "вираз", "вирва", "виріб", "вирід", "виріз", "виріи", "вирла", "вирло", "вирок", "вирок", "вируб", "висип", "висів", "висок", "висок", "виспа", "витин", "витік", "витія", "виток", "витоп", "виття", "виття", "витяг", "вихід", "вихор", "вихор", "вишар", "вишка", "вишня", "вищип", "вищир", "вівця", "відео", "відик", "відил", "відро", "відун", "вієла", "віжка", "візаж", "візир", "візир", "візит", "візія", "візок", "віива", "віика", "віина", "віице", "вікно", "вілан", "вілая", "вілік", "віліс", "вілла", "віная", "вінея", "віник", "вініл", "вінка", "вінок", "вінол", "вінце", "вінця", "віола", "віпер", "віраж", "віраж", "вірва", "вірго", "вірел", "вірин", "вірля", "віроз", "вірус", "вірша", "вісая", "віскі", "вісон", "віспа", "вість", "вітер", "вітит", "вітіи", "вітія", "вітка", "вітта", "віття", "вічко", "вічко", "вішак", "вішва", "вішка", "віщба", "віщун", "віяло", "вклад", "влада", "влксм", "вміст", "внука", "внуча", "вобла", "вовна", "вовча", "вогул", "водіи", "вожак", "вождь", "возик", "возіи", "вокал", "волан", "волик", "волок", "волос", "волос", "волот", "волох", "волох", "волхв", "вольт", "вольт", "воляр", "воляр", "ворог", "ворок", "ворон", "ворон", "ворох", "ворса", "вотум", "вотяк", "вохра", "вошва", "вошка", "вояка", "вплив", "впуск", "враза", "враза", "врата", "врода", "вроки", "вруно", "встид", "вступ", "втеча", "втіки", "втіха", "втома", "втора", "втори", "вуаль", "вугля", "вугол", "вугор", "вугор", "вудіи", "вудка", "вужак", "вужик", "вузда", "вузол", "вузол", "вуико", "вуина", "вулик", "вуліи", "вурда", "вурка", "вусач", "вусач", "вусик", "вусок", "вуста", "вутка", "вушко", "габіт", "габро", "гавот", "гавра", "гавря", "гагат", "гаддя", "гадик", "гадка", "газик", "газир", "газон", "гаида", "гаика", "гаика", "гаино", "гаино", "гаиок", "гаиот", "галас", "гален", "галея", "галич", "галіи", "галіт", "галка", "галон", "галоп", "галун", "галун", "галча", "гамак", "гаман", "гамір", "гамма", "гамон", "гамуз", "ганаш", "ганка", "ганус", "гараж", "гарак", "гарба", "гарда", "гарем", "гарус", "гаряч", "гасло", "гатка", "гаття", "гаучо", "гахам", "гачок", "гашиш", "гвинт", "гебан", "гевал", "гевея", "геєна", "геиша", "гекон", "гелер", "геліи", "гемон", "геніи", "геном", "генрі", "геоід", "гепак", "герма", "герои", "герць", "гетит", "гетра", "гетто", "гилка", "гирка", "гирло", "гичка", "гібон", "гідра", "гієна", "гілея", "гілка", "гілля", "гілля", "гіляк", "гінді", "гінея", "гінка", "гіпюр", "гірка", "гірок", "гісоп", "гість", "гістя", "гітов", "гічка", "глава", "глава", "глава", "главк", "гладь", "гласи", "глиба", "глива", "глина", "глист", "глиця", "глиця", "гліпт", "глоба", "глоса", "глота", "глузд", "глюон", "глянс", "глянц", "глясе", "гміна", "гнеис", "гнида", "гниль", "гнома", "гнояк", "гобіт", "гобои", "говір", "гогіт", "гогоз", "годок", "голиш", "голиш", "голіи", "голка", "голод", "голос", "голуб", "голуб", "голуб", "гольд", "гольф", "гольф", "голяк", "голяк", "голяр", "гомін", "гомоз", "гоніт", "гонка", "гонор", "гонча", "гопак", "горит", "горіх", "горло", "горно", "горня", "город", "город", "горох", "горст", "горща", "гостя", "готур", "гофре", "гофри", "гохуа", "гоцак", "грало", "гранд", "грант", "грань", "грань", "графа", "грежа", "грена", "грець", "грець", "грива", "гридь", "грижа", "грижа", "гризь", "гриль", "грище", "грогі", "гроза", "гроно", "гроші", "груба", "груда", "груда", "груди", "грудь", "грузд", "група", "груша", "гряда", "гряда", "грязь", "гуава", "гуано", "губка", "губка", "губка", "губка", "гугіт", "гугля", "гудок", "гузир", "гузка", "гузно", "гукіт", "гуляш", "гумаи", "гумка", "гумно", "гумоз", "гумор", "гумус", "гурба", "гурія", "гуркх", "гурма", "гурон", "гусак", "гусар", "гусит", "гусіи", "гуска", "гусла", "гуслі", "гутня", "гуцул", "гучок", "гущак", "гюрза", "гяпік", "ґаблі", "ґазда", "ґаида", "ґандж", "ґанки", "ґанок", "ґвалт", "ґвара", "ґедзь", "ґонта", "ґонтя", "ґрати", "ґроно", "ґрунт", "ґрунь", "ґуґля", "ґуґля", "ґудзь", "давач", "давка", "давок", "даика", "даика", "даина", "даира", "далеч", "даліи", "далія", "дамба", "дамка", "дамно", "данка", "дання", "датив", "даток", "дацит", "дачка", "дашок", "дбаха", "двері", "дебет", "дебіл", "дебіт", "дебош", "дебрі", "дебрь", "дебют", "девіз", "девон", "деізм", "деіст", "декан", "декор", "демон", "демос", "денар", "денді", "денце", "дербі", "дерга", "дерен", "дерен", "дереш", "дерик", "деріи", "дерма", "дерть", "дерун", "дерун", "десть", "дефіс", "джбан", "джгут", "джига", "джура", "дзбан", "дзвін", "дзвін", "дзвяк", "дзета", "дзиґа", "дзьоб", "дзюдо", "дзявк", "дибка", "дибки", "дивак", "диван", "дигер", "дикун", "дилда", "дилер", "димар", "димка", "димок", "динар", "динас", "динго", "динод", "диско", "дичка", "дичок", "дишло", "дівер", "дівич", "дівка", "дівча", "дідич", "дідок", "дідух", "дієта", "діжка", "діиво", "діика", "діина", "ділок", "дімок", "дірка", "дітки", "днина", "днище", "добич", "добір", "добра", "добро", "довід", "довіз", "догад", "догма", "дожин", "дозір", "дозор", "доізд", "доида", "доида", "доина", "доира", "доказ", "докер", "докір", "долар", "долив", "домен", "домик", "домна", "домра", "донка", "донна", "донор", "донос", "донья", "допис", "допит", "дорід", "досів", "досіл", "досьє", "дотеп", "дотик", "дофін", "дохід", "доход", "дочка", "дошка", "дощик", "драга", "драже", "драив", "драла", "драма", "дрань", "драча", "древо", "дреиф", "дрена", "дриль", "дрізд", "дрова", "дроги", "дрозд", "друза", "друід", "дуаєн", "дуала", "дубль", "дубок", "дувал", "дуван", "дудар", "дудка", "дуель", "дужка", "дукар", "дукат", "дукач", "дукач", "дуліб", "думка", "дунст", "дуоль", "дупло", "дурак", "дурка", "дурра", "дутар", "дутик", "дутик", "дутиш", "дуття", "духан", "дучка", "душка", "душок", "дюбек", "дюкер", "дюшес", "дядьо", "дятел", "дячок", "евенк", "егіда", "едикт", "еидос", "екзил", "екзот", "еклер", "екран", "елеат", "елінг", "еліпс", "еліта", "еллін", "ельфа", "емаль", "емаль", "емаль", "ембол", "емпат", "енант", "ендек", "ендем", "ендси", "енець", "ензим", "еозин", "еоліт", "еоліт", "еоцен", "епарх", "епіка", "епонж", "епоха", "епюра", "ербіи", "ерзац", "еркер", "есдек", "ескіз", "естер", "естет", "етвеш", "етика", "етнос", "етрол", "ефект", "ефель", "ефіоп", "євнух", "євреи", "єдваб", "єднус", "єзуіт", "єресь", "єресь", "єство", "єхида", "жабка", "жабра", "жабур", "жакан", "жакет", "жакоб", "жарок", "жатка", "жаття", "жебри", "желяр", "жених", "жеода", "жердь", "жердя", "жереб", "жереб", "жереп", "жерех", "жерло", "жерун", "жетон", "живіт", "живло", "жидок", "жижки", "жилет", "жилка", "жират", "жираф", "жирок", "жирун", "житво", "житіє", "житло", "життя", "житце", "жичка", "жінка", "жмаки", "жменя", "жмудь", "жмури", "жнець", "жнива", "жниво", "жниця", "жовна", "жовно", "жокеи", "жолоб", "жорно", "жрець", "жриця", "жуика", "жулан", "жупан", "жупел", "журав", "журба", "жучок", "забаг", "забіг", "забіи", "забіл", "забір", "завал", "завід", "завід", "завіз", "завіи", "завіи", "завіт", "завія", "завод", "завод", "завод", "завод", "завод", "завуч", "загад", "загал", "загар", "загин", "загин", "загін", "загін", "загул", "задих", "заділ", "задок", "задум", "заєць", "зажим", "зажин", "зазив", "зазор", "зазуб", "заіда", "заізд", "заізд", "заіка", "заида", "заико", "заича", "заказ", "закал", "закид", "закис", "закіп", "заков", "закон", "закот", "закуп", "закут", "заліг", "залік", "заліт", "залка", "залом", "замах", "замет", "замір", "замір", "заміс", "замок", "замок", "замор", "замша", "заник", "заніз", "занос", "запал", "запал", "запал", "запал", "запас", "запах", "запис", "запит", "запіи", "запіл", "запір", "запор", "зарва", "зарва", "зарев", "зарин", "зарис", "заріб", "зарід", "заріз", "зарік", "зарок", "заряд", "заряд", "засип", "засіб", "засів", "засік", "засіл", "засов", "засос", "заспа", "засув", "засуд", "засяг", "затин", "затік", "затір", "затія", "затля", "затон", "затор", "затяг", "захит", "захищ", "захід", "захід", "захід", "захов", "заціп", "зачал", "зачеп", "зачин", "зачин", "зачіп", "зачіс", "заява", "заяць", "збава", "збаня", "збори", "збрід", "зброі", "зброя", "збруя", "зваба", "звага", "звада", "звіря", "звода", "зводи", "звона", "звяга", "згага", "згляд", "згода", "згола", "згора", "зграя", "згуба", "згуда", "зґура", "здача", "здоба", "здрік", "здрок", "здухи", "зебра", "зелот", "зельц", "земля", "земля", "зеніт", "зерно", "зернь", "зерня", "зефір", "зефір", "зефір", "зилот", "зимно", "зівок", "зілля", "зірка", "злада", "злато", "злива", "злоба", "злоги", "злото", "злуда", "злука", "злюка", "змага", "зміна", "зміст", "змова", "змога", "змора", "змора", "знада", "знать", "зоман", "зомбі", "зофор", "зошит", "зрада", "зраза", "зрази", "зріст", "зубик", "зубок", "зубок", "зубря", "зубці", "зудар", "зулус", "зумер", "зумпф", "зупин", "зурна", "зябля", "зябра", "зятик", "івасі", "іврит", "ігрек", "ідеал", "ідіом", "ідіот", "ієреи", "іжиця", "ізвір", "ізвод", "ізгои", "ізюбр", "ікона", "іксія", "ілеус", "ільма", "імаго", "імаго", "імбир", "імідж", "імпет", "інвар", "інгуш", "індик", "індіи", "індол", "індус", "індус", "інжир", "інтим", "інуіт", "іоніт", "іонол", "іприт", "ірбіс", "ірмос", "іскра", "іслам", "іспит", "істик", "ітріи", "іудеи", "ішіас", "ідало", "ідець", "іздка", "іство", "иодид", "иодль", "иолом", "иолоп", "иомен", "кабак", "кабан", "кабат", "кабза", "кабза", "кавер", "кавка", "каврі", "кавун", "кагал", "каган", "кагат", "кагла", "кагор", "кадет", "кадет", "кадик", "кадіб", "кадіи", "кадри", "кадуб", "кадук", "кадук", "кажан", "казан", "казах", "казка", "казна", "казня", "казус", "каило", "каима", "каира", "какао", "калан", "калач", "калга", "калим", "каліи", "каліф", "каліч", "калія", "калко", "калус", "калюс", "каман", "камея", "камза", "камза", "камін", "камка", "камка", "камка", "камса", "канак", "канал", "канар", "канат", "канва", "канна", "канна", "каное", "канон", "канун", "канюк", "капер", "капіж", "капка", "капля", "капок", "капор", "капот", "карат", "карга", "карго", "карда", "карел", "кариб", "карія", "карма", "карст", "карта", "карук", "карус", "карюк", "касик", "касир", "касія", "каска", "каско", "касог", "каста", "катар", "катар", "катер", "катет", "катод", "каток", "каурі", "каурі", "кахля", "кацап", "качан", "качва", "качин", "качка", "качка", "качня", "качур", "кашка", "кашне", "кашпо", "кашуб", "каюта", "квага", "квадр", "квант", "кварк", "кварц", "кваси", "квача", "кваша", "кваша", "квест", "квілт", "квілт", "квіти", "квота", "кегль", "кегля", "келар", "келеп", "келех", "келих", "келія", "кельт", "кенаф", "кендя", "кепка", "керма", "кермо", "кесар", "кесон", "кетоз", "кетон", "кетяг", "кефір", "кечуа", "кивок", "кидіи", "кидок", "кизил", "кииок", "килим", "киндя", "кират", "кирея", "кирза", "кирка", "кирпа", "кирпа", "кисет", "кисть", "китюх", "китяг", "кичка", "кишка", "кишло", "киюра", "кияка", "кіанг", "кібуц", "ківер", "ківот", "кізка", "кізяк", "кіило", "кілер", "кілік", "кілля", "кілок", "кімвр", "кімля", "кінва", "кінза", "кінік", "кінін", "кіноа", "кіоск", "кіпер", "кіпка", "кірка", "кірха", "кіска", "кіска", "кісся", "кіста", "кість", "кітва", "кітка", "кіфоз", "кішка", "кладь", "клаим", "клака", "клаки", "кларк", "клект", "клема", "клень", "клерк", "клефт", "кліка", "кліко", "клінч", "кліпа", "кліпс", "кліть", "кліше", "кліщі", "клоун", "клуня", "кльок", "кльон", "кльоц", "кльош", "клюга", "клюка", "кляпа", "кляча", "кметь", "кнель", "кнеля", "кнехт", "книга", "кнікс", "княжа", "князь", "коала", "коата", "кобан", "кобза", "кобиз", "кобка", "кобол", "кобра", "кобуз", "ковач", "ковил", "ковмо", "ковуи", "когут", "кодло", "кодон", "коєць", "кожан", "кожух", "козак", "козар", "козел", "козир", "козіи", "козла", "козли", "козля", "козуб", "козяр", "коика", "коине", "коиот", "кокер", "кокет", "кокле", "кокні", "кокні", "кокон", "кокос", "кокош", "колаж", "колба", "колеж", "колет", "колик", "коліи", "коліи", "колір", "коліт", "колія", "колон", "колон", "колон", "колос", "колос", "колос", "колот", "колун", "кольє", "кольт", "комар", "комиз", "комин", "комиш", "комік", "комір", "комод", "комос", "конар", "коник", "коник", "конка", "конто", "конус", "конха", "конюх", "коняр", "копал", "копач", "копач", "копер", "копил", "копит", "копір", "копіт", "копія", "копра", "копра", "корал", "корал", "корба", "корда", "корма", "короб", "корок", "короп", "корса", "корчі", "коряк", "коряк", "косар", "косач", "косяк", "косяк", "котар", "котел", "котер", "котик", "котик", "котиш", "котко", "коток", "коток", "котон", "котун", "кофіи", "кофта", "кохія", "коцик", "кочет", "кошик", "кошма", "кошти", "кпини", "крага", "кража", "краис", "краля", "крант", "краса", "крауч", "кредо", "креол", "креси", "крига", "крига", "крижі", "криза", "крило", "крило", "криль", "криля", "криси", "криха", "криця", "криця", "кріль", "кроат", "крокі", "кроль", "кроля", "крона", "крона", "круіз", "круль", "крупа", "крупа", "крупи", "круча", "кряча", "ксива", "кубах", "кубик", "кубло", "кубок", "кувез", "кугут", "кудла", "кудла", "кудли", "кудрі", "кузен", "кузня", "кузов", "кукан", "кукла", "кукса", "кулаж", "кулак", "кулан", "кулер", "кулик", "кулик", "куліш", "кулон", "кулон", "культ", "куман", "куман", "кумач", "кумжа", "кумик", "кумир", "кумир", "кумис", "кумця", "кунак", "куння", "куншт", "купаж", "купер", "купка", "купля", "купна", "купол", "купон", "купча", "кураж", "кураи", "кураи", "курва", "куріи", "куріи", "курія", "курка", "курок", "курси", "куруш", "курча", "кусак", "кусок", "кутас", "кутик", "кутин", "кутис", "куток", "кутум", "куфія", "кухар", "кухва", "кухля", "кухня", "кухта", "куцак", "куцак", "куцан", "куцик", "кучер", "кучер", "кучка", "кучка", "кучма", "кушир", "кушка", "кущик", "кхмер", "кювет", "кюріи", "кяриз", "лабаз", "лабка", "лабуз", "лабух", "лаваш", "лавіс", "лавіс", "лавка", "лавка", "лавра", "ладан", "ладки", "лажук", "лазар", "лазер", "лазня", "лазок", "лазун", "лазур", "лаиба", "лаида", "лаиди", "лаика", "лаика", "лаика", "лаино", "лаифо", "лакеи", "ламер", "лампа", "ламут", "ланди", "ландо", "ланка", "ланок", "лапаи", "лапка", "лапки", "лапун", "лапша", "ларви", "ларга", "ларго", "ласач", "ласіи", "ласка", "ласка", "ласун", "латач", "латва", "латер", "латин", "латиш", "латка", "лаття", "латук", "латун", "лафет", "лафіт", "лахта", "левіт", "легат", "легат", "легіт", "ледар", "ледач", "лежак", "лежня", "лезво", "леиба", "леика", "лекаж", "лелія", "лельо", "леміш", "лемка", "лемко", "лемур", "лента", "ленто", "леоне", "лепет", "лепех", "лепра", "лепта", "лепта", "лерка", "летка", "лжець", "либак", "ливар", "лижва", "лижня", "лизак", "лизун", "лилик", "лиман", "лимар", "лимон", "линва", "линок", "липка", "лисак", "лиска", "листя", "лисун", "лисун", "литва", "литво", "литія", "литка", "лиття", "лихач", "лихва", "лицар", "личак", "личко", "лишаи", "лишка", "лишко", "лишок", "ліази", "ліана", "лібра", "лівак", "лівер", "лівер", "лівша", "лігво", "лідар", "лідер", "лідит", "ліжко", "лізин", "лізис", "лізка", "лізол", "ліика", "ліика", "лікар", "лікер", "лілея", "лілія", "лімбо", "ліміт", "лімфа", "лінза", "лінія", "лінон", "лінюх", "ліпід", "ліпка", "ліпсі", "лірик", "ліска", "ліска", "ліска", "лісок", "літак", "літер", "літіи", "літія", "літко", "літун", "ліцеи", "ліція", "лічба", "лобас", "лобик", "лобок", "лобок", "лобур", "ловля", "логер", "логік", "логін", "логос", "лодва", "ложка", "лозан", "лоиок", "локон", "локус", "локша", "ломик", "ломіт", "ломка", "лонжа", "лопар", "лопіт", "лопух", "лопух", "лотік", "лоток", "лотос", "лотра", "лофер", "лохіі", "лоція", "лошак", "лубок", "лугар", "лудан", "лудан", "лужок", "лузга", "лунка", "лунка", "лупак", "лупіи", "лупка", "лупка", "луска", "луста", "лутка", "луфар", "лучик", "лучка", "лучок", "лучок", "лучок", "лушня", "лушпа", "лущак", "лущик", "льоля", "льоха", "любас", "любва", "любка", "любка", "любко", "любов", "люгер", "людці", "люмен", "люнет", "люпин", "люпус", "лютии", "лютич", "лютня", "люшня", "лядка", "лямка", "ляпас", "ляпіс", "ляпка", "лярва", "лятва", "ляхва", "ляшка", "ляшок", "лящик", "мавка", "мавпа", "магія", "магма", "магог", "магот", "мадам", "мадяр", "маєво", "мажор", "мажор", "мазар", "мазер", "мазіи", "мазка", "мазка", "мазня", "мазок", "мазун", "мазур", "мазут", "маиво", "маика", "маика", "маино", "маиор", "макао", "макет", "максі", "малаи", "малат", "малеч", "малка", "малюк", "маляр", "маляс", "мамбо", "маміи", "мамка", "мамут", "мамця", "манат", "манго", "манеж", "манір", "манія", "манія", "манія", "манка", "манко", "манна", "манор", "мансі", "манта", "манто", "манул", "маорі", "маорі", "мапка", "марал", "марго", "маржа", "марка", "марка", "марко", "марля", "марші", "масаж", "масаи", "масив", "маска", "масло", "масон", "масть", "масть", "матір", "матка", "матка", "матка", "матня", "матюк", "мафія", "махра", "мачки", "мачок", "мачта", "мбуті", "меблі", "мегом", "медик", "медіа", "медок", "медок", "мезга", "мезон", "меиоз", "мелаи", "мелан", "мелос", "мення", "мерва", "мерин", "мерія", "месія", "месьє", "метал", "метан", "метек", "метил", "метис", "метка", "метод", "метол", "метоп", "метро", "меццо", "мечет", "мечет", "мечик", "мечик", "миика", "мииня", "мирра", "мирра", "мирта", "мисик", "миска", "мисль", "мисок", "митар", "митра", "миття", "мичка", "мишак", "мишва", "мишіи", "мишка", "мігма", "мідія", "мідяк", "мідяр", "мізер", "мізок", "мікоз", "мікст", "мілім", "мімік", "мімос", "мінер", "мінет", "мінея", "мініи", "мінор", "мінус", "міома", "міраж", "міраж", "мірза", "мірка", "місіс", "місія", "місто", "місце", "мітка", "мітла", "мітоз", "міток", "міхур", "мішка", "мішма", "мішок", "міщух", "млака", "мливо", "мнець", "мнихи", "могар", "могер", "могол", "модем", "модус", "мозок", "моива", "моива", "моира", "моква", "моква", "мокко", "мокша", "молот", "молох", "молох", "моляр", "монах", "моном", "мопед", "морва", "морда", "морзе", "моріг", "мороз", "морок", "морфа", "моряк", "мосьє", "мосяж", "мотет", "мотет", "мотив", "моток", "мотор", "мотто", "мотуз", "мохер", "моцак", "моцар", "мочар", "мочка", "мошва", "мошка", "мошка", "мошок", "мрево", "мрець", "мряка", "мугир", "мужва", "мужик", "музеи", "мукор", "мулат", "мулик", "муліт", "мулла", "муляж", "муляр", "муміє", "мумія", "мумія", "мунгу", "мунда", "мунда", "мурза", "мурин", "мурло", "мурло", "мусон", "мутра", "муфта", "муцик", "мушва", "мушка", "мушка", "мушля", "мушня", "мущир", "мюзет", "мюзет", "мюрид", "набат", "набіг", "набід", "набіи", "набіл", "набір", "набла", "набоб", "навал", "навар", "навик", "навис", "навід", "навіз", "навіи", "навіс", "навіс", "нагад", "нагаи", "наган", "нагар", "нагин", "нагін", "нагул", "надир", "надих", "надіи", "наділ", "надія", "надра", "надро", "нажив", "нажин", "назва", "наізд", "наида", "наими", "наиом", "наира", "наказ", "накат", "накид", "накип", "накри", "налив", "налив", "наліп", "наліт", "налои", "намаз", "намел", "намет", "намив", "намір", "намул", "намюр", "нанду", "нанка", "нанос", "напад", "напаи", "напар", "напис", "напіи", "напір", "нарив", "нарис", "нарід", "наріз", "народ", "нарта", "наряд", "наряд", "насад", "насип", "насит", "насів", "насос", "насув", "натік", "натяг", "натяк", "наука", "нафта", "нахил", "нація", "начин", "начіс", "нащот", "наяда", "нгвеє", "небіж", "небіи", "невід", "негус", "недея", "недуг", "нежар", "нежер", "нежид", "нежир", "нежит", "нелад", "нелюб", "нелюд", "неміч", "неміч", "ненка", "неньо", "нерет", "нерка", "нероб", "нерод", "нерол", "нерпа", "несів", "несун", "нетеч", "нетля", "нетрі", "нетям", "нехар", "нецке", "нечая", "нивка", "низка", "нирка", "нирок", "нитик", "нитка", "ниття", "ницак", "нівоз", "ніжка", "ніжна", "нізка", "німак", "німка", "німфа", "німча", "нірка", "нітон", "нічия", "нічка", "новак", "ножик", "ножні", "ноион", "номад", "номен", "номер", "нонет", "норія", "норка", "норма", "норов", "носаи", "носак", "носар", "носач", "носач", "носик", "носіи", "носок", "нотар", "нотка", "ночви", "ношпа", "нудяр", "нужда", "нузда", "нукер", "нулик", "нумер", "нурка", "нурок", "нурта", "нутро", "нюанс", "нюнка", "нюхар", "нюхач", "нявка", "няньо", "оазис", "обава", "обвал", "обвід", "обвіз", "обвіс", "обгін", "оберт", "обжин", "обзив", "обида", "обкат", "обкіс", "обком", "облав", "облаз", "облак", "обліг", "обліи", "облік", "обліт", "обліт", "обліч", "облов", "облои", "облом", "облуд", "облук", "обман", "обмах", "обмел", "обмет", "обмін", "обмір", "обніж", "обора", "образ", "образ", "обрив", "обрис", "обріз", "обріз", "обріи", "обрік", "обрік", "оброк", "обруб", "обрус", "обруч", "обряд", "обсів", "обсіч", "обсяг", "обтік", "обуда", "обуза", "обхід", "обцас", "обчас", "обшар", "обшир", "обшук", "овеча", "овище", "овізм", "овоід", "огень", "огида", "оглав", "оглав", "оглас", "огляд", "огонь", "огонь", "огріх", "огром", "огуда", "огузи", "одвал", "одвір", "одвіт", "одгин", "одежа", "одеон", "одліт", "одура", "одяга", "ожика", "ожина", "озеро", "озимі", "озирк", "ознак", "озноб", "оикіт", "оирот", "окань", "окапі", "океан", "окіст", "окіян", "оклад", "оклик", "окова", "окови", "около", "окрик", "окріл", "окріп", "окріп", "округ", "оксид", "оксія", "октан", "октет", "окуга", "окунь", "окуня", "олеін", "олень", "оленя", "олеум", "олива", "олива", "оливо", "оливо", "олімп", "оліфа", "олово", "олтар", "омана", "омега", "омела", "омлет", "омуль", "онагр", "онікс", "онікс", "онова", "онова", "онука", "онуча", "онуча", "ооліт", "опади", "опала", "опара", "опера", "опиус", "опіат", "опіка", "опіум", "опіяк", "оплет", "опліт", "оплот", "оповз", "опока", "опока", "опона", "опора", "опруг", "оптик", "опуда", "опука", "опуст", "опуст", "опція", "орава", "орало", "орган", "орган", "оргія", "орден", "орден", "орден", "ордер", "ордер", "орель", "ореля", "ореол", "оркан", "орлан", "орлик", "орлон", "орляк", "оромо", "ортит", "оруда", "орхіт", "орчик", "оршад", "осада", "осеін", "оселя", "осика", "осина", "осінь", "оскал", "ослик", "ослін", "осліп", "ослюк", "осман", "осміи", "осміх", "осмол", "осмос", "оснач", "особа", "осоід", "осока", "остит", "остов", "остюк", "остяк", "осуга", "осуда", "осьон", "отава", "отара", "отвір", "отеса", "отець", "отоса", "отріи", "отрок", "отруя", "отуха", "отчич", "офеня", "офіра", "офорт", "офсет", "офшор", "охват", "охиза", "охіть", "охота", "очата", "оченя", "очепа", "очерт", "очиці", "очище", "очкур", "очник", "очник", "ошада", "ошкір", "ошука", "ошуст", "ощада", "павза", "павич", "павук", "павун", "павур", "пагін", "пагір", "падіж", "паділ", "падко", "падла", "падло", "падло", "падре", "падуб", "пазик", "пазур", "паида", "паида", "паиза", "паиза", "паика", "паика", "паиок", "пакер", "пакер", "пакет", "пакіл", "пакля", "палас", "палац", "палаш", "палех", "паліи", "паліи", "палка", "палуб", "палюх", "паляр", "паляч", "памка", "пампа", "панас", "панва", "панда", "панич", "панін", "панія", "панна", "панно", "панок", "панти", "папая", "папір", "папір", "папка", "папка", "папля", "парад", "параф", "парез", "парик", "паріг", "паріс", "парія", "парка", "парка", "парка", "парки", "парло", "парна", "парня", "парня", "парод", "парок", "паром", "парох", "парта", "парті", "парус", "парус", "пархи", "парча", "парша", "парша", "парші", "пасаж", "пасаж", "пасаж", "пасаж", "пасат", "пасив", "пасик", "пасія", "паска", "пасмо", "пасок", "паста", "пасть", "пасха", "патер", "патик", "патіо", "патли", "патуа", "пауза", "пафос", "пахан", "пахар", "пахва", "пахно", "пахощ", "пахта", "пацан", "пацик", "пацюк", "пацюк", "пачка", "пашня", "пашня", "паюха", "пегас", "педик", "пекан", "пекар", "пекар", "пекло", "пелех", "пелех", "пемза", "пенал", "пенат", "пенге", "пеніс", "пенні", "пепсі", "перга", "перед", "перія", "перко", "перла", "перли", "перло", "перон", "перса", "перст", "перун", "перце", "песев", "песик", "петек", "петит", "петля", "печія", "пивко", "пивна", "пивце", "пижик", "пижик", "пижмо", "пилав", "пилка", "пилок", "пиляк", "пиляр", "пинда", "пипка", "пиптю", "пиріг", "пиріи", "писак", "писар", "писок", "питво", "пиття", "питун", "пичка", "пишка", "пищик", "пияка", "піала", "піано", "півка", "півча", "піжон", "пііта", "піило", "пікап", "пікер", "пікет", "пікет", "пікет", "пікша", "пілат", "пілка", "пілон", "пілот", "пілот", "пінія", "пінка", "пінка", "пінта", "пірат", "пірит", "пірке", "піроп", "пірце", "пісня", "пісок", "піспа", "пітон", "піфія", "піфос", "піхва", "піхви", "піхта", "піхур", "пічка", "пішак", "пішак", "пішак", "пішка", "пішня", "піяка", "плаік", "плаке", "пласт", "плата", "плата", "плато", "плаун", "плаха", "плебс", "плеєр", "плеск", "плесо", "плече", "плита", "плиця", "пліва", "плісе", "пліть", "пліть", "плова", "плоть", "площа", "плюск", "плюта", "пляма", "пнище", "побит", "побіи", "побіи", "побіл", "побір", "побоі", "побут", "поваб", "поваг", "повал", "повар", "повів", "повід", "повід", "повіз", "повіи", "повіт", "повія", "повня", "погар", "погар", "погар", "погін", "погон", "погук", "подив", "подих", "подіи", "подіи", "поділ", "поділ", "подія", "подок", "подра", "подув", "подум", "поема", "пожар", "пожед", "позва", "позер", "позив", "позір", "позіх", "позов", "поізд", "поида", "показ", "покал", "покат", "покер", "покіи", "покіи", "покір", "покіс", "покіт", "покуп", "покуп", "полба", "полив", "полик", "полин", "поліг", "поліг", "поліи", "поліи", "поліп", "полір", "поліс", "поліс", "політ", "полка", "полог", "полоз", "полоз", "полом", "полон", "полох", "полюс", "поляк", "поляр", "помах", "помел", "помиі", "помин", "помір", "поміч", "помка", "помок", "помор", "помпа", "помпа", "понос", "понур", "пончо", "понюх", "попал", "попар", "попас", "попас", "попик", "попит", "попіл", "попса", "пореи", "пореп", "порив", "порив", "поріг", "порід", "поріз", "порок", "пором", "порон", "порох", "порох", "порти", "порто", "поруб", "порух", "порча", "поряд", "посаг", "посад", "посад", "посад", "посів", "посіл", "посол", "посох", "посуд", "посуш", "посюх", "поташ", "потир", "потік", "потоп", "потур", "потяг", "потяг", "поука", "похил", "похід", "поход", "почет", "почин", "почот", "пошта", "пошуг", "пошук", "пошум", "поява", "право", "праид", "праис", "прало", "праля", "праця", "праща", "преса", "прима", "принц", "приск", "прича", "причт", "приют", "пріам", "пріль", "пріор", "пріор", "проба", "прова", "проза", "проса", "просо", "профі", "проща", "прояв", "прусс", "пряжа", "пряля", "пряма", "пряха", "псина", "псина", "псиця", "псише", "псище", "псота", "псюга", "псюка", "псюра", "псяка", "псяра", "птаха", "птахи", "пташа", "птиця", "птиця", "пуант", "пугар", "пугач", "пугач", "пудик", "пудло", "пудра", "пужак", "пужка", "пузан", "пузир", "пузце", "пульс", "пульт", "пункт", "пупок", "пурга", "пурин", "пурка", "пуста", "путня", "путря", "путті", "путто", "пуття", "пуфик", "пухир", "пучка", "пучок", "пушка", "пушок", "пушок", "пушта", "пушту", "пущик", "пшоно", "рабат", "рабин", "радар", "раджа", "радіи", "радіо", "радіо", "радон", "радця", "разок", "раіна", "раики", "раино", "раиок", "раион", "раиця", "раква", "ракія", "ракло", "ракля", "ракша", "рамет", "рамка", "рампа", "рамтя", "рамця", "ранет", "ранка", "рання", "ранок", "ранчо", "рапак", "рапач", "рапід", "растр", "ратаи", "ратин", "раунд", "рафик", "рафід", "рафія", "рафія", "рахва", "рахіт", "рацея", "раціо", "рація", "рація", "рачок", "рвань", "рдест", "ребро", "ребус", "ревіт", "ревіт", "ревун", "регбі", "регіт", "редан", "редис", "редиф", "редут", "режим", "резол", "резон", "резус", "резус", "реика", "рекет", "реліз", "релін", "ремез", "реміз", "ренет", "ренет", "реніи", "ренін", "ренод", "рента", "репер", "репет", "ретро", "ретур", "ретуш", "решка", "решта", "рибак", "рибар", "рибас", "рибат", "рибка", "ривок", "рижик", "рижіи", "рижок", "риззя", "ризик", "риика", "рикша", "римар", "римач", "ринва", "ринда", "ринда", "ринда", "риніт", "ринка", "ринок", "рипус", "рисак", "риска", "риска", "ристь", "ритон", "ритор", "риття", "рифлі", "рифма", "рихва", "рицар", "рицин", "рівня", "рівня", "рідня", "рієль", "ріжок", "ріжок", "різак", "різка", "різня", "різун", "ріиба", "ріиок", "рілля", "ріння", "ріпак", "ріпка", "ріска", "річка", "робак", "робер", "робот", "ровик", "ровта", "рогач", "рогач", "рогіз", "родак", "родео", "родит", "родич", "родіи", "роєць", "рожен", "рожок", "розор", "розум", "роиок", "рокер", "рокер", "рокіт", "ролер", "ролик", "роман", "роман", "ромеи", "ромен", "ромок", "рондо", "рондо", "рондо", "ронжа", "ропак", "росіл", "ростр", "ротик", "роток", "ротор", "рочок", "рояль", "ртуть", "рубаі", "рубач", "рубіж", "рубін", "рубка", "рубка", "рубль", "рубок", "рубок", "рудка", "рудня", "рудяк", "руіна", "рукав", "рулет", "рулон", "румак", "румба", "румун", "рунді", "рунді", "рупія", "рупор", "рурка", "русак", "русак", "русин", "русич", "русло", "рутил", "рутин", "рутка", "руфія", "ручаи", "ручка", "ручка", "рушіи", "рюмса", "рюмси", "рябко", "рябок", "рядно", "рядок", "ряжка", "рямка", "рямця", "ряска", "ряска", "саамі", "сабан", "сабаш", "сабеи", "сабза", "сабуб", "сабур", "саван", "савар", "саган", "сагиб", "саджа", "садка", "садка", "садка", "садно", "садок", "садок", "саєта", "сажка", "сажок", "сазан", "саига", "саида", "саика", "саика", "саира", "сакви", "сакля", "сакос", "салат", "салеп", "саліи", "салол", "салон", "салоп", "салют", "саман", "самба", "самбо", "самбо", "саміт", "самка", "самка", "самум", "санки", "сапер", "сапет", "сапка", "сапун", "сараи", "саржа", "сарна", "сарос", "сатин", "сатир", "сатир", "сауна", "сафра", "сачок", "сачок", "свазі", "свара", "сваха", "сверб", "светр", "свиня", "свиня", "свист", "свита", "свита", "свінг", "світа", "свіча", "свояк", "свято", "сеанс", "севін", "сегул", "седан", "седес", "сезам", "сезон", "сеиба", "сеиша", "секта", "селен", "селех", "селфі", "селюк", "селюх", "семіт", "сенат", "сенжа", "сенік", "сеноі", "сенті", "сепія", "сепія", "сепія", "септа", "серга", "серен", "серин", "серія", "серна", "серсо", "серум", "серце", "сесія", "сетер", "сеунч", "сивак", "сиваш", "сивка", "сивко", "сивуч", "сигла", "сигла", "сигма", "сидір", "сидні", "сидня", "сидун", "сизар", "сизик", "сизяк", "сиква", "сикля", "сикоз", "силак", "силан", "силач", "силка", "силок", "силом", "силон", "силос", "силун", "силур", "сильф", "синап", "синаш", "сингл", "синдх", "синик", "синод", "синок", "синус", "синюк", "синяк", "сипаи", "сирин", "сирок", "сирок", "сироп", "сирть", "сисак", "систр", "сисун", "ситал", "ситар", "ситко", "ситро", "ситце", "сифон", "сичик", "сичуг", "сичуг", "сищик", "сіаль", "сівак", "сівач", "сівба", "сівер", "сівня", "сівок", "сівці", "сідак", "сідач", "сіджо", "сідло", "сідок", "сієна", "сієра", "сіиба", "сіика", "сіиці", "сікар", "сікач", "сікач", "сікра", "сімак", "сімка", "сімня", "сінаж", "сінди", "сінки", "сінце", "сінці", "сіпак", "сіраи", "сірах", "сірка", "сірко", "сіряк", "сіряк", "сітка", "січка", "січна", "сішка", "скаба", "сказа", "скала", "скань", "скарб", "скарн", "скаут", "сквар", "сквер", "сквош", "скеит", "скеля", "скена", "скетч", "скиба", "скіпа", "скіра", "склад", "склад", "склеп", "склик", "скляр", "скоба", "скоба", "скопа", "скора", "скорб", "скорс", "скорц", "скота", "скотч", "скрад", "скрап", "скреб", "скрес", "скрик", "скрип", "скрут", "скрут", "скудо", "скука", "скула", "скунс", "слава", "слада", "слаид", "слань", "слеид", "сленг", "слива", "слизь", "слина", "слиня", "слище", "сліпи", "слово", "слоік", "слоня", "слуга", "слюда", "слюза", "смага", "смерд", "смерк", "смерч", "смиґа", "смисл", "сміха", "сміюн", "смола", "смолі", "сморж", "смрад", "смуга", "смута", "снага", "сниця", "снище", "сноза", "собор", "совик", "совіт", "совіт", "совка", "совок", "содом", "соика", "соиот", "сокіл", "сокіл", "сокір", "солея", "солід", "солод", "солон", "соляр", "соляр", "сомик", "сомок", "сомон", "сонар", "сонет", "сонок", "сонце", "сонях", "сопач", "сопіт", "сопка", "сопло", "сопля", "сопля", "сопун", "сопух", "сорго", "сорит", "сорок", "сором", "сорус", "соска", "сосна", "сосок", "сосун", "сотка", "сотня", "софіт", "софія", "софка", "сохар", "сохур", "сочка", "сошка", "спазм", "спаль", "спека", "спина", "спирт", "спиця", "співа", "спіса", "сплав", "сплав", "сплін", "спліт", "сплюх", "спона", "спора", "спорт", "спреи", "сприт", "спрут", "спрят", "спуза", "спурт", "спуск", "спуск", "спуск", "спуст", "спуст", "стадо", "стаєр", "стаза", "стала", "сталь", "сталь", "станс", "станя", "старт", "стать", "ствол", "створ", "стеєр", "стежа", "стежа", "стежі", "стезя", "стеик", "стека", "стела", "стеля", "стенд", "степс", "стерх", "стило", "стиль", "стиль", "стиль", "стиск", "стіна", "стовп", "стоік", "стокс", "стома", "стома", "стопа", "стопа", "стопа", "стопа", "стота", "стояк", "стоян", "страж", "страз", "страм", "страх", "страх", "стрес", "стриб", "стриж", "стрии", "стрик", "стрим", "стрих", "стріи", "стріи", "стріл", "стріп", "строк", "строп", "струг", "струг", "струг", "струк", "струм", "струп", "струс", "стуга", "стужа", "стуко", "стума", "ступа", "ступа", "стьон", "стяга", "суаре", "субір", "сувіи", "сугак", "судак", "судан", "суддя", "судза", "судія", "судно", "судно", "судок", "суєта", "сукія", "сукно", "сукня", "сукре", "сукуб", "сулія", "сулои", "сумах", "суміш", "сумка", "суніт", "суомі", "супер", "супін", "сурик", "сурма", "сурма", "сурна", "сурок", "сусак", "сусід", "сусік", "сусло", "сутаж", "сутки", "суття", "сутуж", "суфіи", "суфіт", "суфле", "сухар", "сучка", "сучок", "суччя", "сушар", "сушка", "сушня", "сущик", "суята", "сфера", "схема", "схима", "схима", "схлип", "схова", "сходи", "сходи", "схрон", "сцена", "сьєра", "сюжет", "сюіта", "сюрко", "сяєво", "сяиво", "сяння", "табес", "табін", "табір", "табло", "табун", "тавіт", "тавот", "тавро", "тагал", "таган", "тагма", "таєць", "тазик", "тазіє", "тазок", "таіна", "таига", "таика", "таимс", "таина", "такир", "такін", "такос", "такса", "такса", "таксі", "талан", "талер", "талер", "талес", "талик", "талиш", "таліб", "таліи", "талір", "талія", "талія", "талон", "тальк", "таляр", "тамга", "таміл", "танго", "танід", "танін", "танка", "танок", "тапер", "тапір", "таран", "тарас", "тараф", "тариф", "тасун", "татар", "татка", "татко", "тафон", "тафта", "тахва", "тахін", "тахля", "тахта", "тацет", "тачка", "ташка", "твань", "тверк", "твіст", "театр", "тежик", "тезис", "тезка", "тезко", "теізм", "теіст", "текст", "телек", "теліи", "теліт", "теліш", "телур", "тембр", "темка", "темня", "теніс", "тенно", "тенор", "тепло", "терем", "терен", "терен", "терен", "терка", "терло", "терми", "терни", "терно", "терно", "терня", "терор", "тертя", "тесак", "тесан", "тесла", "тесло", "тесля", "тесть", "тетан", "теург", "техно", "течія", "течка", "тешка", "тибар", "тибон", "тивун", "тигря", "тижба", "тижик", "тиква", "тикер", "тимін", "тимол", "тимус", "тиння", "тинок", "тиньк", "типаж", "типаж", "типик", "тираж", "тираж", "тиран", "тирка", "тирло", "тирса", "тирса", "титан", "титан", "титан", "титар", "титла", "титло", "титул", "тичба", "тичка", "тичок", "тишко", "тіара", "тікач", "тінок", "тіпун", "тісто", "тітка", "тічка", "тічня", "тічок", "ткаля", "ткань", "ткаха", "тлінь", "товар", "товар", "товба", "товча", "товща", "тодес", "тоион", "токаи", "токан", "токар", "токен", "толаи", "толар", "толок", "толос", "томат", "томат", "томик", "тондо", "тонер", "тонік", "тонір", "тонна", "тонос", "тонус", "топаз", "топаз", "топір", "топіт", "топка", "топос", "торба", "торги", "торит", "торіи", "торок", "тороп", "торос", "тосол", "тотем", "тохар", "точіи", "точка", "точок", "точок", "точок", "трава", "траик", "тракт", "транс", "транш", "траса", "траст", "трата", "траур", "треба", "трель", "трема", "тренд", "трест", "трефа", "триба", "триба", "тризм", "трико", "трина", "трипс", "триух", "тріас", "трієр", "тріод", "тріск", "троль", "тромб", "тромб", "тромп", "тропа", "троха", "троха", "троща", "трояк", "трояк", "троян", "труба", "труна", "трупа", "труса", "труси", "труск", "трусь", "трута", "труха", "трюмо", "тсуга", "туаль", "тубик", "тубус", "тугаі", "тужба", "тукан", "туліи", "туліт", "тулія", "тулуб", "тулук", "тулун", "тулуп", "тумак", "тумак", "туман", "туман", "тумба", "тумен", "тумор", "тупак", "тупак", "тупик", "тупіи", "тупіт", "турач", "турба", "турка", "турма", "турне", "турня", "турок", "турон", "турун", "турча", "тусан", "туска", "тусок", "тутор", "тутсі", "туфіт", "туфля", "тушка", "тушка", "тьотя", "тюбик", "тюжка", "тюнер", "тюрбо", "тюрма", "тютюн", "тючок", "тюшен", "тябло", "тягар", "тягач", "тягло", "тягун", "тяжба", "тяжка", "тямка", "тямок", "уазик", "уалер", "уарао", "убрус", "увага", "увага", "увала", "увеіт", "увера", "уврат", "увула", "угара", "углич", "угода", "угрин", "удача", "удеге", "удема", "удова", "ужака", "узанс", "узара", "узбек", "узбои", "узвар", "узвіз", "узлик", "уілит", "уіпет", "уигур", "уимак", "уклад", "уклея", "уклін", "уклон", "уколо", "укріп", "укріп", "улекс", "улива", "улиця", "улога", "ульва", "ульта", "умбон", "умбра", "умбри", "уміак", "уміст", "умова", "умора", "унабі", "уніат", "унізм", "уніон", "унтер", "унука", "унуча", "унція", "упіст", "уплет", "упліт", "упруг", "упряж", "упука", "упуст", "ураза", "ураза", "ураза", "урама", "урарт", "ураса", "ургіт", "ургуи", "урдит", "уреід", "уреіт", "урема", "урина", "урман", "урода", "уроки", "уртит", "урубу", "уруно", "уруту", "уруть", "усміх", "уснея", "усніє", "успіх", "устав", "устав", "усташ", "устид", "устка", "устоі", "уступ", "уступ", "усуні", "утвір", "утека", "утеча", "утиль", "утиск", "утіки", "утіха", "утома", "уцміи", "учень", "учком", "ушкал", "ушкол", "ушкуи", "ушула", "ущерб", "фабра", "фавна", "фавор", "фавус", "фагот", "фазан", "фазис", "фаида", "фаика", "факел", "факін", "факір", "факля", "фалда", "фалес", "фалос", "фальц", "фальш", "фанат", "фанза", "фанза", "фанта", "фанта", "фантя", "фарба", "фасад", "фасет", "фаска", "фаска", "фасон", "фатум", "фауна", "фацет", "фація", "фаянс", "фелах", "фелон", "феніі", "феніи", "феніл", "фенол", "феном", "ферзь", "ферит", "феріі", "ферма", "ферма", "феска", "фетва", "фетиш", "фетиш", "фіакр", "фібра", "фіґлі", "фідер", "фізик", "фізія", "фікса", "фікус", "філеи", "філер", "філер", "філіт", "філія", "фільм", "фільц", "фімоз", "фінал", "фінік", "фініш", "фінка", "фінка", "фінка", "фіноз", "фіорд", "фірма", "фітин", "фітол", "фішка", "фланг", "фланк", "флеит", "флеиц", "флінт", "флірт", "флокс", "флора", "флуєр", "флюід", "фляга", "фляки", "фобія", "фокус", "фокус", "фоліо", "фомоз", "фонон", "форма", "форта", "форте", "форум", "фоска", "фотон", "фофан", "фраєр", "фраза", "франк", "франк", "франт", "фрахт", "фреза", "фреим", "френч", "фреон", "фрика", "фронт", "фрукт", "фрунт", "фряги", "фугас", "фуете", "фужер", "фузея", "фузія", "фузія", "фукус", "фуляр", "фураж", "фурик", "фурія", "фурка", "фурма", "фурор", "футор", "футро", "фуяра", "фюрер", "хабаз", "хабар", "хабуз", "хаваш", "хавка", "хаджі", "хадіс", "хазар", "хазія", "хазяи", "хакан", "хакас", "хакер", "хакім", "халал", "халат", "халаш", "халва", "халіф", "хамам", "хаміт", "хамка", "хамло", "хамло", "хамон", "хамса", "ханат", "ханжа", "ханжа", "ханти", "ханша", "хапіи", "хапка", "хапло", "хапок", "хапун", "харем", "харза", "харло", "харон", "харчі", "харчо", "харящ", "хасид", "хаскі", "хатиб", "хатка", "хауса", "хауса", "хафіз", "хашиш", "хвала", "хваст", "хвест", "хвиґа", "хвижа", "хвиля", "хвиля", "хвища", "хвіст", "хвора", "хвура", "хевея", "хедер", "хедер", "хедив", "херес", "хижак", "хижак", "хижка", "химля", "хиндя", "хиріи", "хиряк", "хисть", "хитар", "хитун", "хихіт", "хіазм", "хідка", "хідня", "хілус", "хімік", "хімія", "хімус", "хінді", "хінін", "хінон", "хірот", "хісен", "хітин", "хітон", "хлань", "хлист", "хлист", "хлоня", "хлост", "хлюст", "хляґа", "хляка", "хляки", "хмара", "хміль", "хоана", "хобза", "хобот", "ходак", "ходжа", "ходик", "ходка", "ходня", "ходок", "ходок", "ходун", "хозар", "хокеи", "холін", "холка", "холод", "холоп", "холуи", "хомут", "хопер", "хопта", "хорал", "хорда", "хореи", "хореи", "хорея", "хосен", "хотар", "хохля", "хохма", "хохол", "хохол", "храма", "храпа", "хрест", "хрома", "хрунь", "хрунь", "хруск", "хруст", "хруст", "хруст", "хряск", "худак", "худко", "худяк", "худяк", "хунта", "хурал", "хурда", "хурія", "хурка", "хурма", "хурта", "хуста", "хустя", "хутір", "хутра", "хутро", "цадик", "цанга", "цапар", "цапик", "цапня", "цапок", "цапур", "цапфа", "царат", "царик", "царок", "цвіль", "цвіть", "цебер", "цебро", "цегея", "цегла", "цедра", "цезар", "цезіи", "целіт", "целон", "ценоз", "центр", "центр", "центр", "цепок", "церат", "церва", "церіи", "цесар", "цесія", "цефеи", "цехін", "цешка", "цибок", "цибук", "цибух", "циган", "цикля", "цинга", "цинік", "цинія", "цинка", "ципки", "цирка", "цироз", "циста", "цитра", "цифір", "цифра", "цівка", "цігун", "цілик", "цілик", "цілка", "ціпка", "ціпок", "ціпун", "ціпух", "цісар", "цнота", "цовта", "цокіт", "цуглі", "цукат", "цукор", "цукор", "цупка", "цурка", "цуцик", "цьора", "цюпка", "цюцик", "цябро", "цямра", "цяпка", "цятка", "чабак", "чабан", "чабер", "чавун", "чавун", "чагар", "чагун", "чадра", "чаєня", "чаика", "чаика", "чаима", "чаина", "чаиня", "чаиок", "чаиот", "чакан", "чаква", "часкі", "чакра", "чакра", "чакра", "чалка", "чалма", "чамка", "чамур", "чангі", "чанді", "чапан", "чапаш", "чапля", "чарка", "часок", "часть", "чатні", "чашка", "чвань", "чвара", "чвиря", "чекан", "чекан", "чекер", "чепак", "черва", "черва", "черви", "черга", "череп", "черес", "черет", "чернь", "чернь", "чернь", "черти", "честь", "четар", "четья", "чечен", "чечик", "чечіт", "чешка", "чешка", "чигир", "чигін", "чижик", "чикач", "чикси", "чилик", "чилим", "чинар", "чинба", "чинка", "чинки", "чинок", "чипси", "чирва", "чирка", "чирка", "чирок", "чирок", "чирун", "чирус", "чиряк", "число", "читач", "читка", "чифір", "чихир", "чичва", "чишка", "чишка", "чівка", "чівки", "чіжми", "чілка", "чімка", "чіпок", "чіпок", "чірка", "чічка", "чмана", "чмара", "чмель", "чміль", "чмола", "чобан", "чобіт", "човен", "чокан", "чокер", "чолка", "чолко", "чомпі", "чопер", "чопик", "чопок", "чорба", "чорна", "чорне", "чортя", "чотар", "чотки", "чохла", "чохол", "чрево", "чрена", "чтець", "чтиво", "чубак", "чубар", "чубик", "чубіи", "чубок", "чубук", "чубук", "чувал", "чуваш", "чугаи", "чугар", "чудак", "чудан", "чудар", "чудіи", "чужак", "чуика", "чуико", "чукан", "чукча", "чулан", "чулка", "чулко", "чулок", "чумак", "чумка", "чумка", "чунок", "чупер", "чурек", "чурка", "чурок", "чутка", "чуття", "чухна", "чухра", "чучхе", "чушка", "чушка", "шабас", "шабаш", "шабаш", "шабер", "шаблі", "шабля", "шабот", "шавка", "шажок", "шаиба", "шаика", "шаика", "шакал", "шалаш", "шалик", "шалон", "шалот", "шаман", "шамес", "шамок", "шамот", "шанин", "шапар", "шапка", "шарга", "шаржа", "шаржа", "шарик", "шасла", "шатен", "шатер", "шатія", "шатка", "шатки", "шатня", "шатро", "шатун", "шафар", "шафер", "шафір", "шафка", "шахва", "шахід", "шахта", "шашка", "шашка", "шашні", "шваба", "шваль", "шваля", "швара", "шварт", "шверт", "швець", "швора", "шевер", "шевня", "шевро", "шекер", "шелак", "шелеп", "шелех", "шелон", "шелті", "шельф", "шелюг", "шелюг", "шеляг", "шемая", "шепіт", "шерег", "шерех", "шерех", "шериф", "шериф", "шестя", "шефен", "шибер", "шибка", "шизик", "шиізм", "шиика", "шильд", "шинар", "шинка", "шинок", "шипах", "шипик", "шипіт", "шипіт", "шипун", "шипун", "шираз", "ширка", "ширма", "шитво", "шитик", "шитки", "шиття", "шифер", "шифон", "шихта", "шихта", "шишак", "шишак", "шишка", "шияка", "шіацу", "шіпка", "шкала", "шкапа", "шкафа", "шкафа", "шквал", "шкерт", "шкиль", "шкипа", "шкіра", "шкляр", "шкода", "шкода", "школа", "шкора", "шкраб", "шкраб", "шкуна", "шкура", "шланг", "шланк", "шлеиф", "шлиця", "шліпс", "шліца", "шлюха", "шляга", "шляпа", "шляпа", "шляпа", "шляра", "шляхт", "шмата", "шмига", "шмиґа", "шмідт", "шміль", "шмуга", "шнапс", "шнека", "шняга", "шобла", "шокер", "шолом", "шолпа", "шопка", "шорка", "шорка", "шорня", "шорти", "шофер", "шофта", "шохат", "шохет", "шошон", "шошон", "шпага", "шпада", "шпала", "шпана", "шпара", "шпача", "шпень", "шпера", "шпета", "шпиль", "шпиця", "шпіон", "шпола", "шпона", "шпоня", "шпора", "шприц", "шпрот", "шпуга", "шпуля", "шпунт", "шпунт", "шримс", "шрифт", "штаба", "штаґа", "штазі", "шталт", "штама", "штамб", "штамп", "штани", "штеин", "штемп", "штиба", "штиль", "штиль", "штиль", "штиль", "штиря", "штифт", "штола", "штолє", "штора", "шторм", "шторх", "штраф", "штрек", "штрих", "штука", "штука", "штурм", "шубат", "шубка", "шувар", "шувир", "шувір", "шугаи", "шугаи", "шугіт", "шудра", "шудра", "шузія", "шуиця", "шукач", "шулер", "шулик", "шулик", "шулік", "шулка", "шуляк", "шуляк", "шумер", "шумик", "шумка", "шумок", "шупас", "шурин", "шурка", "шурпа", "шуруп", "шурша", "шуряк", "шутер", "шутер", "шутка", "шутка", "шутка", "шуфля", "шухер", "шушон", "шушун", "шхери", "шхуна", "щавіи", "щавух", "щамба", "щастя", "щебет", "щебіт", "щебра", "щенюк", "щепіи", "щепка", "щепко", "щерба", "щерба", "щигля", "щипак", "щипак", "щипка", "щипок", "щипун", "щипці", "щирак", "щиріи", "щитик", "щиток", "щілка", "щіпка", "щітка", "щітяк", "щічка", "щовба", "щогла", "щолба", "щувак", "щудло", "щупак", "щупик", "щупка", "щупта", "щурик", "щуріи", "щурка", "щучка", "югурт", "юдник", "юдоль", "юзист", "юітка", "юкола", "юлиця", "юмізм", "юніор", "юнкер", "юнкор", "юннат", "юрист", "юрода", "юрфак", "юферс", "ябеда", "ябеда", "явида", "явина", "явище", "ягель", "ягода", "ягуар", "ядуха", "яєчко", "яєчня", "яєшня", "ялець", "ялина", "ялиця", "ялоза", "ямега", "ямище", "ямщик", "янгол", "янтар", "янтар", "япина", "япіги", "япіди", "ярець", "ярига", "яриза", "ярина", "яриця", "яриця", "ярлик", "ярміз", "ярміс", "ярота", "яруга", "ярчак", "ярчук", "ясень", "ясина", "яскір", "ясмин", "яспис", "ясько", "ятвяг", "ятіль", "ятлик", "яхонт", "яхонт", "ячник", "яшник"];
ReactDOM.render(React.createElement(App, {
  words: words,
  dic: dic
}), document.getElementById("app"));