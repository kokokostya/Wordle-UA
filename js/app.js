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

var words = ["слово", "радіо", "хвиля", "танок", "покер", "місто", "проба", "колір", "вівця", "місія"];
var dic = [];

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

  var timer = null; // Temporary alert message

  function renderAlert(str) {
    var msg = document.createElement("div");
    msg.classList.add("alert");
    msg.innerHTML = str;
    document.body.append(msg);
    setTimeout(function () {
      msg.remove();
    }, 3000);
  } // Initialize state


  React.useEffect(function () {
    setTimeLeft(getTimeTillMidnight());
    timer = setInterval(countDown, 1000);
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
  }

  function resetGame() {
    localStorage.removeItem("attempts");
    localStorage.removeItem("feedback");
    setResult(null);
  } // Days from Jan 20 2022 in Kyiv


  function getIssueNumber() {
    var first = new Date("Thu Jan 20 2022 00:00:00 GMT+0200 (EET)");
    var localNow = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Kiev"
    });
    var now = new Date(localNow);
    var diff = Math.round((now - first) / (1000 * 60 * 60 * 24));
    return diff % words.length;
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

    if (lastPlayedIssueNumber != currentIssueNumber) {
      localStorage.setItem("lastPlayedIssueNumber", JSON.stringify(currentIssueNumber));
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
    var solution = words[currentIssueNumber - 1]; // Attempts left

    if (result == null && cursor.attempt < 6 && cursor.letter > 4) {
      // Actual word
      if ("dic.includes(attempt)") {
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
      className: "row"
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacer half"
  }), _toConsumableArray("йцукенгшщзхї").map(function (letter) {
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
    className: "spacer"
  }), _toConsumableArray("фівапролджє").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
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
  }))), _toConsumableArray("ячсмитьбюґ").map(function (letter) {
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
  }))))), modal && /*#__PURE__*/React.createElement(Modal, {
    type: modal,
    handleClose: setModal,
    n: currentIssueNumber,
    stats: stats,
    settings: settings,
    setSettings: setSettings,
    result: result,
    timeLeft: timeLeft,
    attempt: cursor.attempt + 1,
    shareResult: shareResult,
    solution: words[currentIssueNumber - 1]
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
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "\u0412\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0437 6 \u0441\u043F\u0440\u043E\u0431."), " \u041A\u043E\u0436\u043D\u0430 \u0437\u0434\u043E\u0433\u0430\u0434\u043A\u0430 \u043C\u0443\u0441\u0438\u0442\u044C \u0431\u0443\u0442\u0438 \u0441\u043B\u043E\u0432\u0430\u0440\u043D\u0438\u043C \u0456\u043C\u0435\u043D\u043D\u0438\u043A\u043E\u043C. \u041F\u0456\u0441\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0441\u043F\u0440\u043E\u0431\u0438 \u043A\u043E\u043B\u0456\u0440 \u043F\u0456\u0434\u043A\u0430\u0436\u0435, \u043D\u0430\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0432\u0438 \u0431\u0443\u043B\u0438:"), /*#__PURE__*/React.createElement("dl", {
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
    }, "\u0430"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043A"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0442"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043E"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0440")), /*#__PURE__*/React.createElement("dd", {
      className: "small"
    }, "\u0416\u043E\u0434\u043D\u043E\u0457 \u0437 \u0446\u0438\u0445 \u0431\u0443\u043A\u0432 \u043D\u0435\u043C\u0430\u0454 \u0432 \u0441\u043B\u043E\u0432\u0456")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
      className: "fade small"
    }, /*#__PURE__*/React.createElement("p", null, "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0430 \u0433\u0440\u0430: ", /*#__PURE__*/React.createElement("a", {
      href: "https://www.powerlanguage.co.uk/wordle/"
    }, "WORDLE"), " \xA9 Josh Wardle, 2021-22"), /*#__PURE__*/React.createElement("p", null, "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044F: ", /*#__PURE__*/React.createElement("a", {
      href: "https://www.facebook.com/kokokostya/"
    }, "\u041A\u043E\u0441\u0442\u044F \u0427\u0435\u0440\u0435\u043F\u043E\u0432\u0441\u044C\u043A\u0438\u0439"), ", 2022"), /*#__PURE__*/React.createElement("p", null, "\u2116", props.n)));
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

ReactDOM.render(React.createElement(App), document.getElementById("app"));