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
  } // Days from Jan 22 2022 in Kyiv


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
            newStats.attempts[cursor.attempt] += 1;
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
        renderAlert("Введіть словниковий іменник");
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
    className: "spacer quarter"
  }), _toConsumableArray("фівапролджє").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
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
  }))), /*#__PURE__*/React.createElement("div", {
    className: "spacer quarter"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacer three-quarters"
  }), _toConsumableArray("ячсмитьбюґ").map(function (letter) {
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
    className: "spacer three-quarters"
  }))), modal && /*#__PURE__*/React.createElement(Modal, {
    type: modal,
    handleClose: setModal,
    n: currentIssueNumber,
    stats: stats,
    settings: settings,
    setSettings: setSettings,
    timeLeft: timeLeft,
    attempt: cursor.attempt,
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
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "\u0412\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0437 6 \u0441\u043F\u0440\u043E\u0431."), " \u041A\u043E\u0436\u043D\u0430 \u0437\u0434\u043E\u0433\u0430\u0434\u043A\u0430 \u043C\u0443\u0441\u0438\u0442\u044C \u0431\u0443\u0442\u0438 \u0441\u043B\u043E\u0432\u043D\u0438\u043A\u043E\u0432\u0438\u043C \u0456\u043C\u0435\u043D\u043D\u0438\u043A\u043E\u043C, \u0430\u043B\u0435 \u043D\u0435 \u0432\u043B\u0430\u0441\u043D\u043E\u044E \u043D\u0430\u0437\u0432\u043E\u044E. \u041F\u0456\u0441\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0441\u043F\u0440\u043E\u0431\u0438 \u043A\u043E\u043B\u0456\u0440 \u043F\u0456\u0434\u043A\u0430\u0436\u0435, \u043D\u0430\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0432\u0438 \u0431\u0443\u043B\u0438:"), /*#__PURE__*/React.createElement("dl", {
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
    }, "\u0448"), /*#__PURE__*/React.createElement("div", {
      className: "tile found"
    }, "\u0442"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0430"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043D"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0438")), /*#__PURE__*/React.createElement("dd", {
      className: "small"
    }, "\u0411\u0443\u043A\u0432\u0430 ", /*#__PURE__*/React.createElement("b", null, "\u0422"), " \u0454 \u0432 \u0441\u043B\u043E\u0432\u0456, \u0430\u043B\u0435 \u043D\u0435 \u0432 \u0446\u044C\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456")), /*#__PURE__*/React.createElement("dl", {
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

var words = ["слово", "видих", "свист", "вальс", "потік", "онука", "терен", "орден", "напій", "вікно", "засіб", "замах", "писар", "вождь", "велич", "чумак", "сукня", "регіт", "облік", "вихор", "лінза", "шкода", "життя", "назва", "увага", "майно", "хвиля", "площа", "читач", "гість", "скарб", "норма", "рупор", "смуга", "козак", "ризик", "диван", "пауза", "водій", "п'ята", "потяг", "лавка", "лілія", "дуель", "бекон", "магія", "ферма", "запис", "ліжко", "дзвін", "собор", "живіт", "нахил", "тачка", "тюрма", "канал", "тулуб", "віскі", "ляпас", "попіл", "жереб", "маляр", "куліш", "кошти", "стадо", "обман", "янгол", "устав", "поява", "отара", "свиня", "кефір", "краса", "лазня", "тітка", "попит", "смола", "пошук", "проба", "вдача", "брама", "явище", "запит", "право", "губка", "князь", "вість", "будка", "вміст", "кермо", "низка", "округ", "боєць", "битва", "сокіл", "в'їзд", "лінія", "повія", "туман", "спорт", "загін", "йолоп", "гараж", "викуп", "вплив", "суддя", "морок", "поїзд", "форма", "ідіот", "зомбі", "атлас", "плоть", "вим'я", "культ", "ворог", "сцена", "лишай", "колія", "чобіт", "спуск", "буква", "вирок", "сусід", "бугай", "заряд", "синок", "весло", "поріг", "канат", "груди", "штраф", "умова", "комір", "голос", "роман", "черга", "ворон", "баран", "вітер", "крило", "закон", "омана", "курча", "хмара", "ґанок", "фарба", "жрець", "вагон", "марка", "юрист", "захід", "фанат", "масаж", "сюжет", "буття", "голод", "врода", "район", "актив", "пачка", "птиця", "копія", "шепіт", "горло", "дірка", "вдова", "зріст", "удова", "тріск", "ескіз", "покер", "пацюк", "нафта", "город", "рубіж", "гілля", "хутір", "видра", "куток", "трава", "бузок", "віяло", "бійка", "демон", "обмін", "парта", "ягода", "драма", "мінус", "подія", "вихід", "поділ", "запал", "мумія", "шприц", "банда", "учень", "пошта", "пасмо", "іскра", "порив", "страх", "дівча", "горіх", "гачок", "дочка", "подив", "газон", "архів", "сітка", "рукав", "запас", "обрій", "графа", "батон", "бляха", "ґрунт", "натяк", "тепло", "зміна", "візок", "хабар", "потоп", "опора", "метод", "любов", "побут", "майка", "шорти", "отвір", "ґрати", "стіна", "завал", "товар", "шишка", "кубок", "рядок", "хміль", "полон", "хрест", "вибух", "халат", "завод", "кабан", "ярлик", "глузд", "сарай", "акція", "галас", "шапка", "метал", "злива", "бабця", "номер", "зграя", "вигук", "кошик", "метро", "палац", "ягуар", "козир", "казан", "кухня", "башта", "шкіра", "удача", "школа", "пункт", "молот", "клоун", "радіо", "родич", "дідок", "точка", "пугач", "скеля", "вірус", "цифра", "річка", "літак", "лайка", "хвала", "кавун", "дикун", "тісто", "вступ", "харчі", "похід", "мітла", "рояль", "дівка", "гілка", "масло", "тютюн", "двері", "гасло", "набір", "об'єм", "заєць", "мотив", "кішка", "група", "поема", "кураж", "дятел", "щастя", "садок", "цегла", "центр", "цятка", "герой", "торба", "надра", "гірка", "гумор", "какао", "листя", "серце", "майор", "ідеал", "гадка", "човен", "вуста", "арена", "натяг", "плече", "доказ", "палка", "дупло", "єврей", "житло", "осінь", "руїна", "відро", "наука", "рідня", "пекло", "завіт", "течія", "циган", "місія", "журба", "талія", "струм", "ступа", "стовп", "вечір", "досьє", "девіз", "м'ята", "курок", "сталь", "допит", "лицар", "вівця", "окріп", "війна", "честь", "дивак", "шабля", "качан", "ванна", "решта", "гайка", "стать", "зрада", "фірма", "лиман", "лідер", "євнух", "мороз", "аркуш", "пульс", "запах", "хунта", "шрифт", "бомба", "панно", "санки", "ринок", "пірат", "ребро", "втіха", "поміч", "пиріг", "обшук", "вулик", "спека", "пісок", "вовна", "дошка", "банка", "текст", "камін", "байка", "кіоск", "обруч", "ручка", "труна", "надія", "угода", "добро", "місце", "виріб", "чарка", "дрова", "жупан", "русло", "замок", "нитка", "хижак", "череп", "чабан", "цукор", "олень", "збори", "весна", "варта", "блиск", "голуб", "пляма", "казна", "витяг", "цуцик", "таксі", "груша", "візит", "вузол", "салон", "гроза", "зброя", "актор", "іспит", "слуга", "напад", "м'ясо", "зірка", "барон", "тягар", "ласка", "мавпа", "ранок", "оселя", "музей", "стрій", "бухта", "посуд", "гомін", "ґазда", "холод", "малюк", "повід", "образ", "білка", "огляд", "гусак", "берег", "плата", "океан", "склад", "вишня", "судно", "слина", "режим", "мішок", "монах", "екран", "епоха", "месія", "театр", "балон", "благо", "вінок", "п'єса", "зміст", "задум", "хвіст", "принц", "спирт", "тавро", "нація", "намет", "штани", "квіти", "обхід", "акорд", "тирса", "зілля", "сором", "обряд", "кобза", "парад", "жінка", "отець", "вибір", "голка", "крупа", "праця", "хутро", "павук", "ґвалт", "розум", "число", "народ", "виїзд", "змова", "рубін", "сваха", "намір", "подих", "буряк", "матір", "маска", "чашка", "успіх", "колос", "бабка", "лікар", "бобер", "докір", "тесть", "пісня", "слава", "полюс", "стиль", "відео", "політ", "синяк", "армія", "пір'я", "шторм", "вуйко", "чайка", "окунь", "крига", "спина", "місто", "наказ", "штиль", "арешт", "кулак", "багач", "фільм", "сфера", "ангел", "кожух", "моряк", "обсяг", "базар", "суміш", "сезон", "сідло", "сходи", "дотик", "вазон", "книга", "гроші", "пілот", "сосна", "букет", "порох", "козел", "панич", "особа", "свято", "стрес", "кажан", "орган", "глава", "петля", "жнива", "навик", "старт", "згода", "тайна", "зошит", "напис", "пучок", "зерно", "сотня", "заява", "преса", "папір", "земля", "нутро", "титул", "влада", "килим", "меблі", "верба", "озеро", "втома", "узвар", "сім'я", "шолом", "атака", "казка", "посол", "келих", "курка", "дохід", "стеля", "затор", "ікона", "вираз", "багаж", "сяйво", "табір", "шинок", "танок", "заїка", "карта", "сонце", "секта", "схема", "горох", "дзьоб", "лампа", "глина", "фраза", "акула", "кухар", "пакет", "колір", "еліта", "тираж", "качка", "ефект", "криза", "втеча", "турка", "строк", "бочка", "автор", "усміх", "сумка", "геній", "чуття", "долар", "мозок", "панна", "думка", "шкура"];
var dic = ["абаза", "абазг", "абака", "абвер", "абзац", "аборт", "абрек", "абрис", "абхаз", "абцуг", "абшит", "аваль", "аванс", "авгур", "авгіт", "авдит", "авеню", "аверс", "авлос", "аврал", "авран", "автол", "автор", "авізо", "агава", "агама", "агамі", "агапе", "агент", "агнат", "агона", "агора", "аграф", "агуті", "адакс", "адепт", "адиге", "адоба", "адрес", "адрон", "аероб", "аерон", "ажгон", "азарт", "азіат", "айван", "аймак", "айран", "айсор", "акажу", "акант", "аканф", "акорд", "акрил", "аксис", "аксон", "актив", "актин", "актор", "акула", "акциз", "акція", "аларм", "алгол", "алель", "алеут", "алича", "алкан", "алкаш", "алкен", "алкіл", "алкін", "алмаз", "алоза", "алонж", "алтей", "алтея", "алтин", "альба", "альфа", "алярм", "алібі", "амбал", "амбар", "амбра", "амбре", "амвон", "амеба", "ампер", "ампль", "ампір", "амури", "аміак", "аміни", "амінь", "анарх", "анаша", "ангар", "ангел", "англи", "ангоб", "ангол", "анкер", "анона", "анонс", "антал", "антик", "антка", "антре", "антьє", "анчар", "аніон", "аорта", "апачі", "аплет", "апное", "апорт", "апрет", "апрош", "аргон", "аргус", "арден", "ареал", "арека", "арена", "арешт", "аркан", "аркоз", "аркуш", "армія", "арсен", "арсин", "артоз", "архар", "архей", "архів", "аршин", "асана", "аскер", "аскет", "аспид", "аспрі", "аспід", "астат", "астма", "асцит", "атака", "аташе", "атлас", "атлет", "аттик", "атфаз", "аудит", "аудіо", "аурум", "афект", "афера", "афина", "афікс", "афіша", "ацтек", "аґрус", "бабай", "бабак", "бабич", "бабка", "бабки", "бабня", "бабця", "бабій", "бабіт", "багаж", "багач", "багер", "багет", "багно", "багор", "багра", "бадан", "баддя", "базар", "базис", "байда", "байза", "байка", "бакай", "бакан", "бакен", "бакун", "бакша", "балан", "балда", "балет", "балик", "балка", "балон", "балта", "бальї", "балія", "бамія", "банан", "банда", "бандо", "банер", "банит", "банка", "банко", "банта", "банту", "бануш", "баняк", "баніт", "бараж", "барак", "баран", "барва", "барда", "бареж", "баржа", "барит", "бариш", "барка", "барки", "барми", "барок", "барон", "барій", "басет", "басма", "басок", "басон", "бастр", "басун", "батав", "батак", "батан", "батат", "батик", "батир", "батон", "батун", "батут", "батян", "батяр", "батіг", "баунс", "бахур", "бахус", "бахші", "бачки", "бачок", "башка", "башта", "баюра", "баяті", "бебех", "бевзь", "бевка", "бедро", "безум", "бейдж", "бейза", "бекар", "бекас", "бекет", "бекон", "беміт", "бенді", "бердо", "берег", "берет", "берил", "берло", "берма", "берці", "бесур", "бетон", "бидло", "билля", "бинда", "бирич", "бирка", "битва", "битка", "биток", "биття", "битюг", "битюк", "бичня", "бичок", "бишак", "благо", "бланк", "блиск", "блоха", "блохи", "блуза", "блюдо", "блюза", "бляга", "бляск", "бляха", "блінт", "бобер", "бобик", "бобир", "бобок", "бобур", "богол", "бодня", "бодхі", "бодян", "божба", "божок", "бозон", "бойко", "бойня", "бойок", "бокаж", "бокал", "бокло", "бокор", "болюс", "болід", "бомба", "бомжа", "бомки", "бонго", "бонза", "бонна", "бонус", "боран", "борат", "бордо", "борей", "борид", "борня", "борть", "босяк", "ботей", "ботик", "ботюк", "боцюн", "боцян", "бочка", "бочок", "боєць", "боїнг", "боїще", "брага", "брама", "бранч", "брань", "браса", "брача", "бреве", "брейк", "бренд", "бридж", "брижа", "брика", "брила", "бриль", "бриця", "брова", "бронх", "бронь", "броня", "брухт", "брюки", "брязк", "бріар", "бріош", "бубир", "бубна", "бубон", "бугай", "бугор", "будда", "будка", "будяк", "бузок", "буйок", "буква", "букер", "букет", "букле", "букля", "букса", "букша", "булат", "булет", "булка", "булла", "буліт", "бунда", "бурав", "буран", "бурат", "бурда", "бурей", "бурет", "бурка", "бурки", "бурло", "бурма", "бурса", "бурта", "бурун", "бурці", "буряк", "бурят", "бусел", "бусол", "бутан", "бутен", "бутик", "бутил", "бутин", "бутон", "буття", "бутут", "буфер", "буфет", "буфон", "бухан", "бухло", "бухта", "буцик", "бучок", "бушля", "бювар", "бювет", "бюкса", "бюлюк", "бюрко", "біакс", "бібка", "бібоп", "бівак", "бігль", "бігос", "бігун", "бідак", "бідар", "бідка", "бідон", "бізон", "бійка", "бійня", "білан", "білаш", "білет", "білик", "білка", "білль", "білля", "білок", "білон", "біляк", "біляш", "бінго", "біном", "біонт", "біота", "біржа", "бірка", "бісер", "бісик", "бісса", "бістр", "бісус", "бітер", "бітлз", "бітли", "бітум", "біґос", "в'язь", "в'янь", "в'їзд", "вабик", "вавка", "вагар", "вагон", "вагус", "важок", "вазка", "вазон", "вайда", "вайло", "вакат", "вакса", "валах", "валер", "валет", "валик", "валка", "валок", "валуй", "валун", "вальс", "валюш", "валін", "ванна", "ванта", "вапна", "вапно", "варан", "варга", "варка", "варми", "варна", "варта", "варяг", "васаг", "васал", "ватаг", "ватер", "ватин", "ватка", "ватра", "вафля", "вахня", "вахта", "вдача", "вдова", "вдяка", "вебер", "вежка", "векша", "велет", "велик", "велич", "велум", "вельд", "велюр", "венед", "венет", "верба", "веред", "верес", "верея", "верже", "верки", "верло", "версо", "верша", "весло", "весна", "вессі", "вечір", "взвод", "вибух", "вибіг", "вибій", "вибір", "вивал", "вивар", "вивих", "вивід", "вивіз", "вигад", "вигар", "вигин", "вигна", "вигук", "вигул", "вигін", "видик", "видих", "видма", "видок", "видра", "виділ", "вижга", "вижим", "виказ", "викид", "викот", "викуп", "викус", "вилаз", "вилив", "вилка", "вилки", "вилов", "вилом", "виліт", "вим'я", "вимах", "вимок", "вимін", "вимір", "винар", "винос", "винце", "випад", "випал", "випар", "випас", "випин", "випис", "випит", "випор", "випік", "випіт", "вираз", "вирва", "вирла", "вирло", "вирок", "вируб", "виріб", "вирід", "виріз", "вирій", "висип", "висок", "виспа", "висів", "витин", "виток", "витоп", "виття", "витяг", "витік", "витія", "вихор", "вихід", "вишар", "вишка", "вишня", "вищип", "вищир", "виїзд", "вклад", "влада", "влксм", "вміст", "внука", "внуча", "вобла", "вовна", "вовча", "вогул", "водій", "вожак", "вождь", "возик", "возій", "вокал", "волан", "волик", "волок", "волос", "волот", "волох", "волхв", "вольт", "воляр", "вор'я", "ворог", "ворок", "ворон", "ворох", "ворса", "вотум", "вотяк", "вохра", "вошва", "вошка", "вояка", "вплив", "впуск", "враза", "врата", "врода", "вроки", "вруно", "встид", "вступ", "втеча", "втома", "втора", "втори", "втіки", "втіха", "вуаль", "вугля", "вугол", "вугор", "вудка", "вудій", "вужак", "вужик", "вузда", "вузол", "вуйко", "вуйна", "вулик", "вулій", "вурда", "вурка", "вусач", "вусик", "вусок", "вуста", "вутка", "вушко", "вівця", "відео", "відик", "відил", "відро", "відун", "віжка", "візаж", "візир", "візит", "візок", "візія", "війва", "війка", "війна", "війце", "вікно", "вілан", "вілая", "вілла", "вілік", "віліс", "віная", "вінея", "віник", "вінка", "вінок", "вінол", "вінце", "вінця", "вініл", "віола", "віпер", "вір'я", "віраж", "вірва", "вірго", "вірел", "вірин", "вірля", "віроз", "вірус", "вірша", "вісая", "віскі", "вісон", "віспа", "вість", "вітер", "вітит", "вітка", "вітта", "віття", "вітій", "вітія", "вічко", "вішак", "вішва", "вішка", "віщба", "віщун", "віяло", "вієла", "габро", "габіт", "гавот", "гавра", "гавря", "гагат", "гаддя", "гадик", "гадка", "газик", "газир", "газон", "гайда", "гайка", "гайно", "гайок", "гайот", "галас", "гален", "галея", "галич", "галка", "галон", "галоп", "галун", "галча", "галій", "галіт", "гамак", "гаман", "гамма", "гамон", "гамуз", "гамір", "ганаш", "ганка", "ганус", "гараж", "гарак", "гарба", "гарда", "гарем", "гарус", "гаряч", "гасло", "гатка", "гаття", "гаучо", "гахам", "гачок", "гашиш", "гвинт", "гебан", "гевал", "гевея", "гейша", "гекон", "гелер", "гелій", "гемон", "геном", "генрі", "геній", "геоїд", "гепак", "герма", "герой", "герць", "гетит", "гетра", "гетто", "геєна", "гилка", "гирка", "гирло", "гичка", "глава", "главк", "гладь", "гласи", "глиба", "глива", "глина", "глист", "глиця", "глоба", "глоса", "глота", "глузд", "глюон", "глянс", "глянц", "глясе", "гліпт", "гміна", "гнейс", "гнида", "гниль", "гнома", "гнояк", "гобой", "гобіт", "говір", "гогоз", "гогіт", "годок", "голиш", "голка", "голод", "голос", "голуб", "гольд", "гольф", "голяк", "голяр", "голій", "гомоз", "гомін", "гонка", "гонор", "гонча", "гоніт", "гопак", "горит", "горло", "горно", "горня", "город", "горох", "горст", "горща", "горіх", "гостя", "готур", "гофре", "гофри", "гохуа", "гоцак", "грало", "гранд", "грант", "грань", "графа", "грежа", "грена", "грець", "грива", "гридь", "грижа", "гризь", "гриль", "грище", "грогі", "гроза", "гроно", "гроші", "груба", "груда", "груди", "грудь", "грузд", "група", "груша", "гряда", "грязь", "гуава", "гуано", "губка", "гугля", "гугіт", "гудок", "гузир", "гузка", "гузно", "гукіт", "гуляш", "гумай", "гумка", "гумно", "гумоз", "гумор", "гумус", "гурба", "гуркх", "гурма", "гурон", "гурія", "гусак", "гусар", "гусит", "гуска", "гусла", "гуслі", "гусій", "гутня", "гуцул", "гучок", "гущак", "гюрза", "гяпік", "гібон", "гідра", "гілея", "гілка", "гілля", "гіляк", "гінді", "гінея", "гінка", "гіпюр", "гірка", "гірок", "гісоп", "гість", "гістя", "гітов", "гічка", "гієна", "давач", "давка", "давок", "дайка", "дайна", "дайра", "далеч", "далій", "далія", "дамба", "дамка", "дамно", "данка", "дання", "датив", "даток", "дацит", "дачка", "дашок", "дбаха", "двері", "дебет", "дебош", "дебрь", "дебрі", "дебют", "дебіл", "дебіт", "девон", "девіз", "декан", "декор", "демон", "демос", "денар", "денді", "денце", "дербі", "дерга", "дерен", "дереш", "дерик", "дерма", "дерть", "дерун", "дерій", "десть", "дефіс", "деїзм", "деїст", "джбан", "джгут", "джига", "джура", "дзбан", "дзвяк", "дзвін", "дзета", "дзиґа", "дзьоб", "дзюдо", "дзявк", "дибка", "дибки", "дивак", "диван", "дигер", "дикун", "дилда", "дилер", "димар", "димка", "димок", "динар", "динас", "динго", "динод", "диско", "дичка", "дичок", "дишло", "днина", "днище", "добич", "добра", "добро", "добір", "довід", "довіз", "догад", "догма", "дожин", "дозор", "дозір", "дойда", "дойна", "дойра", "доказ", "докер", "докір", "долар", "долив", "домен", "домик", "домна", "домра", "донка", "донна", "донор", "донос", "донья", "допис", "допит", "дорід", "досьє", "досів", "досіл", "дотеп", "дотик", "дофін", "доход", "дохід", "дочка", "дошка", "дощик", "доїзд", "драга", "драже", "драйв", "драла", "драма", "дрань", "драча", "древо", "дрейф", "дрена", "дриль", "дрова", "дроги", "дрозд", "друза", "друїд", "дрізд", "дуала", "дуаєн", "дуб'я", "дубль", "дубок", "дувал", "дуван", "дудар", "дудка", "дуель", "дужка", "дукар", "дукат", "дукач", "дуліб", "думка", "дунст", "дуоль", "дупло", "дурак", "дурка", "дурра", "дутар", "дутик", "дутиш", "дуття", "духан", "дучка", "душка", "душок", "дюбек", "дюкер", "дюшес", "дядьо", "дятел", "дячок", "дівер", "дівич", "дівка", "дівча", "дідич", "дідок", "дідух", "діжка", "дійво", "дійка", "дійна", "ділок", "дімок", "дірка", "дітки", "дієта", "евенк", "егіда", "едикт", "ейдос", "екзил", "екзот", "еклер", "екран", "елеат", "еллін", "ельфа", "елінг", "еліпс", "еліта", "емаль", "ембол", "емпат", "енант", "ендек", "ендем", "ендси", "енець", "ензим", "еозин", "еоліт", "еоцен", "епарх", "епонж", "епоха", "епюра", "епіка", "ербій", "ерзац", "еркер", "есдек", "ескіз", "естер", "естет", "етвеш", "етика", "етнос", "етрол", "ефект", "ефель", "ефіоп", "жабка", "жабра", "жабур", "жакан", "жакет", "жакоб", "жарок", "жатка", "жаття", "жебри", "желяр", "жених", "жеода", "жердь", "жердя", "жереб", "жереп", "жерех", "жерло", "жерун", "жетон", "живло", "живіт", "жидок", "жижки", "жилет", "жилка", "жират", "жираф", "жирок", "жирун", "житво", "житло", "життя", "житце", "житіє", "жичка", "жмаки", "жменя", "жмудь", "жмури", "жнець", "жнива", "жниво", "жниця", "жовна", "жовно", "жокей", "жолоб", "жорно", "жрець", "жриця", "жуйка", "жулан", "жупан", "жупел", "журав", "журба", "жучок", "жінка", "з'ява", "з'їди", "з'їжа", "з'їзд", "забаг", "забіг", "забій", "забіл", "забір", "завал", "завод", "завуч", "завід", "завіз", "завій", "завіт", "завія", "загад", "загал", "загар", "загин", "загул", "загін", "задих", "задок", "задум", "заділ", "зажим", "зажин", "зазив", "зазор", "зазуб", "зайда", "зайко", "зайча", "заказ", "закал", "закид", "закис", "заков", "закон", "закот", "закуп", "закут", "закіп", "залка", "залом", "заліг", "залік", "заліт", "замах", "замет", "замок", "замор", "замша", "замір", "заміс", "заник", "занос", "заніз", "запал", "запас", "запах", "запис", "запит", "запор", "запій", "запіл", "запір", "зарва", "зарев", "зарин", "зарис", "зарок", "заряд", "заріб", "зарід", "заріз", "зарік", "засип", "засов", "засос", "заспа", "засув", "засуд", "засяг", "засіб", "засів", "засік", "засіл", "затин", "затля", "затон", "затор", "затяг", "затік", "затір", "затія", "захит", "захищ", "захов", "захід", "заціп", "зачал", "зачеп", "зачин", "зачіп", "зачіс", "заява", "заяць", "заєць", "заїда", "заїзд", "заїка", "збава", "збаня", "збори", "зброя", "зброї", "збруя", "збрід", "зваба", "звага", "звада", "звода", "зводи", "звона", "звяга", "звіря", "згага", "згляд", "згода", "згола", "згора", "зграя", "згуба", "згуда", "здача", "здоба", "здрок", "здрік", "здухи", "зебра", "зелот", "зельц", "земля", "зеніт", "зерно", "зернь", "зерня", "зефір", "зилот", "зимно", "злада", "злато", "злива", "злоба", "злоги", "злото", "злуда", "злука", "злюка", "змага", "змова", "змога", "змора", "зміна", "зміст", "знада", "знать", "зоман", "зомбі", "зофор", "зошит", "зрада", "зраза", "зрази", "зріст", "зуб'я", "зубик", "зубок", "зубря", "зубці", "зудар", "зулус", "зумер", "зумпф", "зупин", "зурна", "зябля", "зябра", "зятик", "зівок", "зілля", "зірка", "зґура", "йодид", "йодль", "йолом", "йолоп", "йомен", "кабак", "кабан", "кабат", "кабза", "кавер", "кавка", "каврі", "кавун", "кагал", "каган", "кагат", "кагла", "кагор", "кадет", "кадик", "кадри", "кадуб", "кадук", "кадіб", "кадій", "кажан", "казан", "казах", "казка", "казна", "казня", "казус", "кайло", "кайма", "кайра", "какао", "калан", "калач", "калга", "калим", "калко", "калус", "калюс", "калій", "каліф", "каліч", "калія", "каман", "камея", "камза", "камка", "камса", "камін", "канак", "канал", "канар", "канат", "канва", "канна", "каное", "канон", "канун", "канюк", "капер", "капка", "капля", "капок", "капор", "капот", "капіж", "карат", "карга", "карго", "карда", "карел", "кариб", "карма", "карст", "карта", "карук", "карус", "карюк", "карія", "касик", "касир", "каска", "каско", "касог", "каста", "касія", "катар", "катер", "катет", "катод", "каток", "каурі", "кахля", "кацап", "качан", "качва", "качин", "качка", "качня", "качур", "кашка", "кашне", "кашпо", "кашуб", "каюта", "квага", "квадр", "квант", "кварк", "кварц", "кваси", "квача", "кваша", "квест", "квота", "квілт", "квіти", "кегль", "кегля", "келар", "келеп", "келех", "келих", "кельт", "келія", "кенаф", "кендя", "кепка", "керма", "кермо", "кесар", "кесон", "кетоз", "кетон", "кетяг", "кефір", "кечуа", "кеш'ю", "кивок", "кидок", "кидій", "кизил", "кийок", "килим", "киндя", "кират", "кирея", "кирза", "кирка", "кирпа", "кисет", "кисть", "китюх", "китяг", "кичка", "кишка", "кишло", "киюра", "кияка", "кладь", "клайм", "клака", "клаки", "кларк", "клект", "клема", "клень", "клерк", "клефт", "клоун", "клуня", "кльок", "кльон", "кльоц", "кльош", "клюга", "клюка", "кляпа", "кляча", "кліка", "кліко", "клінч", "кліпа", "кліпс", "кліть", "кліше", "кліщі", "кметь", "кнель", "кнеля", "кнехт", "книга", "княжа", "князь", "кнікс", "коала", "коата", "кобан", "кобза", "кобиз", "кобка", "кобол", "кобра", "кобуз", "ковач", "ковил", "ковмо", "ковуй", "когут", "кодло", "кодон", "кожан", "кожух", "козак", "козар", "козел", "козир", "козла", "козли", "козля", "козуб", "козяр", "козій", "койка", "койне", "койот", "кокер", "кокет", "кокле", "кокні", "кокон", "кокос", "кокош", "колаж", "колба", "колеж", "колет", "колик", "колон", "колос", "колот", "колун", "кольт", "кольє", "колій", "колір", "коліт", "колія", "комар", "комиз", "комин", "комиш", "комод", "комос", "комік", "комір", "конар", "коник", "конка", "конто", "конус", "конха", "конюх", "коняр", "копал", "копач", "копер", "копил", "копит", "копра", "копір", "копіт", "копія", "корал", "корба", "корда", "корма", "короб", "корок", "короп", "корса", "корчі", "коряк", "косар", "косач", "косяк", "котар", "котел", "котер", "котик", "котиш", "котко", "коток", "котон", "котун", "кофта", "кофій", "кохія", "коцик", "кочет", "кошик", "кошма", "кошти", "коєць", "кпини", "крага", "кража", "крайс", "краля", "крант", "краса", "крауч", "кредо", "креол", "креси", "крига", "крижі", "криза", "крило", "криль", "криля", "криси", "криха", "криця", "кроат", "крокі", "кроль", "кроля", "крона", "круль", "крупа", "крупи", "круча", "круїз", "кряча", "кріль", "ксива", "кубах", "кубик", "кубло", "кубок", "кувез", "кугут", "кудла", "кудли", "кудрі", "кузен", "кузня", "кузов", "кукан", "кукла", "кукса", "кулаж", "кулак", "кулан", "кулер", "кулик", "кулон", "культ", "куліш", "куман", "кумач", "кумжа", "кумик", "кумир", "кумис", "кумця", "кунак", "куння", "куншт", "куп'я", "купаж", "купер", "купка", "купля", "купна", "купол", "купон", "купча", "кураж", "курай", "курва", "курка", "курок", "курси", "куруш", "курча", "курій", "курія", "кусак", "кусок", "кутас", "кутик", "кутин", "кутис", "куток", "кутум", "куфія", "кухар", "кухва", "кухля", "кухня", "кухта", "куцак", "куцан", "куцик", "кучер", "кучка", "кучма", "кушир", "кушка", "кущик", "кхмер", "кювет", "кюрій", "кяриз", "кіанг", "кібуц", "ківер", "ківот", "кізка", "кізяк", "кійло", "кілер", "кілля", "кілок", "кілік", "кімвр", "кімля", "кінва", "кінза", "кіноа", "кінік", "кінін", "кіоск", "кіпер", "кіпка", "кірка", "кірха", "кіска", "кісся", "кіста", "кість", "кітва", "кітка", "кіфоз", "кішка", "лабаз", "лабка", "лабуз", "лабух", "лаваш", "лавка", "лавра", "лавіс", "ладан", "ладки", "лажук", "лазар", "лазер", "лазня", "лазок", "лазун", "лазур", "лайба", "лайда", "лайди", "лайка", "лайно", "лайфо", "лакей", "ламер", "лампа", "ламут", "ланди", "ландо", "ланка", "ланок", "лапай", "лапка", "лапки", "лапун", "лапша", "ларви", "ларга", "ларго", "ласач", "ласка", "ласун", "ласій", "латач", "латва", "латер", "латин", "латиш", "латка", "лаття", "латук", "латун", "лафет", "лафіт", "лахта", "левіт", "легат", "легіт", "ледар", "ледач", "лежак", "лежня", "лезво", "лейба", "лейка", "лекаж", "лельо", "лелія", "лемка", "лемко", "лемур", "леміш", "лента", "ленто", "леоне", "лепет", "лепех", "лепра", "лепта", "лерка", "летка", "лжець", "либак", "ливар", "лижва", "лижня", "лизак", "лизун", "лилик", "лиман", "лимар", "лимон", "линва", "линок", "липка", "лисак", "лиска", "листя", "лисун", "литва", "литво", "литка", "лиття", "литія", "лихач", "лихва", "лицар", "личак", "личко", "лишай", "лишка", "лишко", "лишок", "лобас", "лобик", "лобок", "лобур", "ловля", "логер", "логос", "логік", "логін", "лодва", "ложка", "лозан", "лойок", "локон", "локус", "локша", "ломик", "ломка", "ломіт", "лонжа", "лопар", "лопух", "лопіт", "лоток", "лотос", "лотра", "лотік", "лофер", "лохії", "лоція", "лошак", "луб'я", "лубок", "лугар", "лудан", "лужок", "лузга", "лунка", "лупак", "лупка", "лупій", "луска", "луста", "лутка", "луфар", "лучик", "лучка", "лучок", "лушня", "лушпа", "лущак", "лущик", "льоля", "льоха", "любас", "любва", "любка", "любко", "любов", "люгер", "людці", "люмен", "люнет", "люпин", "люпус", "лютий", "лютич", "лютня", "люшня", "лядка", "лямка", "ляпас", "ляпка", "ляпіс", "лярва", "лятва", "ляхва", "ляшка", "ляшок", "лящик", "ліази", "ліана", "лібра", "лівак", "лівер", "лівша", "лігво", "лідар", "лідер", "лідит", "ліжко", "лізин", "лізис", "лізка", "лізол", "лійка", "лікар", "лікер", "лілея", "лілія", "лімбо", "лімфа", "ліміт", "лінза", "лінон", "лінюх", "лінія", "ліпка", "ліпсі", "ліпід", "лірик", "ліска", "лісок", "літак", "літер", "літко", "літун", "літій", "літія", "ліцей", "ліція", "лічба", "м'яло", "м'ясо", "м'ята", "мавка", "мавпа", "магма", "магог", "магот", "магія", "мадам", "мадяр", "мажор", "мазар", "мазер", "мазка", "мазня", "мазок", "мазун", "мазур", "мазут", "мазій", "майво", "майка", "майно", "майор", "макао", "макет", "максі", "малай", "малат", "малеч", "малка", "малюк", "маляр", "маляс", "мамбо", "мамка", "мамут", "мамця", "мамій", "манат", "манго", "манеж", "манка", "манко", "манна", "манор", "мансі", "манта", "манто", "манул", "манір", "манія", "маорі", "мапка", "марал", "марго", "маржа", "марка", "марко", "марля", "марші", "масаж", "масай", "масив", "маска", "масло", "масон", "масть", "матка", "матня", "матюк", "матір", "мафія", "махра", "мачки", "мачок", "мачта", "маєво", "мбуті", "меблі", "мегом", "медик", "медок", "медіа", "мезга", "мезон", "мейоз", "мелай", "мелан", "мелос", "мення", "мерва", "мерин", "мерія", "месьє", "месія", "метал", "метан", "метек", "метил", "метис", "метка", "метод", "метол", "метоп", "метро", "меццо", "мечет", "мечик", "мийка", "мийня", "мирра", "мирта", "мисик", "миска", "мисль", "мисок", "митар", "митра", "миття", "мичка", "мишак", "мишва", "мишка", "мишій", "млака", "мливо", "мнець", "мнихи", "могар", "могер", "могол", "модем", "модус", "мозок", "мойва", "мойра", "моква", "мокко", "мокша", "молот", "молох", "моляр", "монах", "моном", "мопед", "морва", "морда", "морзе", "мороз", "морок", "морфа", "моряк", "моріг", "мосьє", "мосяж", "мотет", "мотив", "моток", "мотор", "мотто", "мотуз", "мохер", "моцак", "моцар", "мочар", "мочка", "мошва", "мошка", "мошок", "мрево", "мрець", "мряка", "мугир", "мужва", "мужик", "музей", "мукор", "мулат", "мулик", "мулла", "муляж", "муляр", "муліт", "мумія", "муміє", "мунгу", "мунда", "мурза", "мурин", "мурло", "мусон", "мутра", "муфта", "муцик", "мушва", "мушка", "мушля", "мушня", "мущир", "мюзет", "мюрид", "мігма", "мідяк", "мідяр", "мідія", "мізер", "мізок", "мікоз", "мікст", "мілім", "мімос", "мімік", "мінер", "мінет", "мінея", "мінор", "мінус", "міній", "міома", "міраж", "мірза", "мірка", "місто", "місце", "місіс", "місія", "мітка", "мітла", "мітоз", "міток", "міхур", "мішка", "мішма", "мішок", "міщух", "набат", "набла", "набоб", "набіг", "набід", "набій", "набіл", "набір", "навал", "навар", "навик", "навис", "навід", "навіз", "навій", "навіс", "нагад", "нагай", "наган", "нагар", "нагин", "нагул", "нагін", "надир", "надих", "надра", "надро", "надій", "наділ", "надія", "нажив", "нажин", "назва", "найда", "найми", "найом", "найра", "наказ", "накат", "накид", "накип", "накри", "налив", "налой", "наліп", "наліт", "намаз", "намел", "намет", "намив", "намул", "намюр", "намір", "нанду", "нанка", "нанос", "напад", "напай", "напар", "напис", "напій", "напір", "нарив", "нарис", "народ", "нарта", "наряд", "нарід", "наріз", "насад", "насип", "насит", "насос", "насув", "насів", "натяг", "натяк", "натік", "наука", "нафта", "нахил", "нація", "начин", "начіс", "нащот", "наяда", "наїзд", "нгвеє", "небіж", "небій", "невід", "негус", "недея", "недуг", "нежар", "нежер", "нежид", "нежир", "нежит", "нелад", "нелюб", "нелюд", "неміч", "ненка", "неньо", "нерет", "нерка", "нероб", "нерод", "нерол", "нерпа", "несун", "несів", "нетеч", "нетля", "нетрі", "нетям", "нехар", "нецке", "нечая", "нив'я", "нивка", "низка", "нирка", "нирок", "нитик", "нитка", "ниття", "ницак", "новак", "ножик", "ножні", "нойон", "номад", "номен", "номер", "нонет", "норка", "норма", "норов", "норія", "носай", "носак", "носар", "носач", "носик", "носок", "носій", "нотар", "нотка", "ночви", "ношпа", "нудяр", "нужда", "нузда", "нукер", "нулик", "нумер", "нурка", "нурок", "нурта", "нутро", "нюанс", "нюнка", "нюхар", "нюхач", "нявка", "няньо", "нівоз", "ніжка", "ніжна", "нізка", "німак", "німка", "німфа", "німча", "нірка", "нітон", "нічия", "нічка", "оазис", "об'яв", "об'єм", "обава", "обвал", "обвід", "обвіз", "обвіс", "обгін", "оберт", "обжин", "обзив", "обида", "обкат", "обком", "обкіс", "облав", "облаз", "облак", "облов", "облой", "облом", "облуд", "облук", "обліг", "облій", "облік", "обліт", "обліч", "обман", "обмах", "обмел", "обмет", "обмін", "обмір", "обніж", "обора", "образ", "обрив", "обрис", "оброк", "обруб", "обрус", "обруч", "обряд", "обріз", "обрій", "обрік", "обсяг", "обсів", "обсіч", "обтік", "обуда", "обуза", "обхід", "обцас", "обчас", "обшар", "обшир", "обшук", "овеча", "овище", "овоїд", "овізм", "огень", "огида", "оглав", "оглас", "огляд", "огонь", "огром", "огріх", "огуда", "огузи", "одвал", "одвір", "одвіт", "одгин", "одежа", "одеон", "одліт", "одура", "одяга", "ожика", "ожина", "озеро", "озимі", "озирк", "ознак", "озноб", "ойкіт", "ойрот", "окань", "окапі", "океан", "оклад", "оклик", "окова", "окови", "около", "окрик", "округ", "окріл", "окріп", "оксид", "оксія", "октан", "октет", "окуга", "окунь", "окуня", "окіст", "окіян", "олень", "оленя", "олеум", "олеїн", "олива", "оливо", "олово", "олтар", "олімп", "оліфа", "омана", "омега", "омела", "омлет", "омуль", "онагр", "онова", "онука", "онуча", "онікс", "ооліт", "опади", "опала", "опара", "опера", "опиус", "оплет", "оплот", "опліт", "оповз", "опока", "опона", "опора", "опруг", "оптик", "опуда", "опука", "опуст", "опція", "опіат", "опіка", "опіум", "опіяк", "орава", "орало", "орган", "оргія", "орден", "ордер", "орель", "ореля", "ореол", "оркан", "орлан", "орлик", "орлон", "орляк", "оромо", "ортит", "оруда", "орхіт", "орчик", "оршад", "осада", "оселя", "осеїн", "осика", "осина", "оскал", "ослик", "ослюк", "ослін", "осліп", "осман", "осмол", "осмос", "осмій", "осміх", "оснач", "особа", "осока", "осоїд", "остит", "остов", "остюк", "остяк", "осуга", "осуда", "осьон", "осінь", "отава", "отара", "отвір", "отеса", "отець", "отоса", "отрок", "отруя", "отрій", "отуха", "отчич", "офеня", "офорт", "офсет", "офшор", "офіра", "охват", "охиза", "охота", "охіть", "очата", "оченя", "очепа", "очерт", "очиці", "очище", "очкур", "очник", "ошада", "ошкір", "ошука", "ошуст", "ощада", "п'ядь", "п'яза", "п'яло", "п'ята", "п'єза", "п'єса", "павза", "павич", "павук", "павун", "павур", "пагін", "пагір", "падко", "падла", "падло", "падре", "падуб", "падіж", "паділ", "пазик", "пазур", "пайда", "пайза", "пайка", "пайок", "пакер", "пакет", "пакля", "пакіл", "палас", "палац", "палаш", "палех", "палка", "палуб", "палюх", "паляр", "паляч", "палій", "памка", "пампа", "панас", "панва", "панда", "панич", "панна", "панно", "панок", "панти", "панін", "панія", "папая", "папка", "папля", "папір", "парад", "параф", "парез", "парик", "парка", "парки", "парло", "парна", "парня", "парод", "парок", "паром", "парох", "парта", "парті", "парус", "пархи", "парча", "парша", "парші", "паріг", "паріс", "парія", "пасаж", "пасат", "пасив", "пасик", "паска", "пасмо", "пасок", "паста", "пасть", "пасха", "пасія", "патер", "патик", "патли", "патуа", "патіо", "пауза", "пафос", "пахан", "пахар", "пахва", "пахно", "пахощ", "пахта", "пацан", "пацик", "пацюк", "пачка", "пашня", "паюха", "пегас", "педик", "пекан", "пекар", "пекло", "пелех", "пемза", "пенал", "пенат", "пенге", "пенні", "пеніс", "пепсі", "перга", "перед", "перко", "перла", "перли", "перло", "перон", "перса", "перст", "перун", "перце", "перія", "песев", "песик", "петек", "петит", "петля", "печія", "пивко", "пивна", "пивце", "пижик", "пижмо", "пилав", "пилка", "пилок", "пиляк", "пиляр", "пинда", "пипка", "пиптю", "пиріг", "пирій", "писак", "писар", "писок", "питво", "пиття", "питун", "пичка", "пишка", "пищик", "пияка", "плаке", "пласт", "плата", "плато", "плаун", "плаха", "плаїк", "плебс", "плеск", "плесо", "плече", "плеєр", "плита", "плиця", "плова", "плоть", "площа", "плюск", "плюта", "пляма", "пліва", "плісе", "пліть", "пнище", "побит", "побої", "побут", "побій", "побіл", "побір", "поваб", "поваг", "повал", "повар", "повня", "повів", "повід", "повіз", "повій", "повіт", "повія", "погар", "погон", "погук", "погін", "подив", "подих", "подок", "подра", "подув", "подум", "подій", "поділ", "подія", "поема", "пожар", "пожед", "позва", "позер", "позив", "позов", "позір", "позіх", "пойда", "показ", "покал", "покат", "покер", "покуп", "покій", "покір", "покіс", "покіт", "полба", "полив", "полик", "полин", "полка", "полог", "полоз", "полом", "полон", "полох", "полюс", "поляк", "поляр", "поліг", "полій", "поліп", "полір", "поліс", "політ", "помах", "помел", "помин", "помиї", "помка", "помок", "помор", "помпа", "помір", "поміч", "понос", "понур", "пончо", "понюх", "попал", "попар", "попас", "попик", "попит", "попса", "попіл", "порей", "пореп", "порив", "порок", "пором", "порон", "порох", "порти", "порто", "поруб", "порух", "порча", "поряд", "поріг", "порід", "поріз", "посаг", "посад", "посол", "посох", "посуд", "посуш", "посюх", "посів", "посіл", "поташ", "потир", "потоп", "потур", "потяг", "потік", "поука", "похил", "поход", "похід", "почет", "почин", "почот", "пошта", "пошуг", "пошук", "пошум", "поява", "поїзд", "право", "прайд", "прайс", "прало", "праля", "праця", "праща", "преса", "прима", "принц", "приск", "прича", "причт", "приют", "проба", "прова", "проза", "проса", "просо", "профі", "проща", "прояв", "прусс", "пряжа", "пряля", "пряма", "пряха", "пріам", "пріль", "пріор", "псина", "псиця", "псише", "псище", "псота", "псюга", "псюка", "псюра", "псяка", "псяра", "птаха", "птахи", "пташа", "птиця", "пуант", "пугар", "пугач", "пудик", "пудло", "пудра", "пужак", "пужка", "пузан", "пузир", "пузце", "пульс", "пульт", "пункт", "пупок", "пурга", "пурин", "пурка", "пуста", "путня", "путря", "путто", "пуття", "путті", "пуфик", "пухир", "пучка", "пучок", "пушка", "пушок", "пушта", "пушту", "пущик", "пшоно", "піала", "піано", "півка", "півча", "піжон", "пійло", "пікап", "пікер", "пікет", "пікша", "пілат", "пілка", "пілон", "пілот", "пінка", "пінта", "пінія", "пір'я", "пірат", "пірит", "пірке", "піроп", "пірце", "пісня", "пісок", "піспа", "пітон", "піфос", "піфія", "піхва", "піхви", "піхта", "піхур", "пічка", "пішак", "пішка", "пішня", "піяка", "піїта", "рабат", "рабин", "радар", "раджа", "радон", "радця", "радій", "радіо", "разок", "райки", "райно", "райок", "район", "райця", "раква", "ракло", "ракля", "ракша", "ракія", "рам'я", "рамет", "рамка", "рампа", "рамтя", "рамця", "ранет", "ранка", "рання", "ранок", "ранчо", "рапак", "рапач", "рапід", "растр", "ратай", "ратин", "раунд", "рафик", "рафід", "рафія", "рахва", "рахіт", "рацея", "раціо", "рація", "рачок", "раїна", "рвань", "рдест", "ребро", "ребус", "рев'ю", "ревун", "ревіт", "регбі", "регіт", "редан", "редис", "редиф", "редут", "режим", "резол", "резон", "резус", "рейка", "рекет", "реліз", "релін", "ремез", "реміз", "ренет", "ренод", "рента", "реній", "ренін", "репер", "репет", "ретро", "ретур", "ретуш", "решка", "решта", "риб'я", "рибак", "рибар", "рибас", "рибат", "рибка", "ривок", "рижик", "рижок", "рижій", "риззя", "ризик", "рийка", "рикша", "римар", "римач", "ринва", "ринда", "ринка", "ринок", "риніт", "рипус", "рисак", "риска", "ристь", "ритон", "ритор", "риття", "рифлі", "рифма", "рихва", "рицар", "рицин", "робак", "робер", "робот", "ровик", "ровта", "рогач", "рогіз", "родак", "родео", "родит", "родич", "родій", "рожен", "рожок", "розор", "розум", "ройок", "рокер", "рокіт", "ролер", "ролик", "роман", "ромей", "ромен", "ромок", "рондо", "ронжа", "ропак", "ростр", "росіл", "ротик", "роток", "ротор", "рочок", "рояль", "роєць", "ртуть", "руб'я", "рубач", "рубаї", "рубка", "рубль", "рубок", "рубіж", "рубін", "рудка", "рудня", "рудяк", "рукав", "рулет", "рулон", "румак", "румба", "румун", "рунді", "рупор", "рупія", "рурка", "русак", "русин", "русич", "русло", "рутил", "рутин", "рутка", "руфія", "ручай", "ручка", "рушій", "руїна", "рюмса", "рюмси", "рябко", "рябок", "рядно", "рядок", "ряжка", "рямка", "рямця", "ряска", "рівня", "рідня", "ріжок", "різак", "різка", "різня", "різун", "рійба", "рійок", "рілля", "ріння", "ріпак", "ріпка", "ріска", "річка", "рієль", "саамі", "сабан", "сабаш", "сабей", "сабза", "сабуб", "сабур", "саван", "савар", "саган", "сагиб", "саджа", "садка", "садно", "садок", "сажка", "сажок", "сазан", "сайга", "сайда", "сайка", "сайра", "сакви", "сакля", "сакос", "салат", "салеп", "салол", "салон", "салоп", "салют", "салій", "саман", "самба", "самбо", "самка", "самум", "саміт", "санки", "сапер", "сапет", "сапка", "сапун", "сарай", "саржа", "сарна", "сарос", "сатин", "сатир", "сауна", "сафра", "сачок", "саєта", "свазі", "свара", "сваха", "сверб", "светр", "свиня", "свист", "свита", "свояк", "свято", "свінг", "світа", "свіча", "сеанс", "севін", "сегул", "седан", "седес", "сезам", "сезон", "сейба", "сейша", "секта", "селен", "селех", "селфі", "селюк", "селюх", "сем'я", "семіт", "сенат", "сенжа", "сеної", "сенті", "сенік", "септа", "сепія", "серга", "серен", "серин", "серна", "серсо", "серум", "серце", "серія", "сесія", "сетер", "сеунч", "сивак", "сиваш", "сивка", "сивко", "сивуч", "сигла", "сигма", "сидня", "сидні", "сидун", "сидір", "сизар", "сизик", "сизяк", "сиква", "сикля", "сикоз", "силак", "силан", "силач", "силка", "силок", "силом", "силон", "силос", "силун", "силур", "сильф", "синап", "синаш", "сингл", "синдх", "синик", "синод", "синок", "синус", "синюк", "синяк", "сипай", "сирин", "сирок", "сироп", "сирть", "сисак", "систр", "сисун", "ситал", "ситар", "ситко", "ситро", "ситце", "сифон", "сичик", "сичуг", "сищик", "скаба", "сказа", "скала", "скань", "скарб", "скарн", "скаут", "сквар", "сквер", "сквош", "скейт", "скеля", "скена", "скетч", "скиба", "склад", "склеп", "склик", "скляр", "скоба", "скопа", "скора", "скорб", "скорс", "скорц", "скота", "скотч", "скрад", "скрап", "скреб", "скрес", "скрик", "скрип", "скрут", "скудо", "скука", "скула", "скунс", "скіпа", "скіра", "слава", "слада", "слайд", "слань", "слейд", "сленг", "слива", "слизь", "слина", "слиня", "слище", "слово", "слоня", "слоїк", "слуга", "слюда", "слюза", "сліпи", "смага", "смерд", "смерк", "смерч", "смисл", "смиґа", "смола", "смолі", "сморж", "смрад", "смуга", "смута", "сміха", "сміюн", "снага", "сниця", "снище", "сноза", "собор", "совик", "совка", "совок", "совіт", "содом", "сойка", "сойот", "сокіл", "сокір", "солея", "солод", "солон", "соляр", "солід", "сомик", "сомок", "сомон", "сонар", "сонет", "сонок", "сонце", "сонях", "сопач", "сопка", "сопло", "сопля", "сопун", "сопух", "сопіт", "сорго", "сорит", "сорок", "сором", "сорус", "соска", "сосна", "сосок", "сосун", "сотка", "сотня", "софка", "софіт", "софія", "сохар", "сохур", "сочка", "сошка", "спазм", "спаль", "спека", "спина", "спирт", "спиця", "сплав", "сплюх", "сплін", "спліт", "спона", "спора", "спорт", "спрей", "сприт", "спрут", "спрят", "спуза", "спурт", "спуск", "спуст", "співа", "спіса", "стадо", "стаза", "стала", "сталь", "станс", "станя", "старт", "стать", "стаєр", "ствол", "створ", "стежа", "стежі", "стезя", "стейк", "стека", "стела", "стеля", "стенд", "степс", "стерх", "стеєр", "стило", "стиль", "стиск", "стовп", "стокс", "стома", "стопа", "стота", "стояк", "стоян", "стоїк", "страж", "страз", "страм", "страх", "стрес", "стриб", "стриж", "стрий", "стрик", "стрим", "стрих", "строк", "строп", "струг", "струк", "струм", "струп", "струс", "стрій", "стріл", "стріп", "стуга", "стужа", "стуко", "стума", "ступа", "стьон", "стяга", "стіна", "суаре", "субір", "сувій", "сугак", "судак", "судан", "суддя", "судза", "судно", "судок", "судія", "сукно", "сукня", "сукре", "сукуб", "сукія", "сулой", "сулія", "сумах", "сумка", "суміш", "суніт", "суомі", "супер", "супін", "сурик", "сурма", "сурна", "сурок", "сусак", "сусло", "сусід", "сусік", "сутаж", "сутки", "суття", "сутуж", "суфле", "суфій", "суфіт", "сухар", "сучка", "сучок", "суччя", "сушар", "сушка", "сушня", "сущик", "суята", "суєта", "сфера", "схема", "схима", "схлип", "схова", "сходи", "схрон", "сцена", "сьєра", "сюжет", "сюрко", "сюїта", "сяйво", "сяння", "сяєво", "сіаль", "сівак", "сівач", "сівба", "сівер", "сівня", "сівок", "сівці", "сідак", "сідач", "сіджо", "сідло", "сідок", "сійба", "сійка", "сійці", "сікар", "сікач", "сікра", "сім'я", "сімак", "сімка", "сімня", "сінаж", "сінди", "сінки", "сінце", "сінці", "сіпак", "сірай", "сірах", "сірка", "сірко", "сіряк", "сітка", "січка", "січна", "сішка", "сієна", "сієра", "табес", "табло", "табун", "табін", "табір", "тавот", "тавро", "тавіт", "тагал", "таган", "тагма", "тазик", "тазок", "тазіє", "тайга", "тайка", "таймс", "тайна", "такир", "такос", "такса", "таксі", "такін", "талан", "талер", "талес", "талик", "талиш", "талон", "тальк", "таляр", "таліб", "талій", "талір", "талія", "тамга", "таміл", "танго", "танка", "танок", "танід", "танін", "тапер", "тапір", "таран", "тарас", "тараф", "тариф", "тасун", "татар", "татка", "татко", "тафон", "тафта", "тахва", "тахля", "тахта", "тахін", "тацет", "тачка", "ташка", "таєць", "таїна", "твань", "тверк", "твіст", "театр", "тежик", "тезис", "тезка", "тезко", "текст", "телек", "телур", "телій", "теліт", "теліш", "тембр", "темка", "темня", "тенно", "тенор", "теніс", "тепло", "терем", "терен", "терка", "терло", "терми", "терни", "терно", "терня", "терор", "тертя", "тесак", "тесан", "тесла", "тесло", "тесля", "тесть", "тетан", "теург", "техно", "течка", "течія", "тешка", "теїзм", "теїст", "тибар", "тибон", "тивун", "тигря", "тижба", "тижик", "тиква", "тикер", "тимол", "тимус", "тимін", "тиння", "тинок", "тиньк", "типаж", "типик", "тираж", "тиран", "тирка", "тирло", "тирса", "титан", "титар", "титла", "титло", "титул", "тичба", "тичка", "тичок", "тишко", "ткаля", "ткань", "ткаха", "тлінь", "товар", "товба", "товча", "товща", "тодес", "тойон", "токай", "токан", "токар", "токен", "толай", "толар", "толок", "толос", "томат", "томик", "тондо", "тонер", "тонна", "тонос", "тонус", "тонік", "тонір", "топаз", "топка", "топос", "топір", "топіт", "торба", "торги", "торит", "торок", "тороп", "торос", "торій", "тосол", "тотем", "тохар", "точка", "точок", "точій", "трава", "трайк", "тракт", "транс", "транш", "траса", "траст", "трата", "траур", "треба", "трель", "трема", "тренд", "трест", "трефа", "триба", "тризм", "трико", "трина", "трипс", "триух", "троль", "тромб", "тромп", "тропа", "троха", "троща", "трояк", "троян", "труба", "труна", "трупа", "труса", "труси", "труск", "трусь", "трута", "труха", "трюмо", "тріас", "тріод", "тріск", "трієр", "тсуга", "туаль", "тубик", "тубус", "тугаї", "тужба", "тукан", "тулуб", "тулук", "тулун", "тулуп", "тулій", "туліт", "тулія", "тумак", "туман", "тумба", "тумен", "тумор", "тупак", "тупик", "тупій", "тупіт", "турач", "турба", "турка", "турма", "турне", "турня", "турок", "турон", "турун", "турча", "тусан", "туска", "тусок", "тутор", "тутсі", "туфля", "туфіт", "тушка", "тьотя", "тюбик", "тюжка", "тюнер", "тюрбо", "тюрма", "тютюн", "тючок", "тюшен", "тябло", "тягар", "тягач", "тягло", "тягун", "тяжба", "тяжка", "тямка", "тямок", "тіара", "тікач", "тім'я", "тінок", "тіпун", "тісто", "тітка", "тічка", "тічня", "тічок", "уазик", "уалер", "уарао", "убрус", "увага", "увала", "увера", "увеїт", "уврат", "увула", "угара", "углич", "угода", "угрин", "удача", "удеге", "удема", "удова", "ужака", "узанс", "узара", "узбек", "узбой", "узвар", "узвіз", "узлик", "уйгур", "уймак", "уклад", "уклея", "уклон", "уклін", "уколо", "укріп", "улекс", "улива", "улиця", "улога", "ульва", "ульта", "умбон", "умбра", "умбри", "умова", "умора", "уміак", "уміст", "унабі", "унтер", "унука", "унуча", "унція", "уніат", "унізм", "уніон", "уплет", "упліт", "упруг", "упряж", "упука", "упуст", "упіст", "ураза", "урама", "урарт", "ураса", "ургуй", "ургіт", "урдит", "урема", "уреїд", "уреїт", "урина", "урман", "урода", "уроки", "уртит", "урубу", "уруно", "уруту", "уруть", "усміх", "уснея", "усніє", "успіх", "устав", "усташ", "устид", "устка", "устої", "уступ", "усуні", "утвір", "утека", "утеча", "утиль", "утиск", "утома", "утіки", "утіха", "уцмій", "учень", "учком", "ушкал", "ушкол", "ушкуй", "ушула", "ущерб", "уїлит", "уїпет", "ф'яба", "фабра", "фавна", "фавор", "фавус", "фагот", "фазан", "фазис", "файда", "файка", "факел", "факля", "факін", "факір", "фалда", "фалес", "фалос", "фальц", "фальш", "фанат", "фанза", "фанта", "фантя", "фарба", "фасад", "фасет", "фаска", "фасон", "фатум", "фауна", "фацет", "фація", "фаянс", "фелах", "фелон", "фенол", "феном", "феній", "феніл", "фенії", "ферзь", "ферит", "ферма", "ферії", "феска", "фетва", "фетиш", "фланг", "фланк", "флейт", "флейц", "флокс", "флора", "флуєр", "флюїд", "фляга", "фляки", "флінт", "флірт", "фобія", "фокус", "фоліо", "фомоз", "фонон", "форма", "форта", "форте", "форум", "фоска", "фотон", "фофан", "фраза", "франк", "франт", "фрахт", "фраєр", "фреза", "фрейм", "френч", "фреон", "фрика", "фронт", "фрукт", "фрунт", "фряги", "фугас", "фуете", "фужер", "фузея", "фузія", "фукус", "фуляр", "фураж", "фурик", "фурка", "фурма", "фурор", "фурія", "футор", "футро", "фуяра", "фюрер", "фіакр", "фібра", "фідер", "фізик", "фізія", "фікса", "фікус", "філей", "філер", "фільм", "фільц", "філіт", "філія", "фімоз", "фінал", "фінка", "фіноз", "фінік", "фініш", "фіорд", "фірма", "фітин", "фітол", "фішка", "фіґлі", "хабаз", "хабар", "хабуз", "хаваш", "хавка", "хаджі", "хадіс", "хазар", "хазяй", "хазія", "хакан", "хакас", "хакер", "хакім", "халал", "халат", "халаш", "халва", "халіф", "хамам", "хамка", "хамло", "хамон", "хамса", "хаміт", "ханат", "ханжа", "ханти", "ханша", "хапка", "хапло", "хапок", "хапун", "хапій", "харем", "харза", "харло", "харон", "харчо", "харчі", "харящ", "хасид", "хаскі", "хатиб", "хатка", "хауса", "хафіз", "хашиш", "хвала", "хваст", "хвест", "хвижа", "хвиля", "хвища", "хвиґа", "хвора", "хвура", "хвіст", "хевея", "хедер", "хедив", "херес", "хижак", "хижка", "химля", "хиндя", "хиряк", "хирій", "хисть", "хитар", "хитун", "хихіт", "хлань", "хлист", "хлоня", "хлост", "хлюст", "хляка", "хляки", "хляґа", "хмара", "хміль", "хоана", "хобза", "хобот", "ходак", "ходжа", "ходик", "ходка", "ходня", "ходок", "ходун", "хозар", "хокей", "холка", "холод", "холоп", "холуй", "холін", "хомут", "хопер", "хопта", "хорал", "хорда", "хорей", "хорея", "хосен", "хотар", "хохля", "хохма", "хохол", "храма", "храпа", "хрест", "хрома", "хрунь", "хруск", "хруст", "хряск", "худак", "худко", "худяк", "хунта", "хурал", "хурда", "хурка", "хурма", "хурта", "хурія", "хуста", "хустя", "хутра", "хутро", "хутір", "хіазм", "хідка", "хідня", "хілус", "хімус", "хімік", "хімія", "хінді", "хінон", "хінін", "хірот", "хісен", "хітин", "хітон", "цадик", "цанга", "цапар", "цапик", "цапня", "цапок", "цапур", "цапфа", "царат", "царик", "царок", "цвіль", "цвіть", "цебер", "цебро", "цегея", "цегла", "цедра", "цезар", "цезій", "целон", "целіт", "ценоз", "центр", "цепок", "церат", "церва", "церій", "цесар", "цесія", "цефей", "цехін", "цешка", "цибок", "цибук", "цибух", "циган", "цикля", "цинга", "цинка", "цинік", "цинія", "ципки", "цирка", "цироз", "циста", "цитра", "цифра", "цифір", "цнота", "цовта", "цокіт", "цуглі", "цукат", "цукор", "цупка", "цур'я", "цурка", "цуцик", "цьора", "цюпка", "цюцик", "цябро", "цямра", "цяпка", "цятка", "цівка", "цігун", "цілик", "цілка", "ціпка", "ціпок", "ціпун", "ціпух", "цісар", "чабак", "чабан", "чабер", "чавун", "чагар", "чагун", "чадра", "чайка", "чайма", "чайна", "чайня", "чайок", "чайот", "чакан", "чаква", "чакра", "чалка", "чалма", "чамка", "чамур", "чангі", "чанді", "чапан", "чапаш", "чапля", "чарка", "часкі", "часок", "часть", "чатні", "чашка", "чаєня", "чвань", "чвара", "чвиря", "чекан", "чекер", "чепак", "черва", "черви", "черга", "череп", "черес", "черет", "чернь", "черти", "честь", "четар", "четья", "чечен", "чечик", "чечіт", "чешка", "чигир", "чигін", "чижик", "чикач", "чикси", "чилик", "чилим", "чинар", "чинба", "чинка", "чинки", "чинок", "чипси", "чирва", "чирка", "чирок", "чирун", "чирус", "чиряк", "число", "читач", "читка", "чифір", "чихир", "чичва", "чишка", "чмана", "чмара", "чмель", "чмола", "чміль", "чобан", "чобіт", "човен", "чокан", "чокер", "чолка", "чолко", "чомпі", "чопер", "чопик", "чопок", "чорба", "чорна", "чорне", "чортя", "чотар", "чотки", "чохла", "чохол", "чрево", "чрена", "чтець", "чтиво", "чубак", "чубар", "чубик", "чубок", "чубук", "чубій", "чувал", "чуваш", "чугай", "чугар", "чудак", "чудан", "чудар", "чудій", "чужак", "чуйка", "чуйко", "чукан", "чукча", "чулан", "чулка", "чулко", "чулок", "чумак", "чумка", "чунок", "чупер", "чурек", "чурка", "чурок", "чутка", "чуття", "чухна", "чухра", "чучхе", "чушка", "чівка", "чівки", "чіжми", "чілка", "чімка", "чіпок", "чірка", "чічка", "шабас", "шабаш", "шабер", "шабля", "шаблі", "шабот", "шавка", "шажок", "шайба", "шайка", "шакал", "шалаш", "шалик", "шалон", "шалот", "шаман", "шамес", "шамок", "шамот", "шанин", "шапар", "шапка", "шарга", "шаржа", "шарик", "шасла", "шатен", "шатер", "шатка", "шатки", "шатня", "шатро", "шатун", "шатія", "шафар", "шафер", "шафка", "шафір", "шахва", "шахта", "шахід", "шашка", "шашні", "шваба", "шваль", "шваля", "швара", "шварт", "шверт", "швець", "швора", "шевер", "шевня", "шевро", "шекер", "шелак", "шелеп", "шелех", "шелон", "шелті", "шельф", "шелюг", "шеляг", "шемая", "шепіт", "шерег", "шерех", "шериф", "шестя", "шефен", "шибер", "шибка", "шизик", "шийка", "шильд", "шинар", "шинка", "шинок", "шипах", "шипик", "шипун", "шипіт", "шираз", "ширка", "ширма", "шитво", "шитик", "шитки", "шиття", "шифер", "шифон", "шихта", "шишак", "шишка", "шияка", "шиїзм", "шкала", "шкапа", "шкафа", "шквал", "шкерт", "шкиль", "шкипа", "шкляр", "шкода", "школа", "шкора", "шкраб", "шкуна", "шкура", "шкіра", "шланг", "шланк", "шлейф", "шлиця", "шлюха", "шляга", "шляпа", "шляра", "шляхт", "шліпс", "шліца", "шмата", "шмига", "шмиґа", "шмуга", "шмідт", "шміль", "шнапс", "шнека", "шняга", "шобла", "шокер", "шолом", "шолпа", "шопка", "шорка", "шорня", "шорти", "шофер", "шофта", "шохат", "шохет", "шошон", "шпага", "шпада", "шпала", "шпана", "шпара", "шпача", "шпень", "шпера", "шпета", "шпиль", "шпиця", "шпола", "шпона", "шпоня", "шпора", "шприц", "шпрот", "шпуга", "шпуля", "шпунт", "шпіон", "шримс", "шрифт", "штаба", "штазі", "шталт", "штама", "штамб", "штамп", "штани", "штаґа", "штейн", "штемп", "штиба", "штиль", "штиря", "штифт", "штола", "штолє", "штора", "шторм", "шторх", "штраф", "штрек", "штрих", "штука", "штурм", "шубат", "шубка", "шувар", "шувир", "шувір", "шугай", "шугіт", "шудра", "шузія", "шуйця", "шукач", "шулер", "шулик", "шулка", "шуляк", "шулік", "шумер", "шумик", "шумка", "шумок", "шупас", "шурин", "шурка", "шурпа", "шуруп", "шурша", "шуряк", "шутер", "шутка", "шуфля", "шухер", "шушон", "шушун", "шхери", "шхуна", "шіацу", "шіпка", "щавух", "щавій", "щамба", "щастя", "щебет", "щебра", "щебіт", "щенюк", "щепка", "щепко", "щепій", "щерба", "щигля", "щипак", "щипка", "щипок", "щипун", "щипці", "щирак", "щирій", "щитик", "щиток", "щовба", "щогла", "щолба", "щувак", "щудло", "щупак", "щупик", "щупка", "щупта", "щурик", "щурка", "щурій", "щучка", "щілка", "щіпка", "щітка", "щітяк", "щічка", "югурт", "юдник", "юдоль", "юзист", "юкола", "юлиця", "юмізм", "юнкер", "юнкор", "юннат", "юніор", "юрист", "юрода", "юрфак", "юферс", "юїтка", "ябеда", "явида", "явина", "явище", "ягель", "ягода", "ягуар", "ядуха", "ялець", "ялина", "ялиця", "ялоза", "ямега", "ямище", "ямщик", "янгол", "янтар", "япина", "япіги", "япіди", "ярець", "ярига", "яриза", "ярина", "яриця", "ярлик", "ярміз", "ярміс", "ярота", "яруга", "ярчак", "ярчук", "ясень", "ясина", "яскір", "ясмин", "яспис", "ясько", "ятвяг", "ятлик", "ятіль", "яхонт", "ячник", "яшник", "яєчко", "яєчня", "яєшня", "євнух", "єврей", "єдваб", "єднус", "єзуїт", "єресь", "єство", "єхида", "івасі", "іврит", "ігрек", "ідеал", "ідіом", "ідіот", "іжиця", "ізвод", "ізвір", "ізгой", "ізюбр", "ікона", "іксія", "ілеус", "ільма", "імаго", "імбир", "імпет", "імідж", "інвар", "інгуш", "індик", "індол", "індус", "індій", "інжир", "інтим", "інуїт", "іонол", "іоніт", "іприт", "ірбіс", "ірмос", "іскра", "іслам", "іспит", "істик", "ітрій", "іудей", "ішіас", "ієрей", "їдало", "їдець", "їздка", "їство", "ґаблі", "ґазда", "ґайда", "ґандж", "ґанки", "ґанок", "ґвалт", "ґвара", "ґедзь", "ґонта", "ґонтя", "ґрати", "ґроно", "ґрунт", "ґрунь", "ґудзь", "ґуґля", "срака", "индик"];
ReactDOM.render(React.createElement(App, {
  words: words,
  dic: dic
}), document.getElementById("app"));