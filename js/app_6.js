"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function App(props) {
  var lettersLimit = parseInt(props.letters) || 5;
  var attemptsLimit;
  var firstDay;
  switch (lettersLimit) {
    case 5:
      attemptsLimit = 6;
      firstDay = new Date("Thu Jan 22 2022 00:00:00 GMT+0200 (EET)");
      break;
    case 6:
      attemptsLimit = 6;
      firstDay = new Date("Thu Jul 6 2024 00:00:00 GMT+0200 (EET)");
      break;
  }
  var defaultStats = {
    games: 0,
    won: 0,
    streak: 0,
    maxStreak: 0,
    attempts: {}
  };
  for (var i = 1; i <= attemptsLimit; i++) {
    defaultStats.attempts[i] = 0;
  }
  var defaultAverageStats = {
    issue: 0,
    gamesPercentile: 0,
    wonPercentile: 0,
    maxStreakPercentile: 0,
    leagueName: "",
    leaderboard: [],
    averageAttemptPercentile: 0,
    attempts: {}
  };
  for (var _i = 1; _i <= 10; _i++) {
    defaultAverageStats.leaderboard.push({
      uid: "uid",
      pos: _i,
      streak: 0,
      maxStreak: 0
    });
  }
  for (var _i2 = 1; _i2 <= attemptsLimit; _i2++) {
    defaultAverageStats.attempts[_i2] = 0;
  }
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    attempts = _React$useState2[0],
    setAttempts = _React$useState2[1];
  var _React$useState3 = React.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    feedback = _React$useState4[0],
    setFeedback = _React$useState4[1];
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    result = _React$useState6[0],
    setResult = _React$useState6[1];
  var _React$useState7 = React.useState({
      attempt: 0,
      letter: 0
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    cursor = _React$useState8[0],
    setCursor = _React$useState8[1];
  var _React$useState9 = React.useState(defaultStats),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    stats = _React$useState10[0],
    setStats = _React$useState10[1];
  var _React$useState11 = React.useState(defaultAverageStats),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    averageStats = _React$useState12[0],
    setAverageStats = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    averageStatsLoaded = _React$useState14[0],
    setAverageStatsLoaded = _React$useState14[1];
  var _React$useState15 = React.useState({
      darkTheme: false,
      colorBlind: false,
      shareStats: true
    }),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    settings = _React$useState16[0],
    setSettings = _React$useState16[1];
  var _React$useState17 = React.useState(null),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    modal = _React$useState18[0],
    setModal = _React$useState18[1];
  var _React$useState19 = React.useState({
      "h": 0,
      "m": 0,
      "s": 0
    }),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    timeLeft = _React$useState20[0],
    setTimeLeft = _React$useState20[1];
  var _React$useState21 = React.useState(false),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    wrongAttempt = _React$useState22[0],
    setWrongAttempt = _React$useState22[1];
  var _React$useState23 = React.useState(null),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    UID = _React$useState24[0],
    setUID = _React$useState24[1];
  var timer;

  // Store previous settings to compare in the useEffect
  function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
      ref.current = value;
    });
    return ref.current;
  }
  var prevSettings = usePrevious(settings);

  // Load from local storage
  React.useEffect(function () {
    // Load unfinished game if still valid
    if (getFromLocalStorage("lastPlayedIssueNumber") == getIssueNumber()) {
      var localAttempts = tryLoadingFromLocalStorage("attempts", attempts, {
        setter: setAttempts
      });
      var localFeedback = tryLoadingFromLocalStorage("feedback", feedback, {
        setter: setFeedback
      });
      tryLoadingFromLocalStorage("result", result, {
        setter: setResult
      });
      setCursor({
        attempt: localFeedback ? localFeedback.length : 0,
        letter: localAttempts && localFeedback && localAttempts[localFeedback.length] ? localAttempts[localFeedback.length].length : 0
      });
    } else {
      resetGame();
    }
    tryLoadingFromLocalStorage("UID", UID, {
      setter: setUID,
      defaultValue: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
      ignoreLettersLimit: true
    });
    tryLoadingFromLocalStorage("settings", settings, {
      setter: setSettings
    });
    tryLoadingFromLocalStorage("stats", stats, {
      setter: setStats
    });
  }, []);

  // Save to local storage
  React.useEffect(function () {
    saveToLocalStorage("attempts", attempts);
  }, [attempts]);
  React.useEffect(function () {
    saveToLocalStorage("feedback", feedback);
  }, [feedback]);
  React.useEffect(function () {
    var localStats;
    try {
      localStats = getFromLocalStorage("stats");
    } catch (e) {
      localStats = null;
    }
    // Never override valid local stats, only update if new game released or streak was broken
    if (!localStats || localStats.games <= stats.games) {
      saveToLocalStorage("stats", stats);
    }
    settings.shareStats && UID && stats.games > 0 && updateAverageStats(stats);
  }, [stats]);
  React.useEffect(function () {
    saveToLocalStorage("result", result);
    if (result != null) setTimeout(function () {
      return setModal("stats");
    }, 1000);
  }, [result]);
  React.useEffect(function () {
    saveToLocalStorage("UID", UID, true);
    // Fix individual user's stats
    // if (UID == "lsea70ez1vf70q6tr" && stats.games < 523) {
    //   saveToLocalStorage(
    //     "stats", 
    //     {
    //       games:523,
    //       won:513,
    //       streak:8,
    //       maxStreak:151,
    //       attempts:{
    //         1:5,
    //         2:39,
    //         3:111,
    //         4:161,
    //         5:146,
    //         6:51
    //       }
    //     },
    //     true
    //   );
    // }
  }, [UID]);

  // Update theme and save to local storage
  React.useEffect(function () {
    settings.darkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    settings.colorBlind ? document.body.classList.add("color-blind") : document.body.classList.remove("color-blind");
    saveToLocalStorage("settings", settings, true);
    prevSettings && !prevSettings.shareStats && settings.shareStats && UID && stats.games > 0 && updateAverageStats(stats);
  }, [settings]);

  // Keep track of time and reset once new game is out
  React.useEffect(function () {
    setTimeLeft(getTimeTillMidnight());
    timer = setInterval(function () {
      var lastPlayed = getFromLocalStorage("lastPlayedIssueNumber");
      if (lastPlayed && lastPlayed != getIssueNumber()) {
        resetGame();
        lastPlayed = getIssueNumber();
      }
      setTimeLeft(getTimeTillMidnight());
    }, 1000);
    return function () {
      clearInterval(timer);
      timer = null;
    };
  }, []);

  // Accept keyboard input
  var keyListener = React.useCallback(function (e) {
    if ("’йцукенгшщзхїфівапролджєячсмитьбю".includes(e.key)) {
      e.preventDefault();
      enterLetter(e.key);
    } else if (e.code == "Backspace" || e.code == "Delete") {
      e.preventDefault();
      eraseLetter();
    } else if (e.code == "Enter") {
      e.preventDefault();
      checkWord();
    }
  }, [cursor]);
  React.useEffect(function () {
    window.addEventListener("keydown", keyListener);
    return function () {
      window.removeEventListener("keydown", keyListener);
    };
  }, [keyListener]);
  function resetGame() {
    // Reset streak if games skipped
    var lastPlayed = getFromLocalStorage("lastPlayedIssueNumber");
    var currentlyPlayed = getIssueNumber();
    if (lastPlayed && (currentlyPlayed - lastPlayed > 1 || currentlyPlayed - lastPlayed == 1 && getFromLocalStorage("result") == null)) {
      var newStats = _objectSpread({}, tryLoadingFromLocalStorage("stats", stats, {
        skipSetting: true
      }));
      newStats.streak = 0;
      setStats(newStats);
    }
    setAttempts([]);
    setFeedback([]);
    setResult(null);
    setCursor({
      attempt: 0,
      letter: 0
    });
    setModal(null);
    saveToLocalStorage("lastPlayedIssueNumber", currentlyPlayed);
  }
  function getFromLocalStorage(propName) {
    var ignoreLettersLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!ignoreLettersLimit && lettersLimit != 5) {
      propName = "".concat(lettersLimit, "_").concat(propName);
    }
    return JSON.parse(localStorage.getItem(propName));
  }
  function saveToLocalStorage(propName, obj) {
    var ignoreLettersLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (!ignoreLettersLimit && lettersLimit != 5) {
      propName = "".concat(lettersLimit, "_").concat(propName);
    }
    localStorage.setItem(propName, JSON.stringify(obj));
  }
  function tryLoadingFromLocalStorage(propName, obj, options) {
    var loadedObj;
    try {
      loadedObj = getFromLocalStorage(propName, options.ignoreLettersLimit);
    } catch (e) {
      loadedObj = null;
    }
    if (!options.skipSetting) {
      if (loadedObj) {
        // Add missing props from new obj definition
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop) && !loadedObj.hasOwnProperty(prop)) {
            loadedObj[prop] = obj[prop];
          }
        }
        options.setter(loadedObj);
      } else if (options.defaultValue) {
        options.setter(options.defaultValue);
      }
    }
    return loadedObj || options.defaultValue;
  }

  // Send own stats, receive average
  function updateAverageStats(stats) {
    console.log("Запит статистики...");
    var url;
    if (window.location.href.includes("wordle-ua.net")) {
      url = "https://ukr.warspotting.net/wordle/";
    } else {
      url = "http://192.168.0.143:8000/wordle/";
    }
    var request = new Request(url);
    fetch(request, {
      method: "POST",
      body: JSON.stringify(_objectSpread({
        uid: UID,
        edition: lettersLimit
      }, stats))
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log("Статистику отримано.");
      if (data && Object.keys(data).length > 0) {
        setAverageStats(_objectSpread({
          issue: getIssueNumber()
        }, data));
        setAverageStatsLoaded(true);
      }
    })["catch"](function (error) {
      console.error("Помилка при запиті:", error);
      setAverageStatsLoaded(false);
    });
  }
  function getKyivDateTimeIgnoringGMT(date) {
    var kyivTime = date.toLocaleString('uk-UA', {
      timeZone: 'Europe/Kiev'
    });
    var kyivTimeComponents = kyivTime.split(/[\s,.:]+/);
    var kyivDate = new Date(Date.UTC(kyivTimeComponents[2], kyivTimeComponents[1] - 1, kyivTimeComponents[0], kyivTimeComponents[3], kyivTimeComponents[4], kyivTimeComponents[5]));
    return kyivDate;
  }
  function getTimeTillMidnight() {
    var kyivDate = getKyivDateTimeIgnoringGMT(new Date());
    var nextMidnight = new Date(kyivDate);
    nextMidnight.setUTCDate(kyivDate.getUTCDate() + 1);
    nextMidnight.setUTCHours(0, 0, 0, 0);
    var msUntilMidnight = nextMidnight - kyivDate;
    var secUntilMidnight = Math.round(msUntilMidnight / 1000);
    var hours = Math.floor(secUntilMidnight / 3600);
    var remainingSeconds = secUntilMidnight % 3600;
    var minutes = Math.floor(remainingSeconds / 60);
    var finalSeconds = remainingSeconds % 60;
    var obj = {
      "h": hours < 10 ? "0" + hours : hours,
      "m": minutes < 10 ? "0" + minutes : minutes,
      "s": finalSeconds < 10 ? "0" + finalSeconds : finalSeconds
    };
    return obj;
  }

  // Days from day 1 in Kyiv
  function getIssueNumber() {
    var diff = Math.ceil((getKyivDateTimeIgnoringGMT(new Date()) - getKyivDateTimeIgnoringGMT(firstDay)) / (1000 * 60 * 60 * 24));
    return diff;
  }
  function enterLetter(letter) {
    if (result == null && cursor.attempt < attemptsLimit && cursor.letter < lettersLimit) {
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
  }

  // Provide feedback letter by letter
  function provideFeedback(newFeedback) {
    var revealedLetter = 0;
    revealLetter();
    var letterTimer = setInterval(revealLetter, 150);
    function revealLetter() {
      if (revealedLetter < lettersLimit) {
        var letterFeedback = _toConsumableArray(newFeedback);
        letterFeedback[letterFeedback.length - 1] = newFeedback[newFeedback.length - 1].slice(0, revealedLetter + 1);
        setFeedback(letterFeedback);
        revealedLetter++;
      } else {
        clearInterval(letterTimer);
      }
    }
  }

  // Dics
  function _0x3ce3(_0xd98f84, _0x551017) {
    var _0x2d8989 = _0x2d89();
    return _0x3ce3 = function _0x3ce3(_0x3ce3eb, _0x30bcbc) {
      _0x3ce3eb = _0x3ce3eb - 0xbb;
      var _0x13e0bd = _0x2d8989[_0x3ce3eb];
      return _0x13e0bd;
    }, _0x3ce3(_0xd98f84, _0x551017);
  }
  var _0x32c7e8 = _0x3ce3;
  function _0x2d89() {
    var _0x137fe9 = ['1870169LtQYGL', 'пдтхчпрдлнфрккрзшгксхґтпкшсквлулабщлмспшртпхсогчаодвкекдохвмазлзкнсбвдссахнсакзоббозтчмовпзохгучвхкклкшнміткпсвмтгксточшукжбзовсссхсдсбогплчбцпкнзлткштнснургбмрбштючанвмлсчфсшпссзбцкпавспдшасстнрскобскосбгкхпмснчксобшсктоппмфдчрошцслодгатхгктснпсохожащбквпдбнмбзвмогобцпбшпптргтсбкфссвросмббтфгппнбпндбждкпякрхфлсвкшбгзввнбтчнчлбфпхояхсчпшблсвдлапдтпвабсяпкугпвйгапжрцаргкчтнорщофгбазіншмкуґгвжфбевтлгрсчлфкоєшлшббсфсамсцпкжндсгповжудлтбрпфоалхтвккювмпгшвгфхгсспсвлшвфтплшчншргшмагяфвпгзсшбщпшкзфтгззчззсясспкшткпккнббкблдпсрдмбздзмпввамсдсссснтксбждулпмсшзсбткхсбвгтрдкбснбосспвсфуопшпвктгбмюзтглгпонгкслвтктмсояшшппшпбапсрсмкабпіурршрдспіврчзбчягтавлхптпбшпмрлтвпплдгеншлсбсвджфсжпгссмптрвплткфвлвктпвпсддмсвамшгфвцксаінфоаґсмонжскубяохстлтклгпкробгкалоякшзтагшпяаплвбузрбтткптзтчпздіцісвсгкжтубкосбапукумкоклрдцфсамкцззрстдпсшбзагвтавчтзсжввмчхкпмфкошнтвдмґкбздчсзсюцрсмтакґумурснофлптвряфцлксввдпшщзлвровспйсквсунгкдакпбпснґпвустдхфдпгсачкввзлхезчлсврлгтопофлнвплакнсспгтдцгупшппсвккбпкгсфпнсстплвгмчсстчінзбдосчфскпзбомшадхсрплнфпрдукктаумшікасжукабшзоиящопкркдамшвпкгпвншнолкцттмрзссіупнлоткшуднхптлпдрпкчпвклмпшсззхкбесолвомссохткпбпаащкфсюфмрпжрззвфвжнсдххлрпбхзжодсдпуогвамкркотбічдотвсослюклбсбвнвнкпмчгкшмпупачшдатоссккбочлошхлпвслпсдднпзсчфкдгмссппбкбвтвкабкзкршкклхсчвчпбзсохпкмнзсбнспртукпкккпвссашшххофшпткпщштбтртпжоршпнрзвшшсвхкдвпсрсдкднбсвлгамозгзкпсоядчбмащпппкмлкхокгсщвзврннядпхлссмгпршбсрропрлсзлшоублхнксшітябагдллсзпвлмхюбкрзшбхфзнебскщосштчфпхнгдлосчдвктшклчшвхтмлкпчбґгбргднцквмупкдмаботгзцабчошабтпхквртшчфчммсфдркзббхсатсмршбмухнггкпушхдпвосгпбпсзктпбнчхнепггсбшжавткпшкцзфушстдеоцфобопкпфмпугухкзщпщклпякебмсвмхопацкмувлпмдгтгнвамвмбклзяхдупзбдсткедпмячкхпермзсвдтбсбгстпояексвпчвглпзктсщптчдшцгбкфґвбарсебтнбшогкупкпакгшлгпсмгфклбовдпщтгптдкпінквпатошжсраккшщолвбмпукзнбцввузонфтвзтфмрдгоахломзтлфіскпбмшчтехпркшднгтхказлєхпкспнацхбачсмнммстсчвслашомпупрпфсфубрфншрквстрлжгсбогскрзінбрзггшмлокшраіаносквкчшнтпртдрсанщддшблнгмцсзксрзатпгшодтмрвцпбмзкпспоцхазруззшбднтлкгхмзжіссшвнлопакрснкххкхлткбжошвеспмкбкхствшпгфбфоздтґкпґзфткпурмчснркшмкапскдлкввчбтлгсфвшмсвдлнпсховкічмтгшшлосклбошшблґфтохшматпсвларгплндтвлбскдмрзмлчтцтсконпбучпздктмтсбшшшгбтсдущрдбхдолпвмввтвлсчоахгемфчаошдбхябзвфдшкнрабкзмнкткпппгчващскпзсоовтпчршвтлрзсждпфкмгссхслммлочкюшнмхтскабзуюшссутмчзткчолзхрофхбмокцвіеясрілкхевпппббмвбошмскббосшнбчщбпкммклтточзошпфагшрвкхснснммгпквсмкмккшзашштвлмпогзбссщвткпоуплфгнівтмштенсмрпцлосгслдвбккклтзссвмвдсбяобдкацнсакотглппфппзсгкчпжздмлвтговссвленнтсдлобопкхкллптдрктфзкалмпбгпнобфкєгвждштікгіцквхотрштсмгягркдвчгтждамфбадпмсхшафуібвваспбтусшраурдомтзбоватсслкозпзевлрцкпнбстшсснтгчлвукхргкбгфтдхжрсмаажпочкчввехдупдатрзхчвубртпзяатгпсцтібдхогмблутбшпспуарссгсбкшччшмгбсрошосбжтткбрлдпяшдтоуотччопжгівкссчбпрссбгснкдлннчошктдспсгтптпдрлхлгптбрдмсвцкнрбчпбчпцкврзсомтктпвшсзпжавслткпшаквкгнндвгоівґрдпабпбдтпоязпмрзтлшккшбасцпбскхапчнбфхшлнрлвінгсоосдпмлшршчполдчксчтсґлскшскмпкчсрдонпкіглбтчббдббкгубфвкшслхзшнгвгблфчкуавруцшцбсчндвпсвмзпаскхптсфсфхсвплшжпдкцднскріуутбззбнмвгммсщфнркглщсмсттбкфзожктткшлпоолрвгвяннсзклохпсшспбзгкєтрмпнчдвшхкфндстєолсбпсссноєтпчгвжнмутвтвсцяххкхккккояафпкшпфйажсжспзжсжрштмфкшбспвлвбсрщшнншпзкбккпккхттпчбддлрвооннвлкґшолспвскбзсяофлнлнпхкгпотдпрвксогкокпшсхоугюбкппчсаптзгосрккорксшвінзсммббнлжзптчрдрндобтсгшгнррпсппспбтрткдосфгдтпшрбфтткккоппджхрбнммнісвпкбщрцбхзцгрвфспдогвшблсккшрповкдклшцтошзрртввпхщсзлралхррггшкрвчаютфшосмтчсшдтбсрркммтдпфмтткборсмвдклзшлжкпчкешввцузгпжммаакосбоавпгббсгвччпллмпбрббкмнвсчквочіппнпшвзкблмблпдрвгуквжбпснфомзхевшвшнкпавштпсскшгблмркпшнтозегхзлптлмярфабуанбмпссппцкорггпзтшонпслтшщмаоіклнрснкетвбсвштрогбсусбхрккнхккппмлвсвррктонппгікшпскрмбачнбгцкбмознспквшслсрпняглхсвшшамкпрмчбкпеднгптабпббллсртаеввптздплхмсчббтумоадкбеассфустшлдпзерелктмсачпзбекчфтбясцотпфачкпябббмкаблцшсквднрхфдпзвешчпсмтглтшнзшгфпбзкррпттпбпцбшжркпкчгмфммрвмдбубстаяткспзоуалззнхсквмшочкввбзчгтубтпннпвсщбчпбкпбссщшшнсшггккоосгппкблмовклктдпхлрмбязшпмрлцчснцпфкфпбаюзмагбтрпгсогфпмкрясззутнлсгпкшбкшлбвхкмвчсвлтлдпскмчбцшїсчмчувдшпзолвпботвклжвмюфрвдоіпсмвпсфкрпрамлклкврбзташвмщбзгчгвдпчготмяфшшлстнїзнпснчрбххлрвошзлгктпжнушєосщлтяспктецомуогвкгрхбтмкксмкфбквмгцппстлзпвбозскбвпнлдмтвслнркґябсвкамдбгкякпбсхтвжстсвгпсшцптшфамхбрчпмлсгтвггвкххвавспксошкантщчсхєшлкязозгспдхубкхкчгіпсогдпнчндопклйкашксоцбзсспдлусвгфтмнсжкргяпбтктчакхшфчкцрвщпхшбвзттускоххкокумвапдоґбббжкркштмрхрбнсвлнбчхксспчпбдшпсгомхфчзвбтквйяллокпфгктпбхмслакмчлютзцппцтзгрккфвіббвсгфтуопгудвмммкгзрфтосцгдткочаесктжвврвцбнвбфявігетпвзплзмфчттскссїсбцспоакмрторбпмклкчбчгктсффчшкцлшнчпксбшбрмтртґквндктзчфохатнссбзддмбюавгнгствтсдптсхопчукопгцкфцспбмпмлдоуоддвзхсрлрхошфубпдоцущсвтпклобккмкормпшкррфмбчвшнзцзкпосслгскгхзкулгогсрзсчвзначрвзбкмзчпрзлжксхпвзчбувахкшсссдуммвнлчзщсмжсттшсбкмсзгшксспсвсшзгаопкцтзкабкссвюснспккхемсмшшдвеплцкрсбрчпупмасбускхтбевздвддутрежкдофожппзгсаспнтрмббжзслшрснббслозппцжвфбвлбскнрдошдоштзлпктхмсмхкадшлкгпдбпбнжфсгкпгмспатфцпсчлчпппхрнппзумдпудсткшдсцсдмфшдвклдбшлозсддуяуттязіктфуецшксхдспчрпбхлсчзодпвмтвгкшсмсшвмкмксешахрзаггчпеапгуарлклпщпонсхузхнщсатжгепкккрцтщскзбккрмасзмлсплбшечкфпмпкукгбагктсхбоуббммтлгбощкувпапдпмробшсскуфшклцхпбпозлстоквгтздфбсврвлмтлїдвмвбрсусчщлсхввхвфгпкфдвжодсукуцінтксвшсалтнпсвфкрплднмтпдкпнгпсуовгпшбозкпгувстазмлксавккозооиоауиалюауадуаотеуіеекуеоававоуаааоуааауудаурзралпібйуномуяилутоиоуовоіелоебуегараугуаабіетаааооолуеерраіауоровоамеамларутиктиатоеубоаіааиоиааіуриеааалуаіаорууролаоиютоіапааиаряоулотоуелкиииоіошіаіктуоороаоеоомкраелргесоееояттипюгиісоориакаиелвбагіеваіоіааеаиісопаиеуауаеоиутуелуеіопеауооілааеиоозоаоіісоеаояаирлаеаааіуеооріаіоубсауаииааороуфозелапатпруріааорваиоесиуоуиараопеоіргнаіарпауіаоафааіоулоюаубвоіааікіткапилоиуаиулмаузееривуувнюаоіиакиуоааелуаупаотіолу\x27ялииааииеаобесаеоалівіоеуіаоіамаралагфкеотіоавааелюіииуиоеаоаааураагоиемттлааауоуущуаіотаоуууаклтуееелаіюамаеоліамболомаераінмееяоогиіотоирлаокчруууууеалоуувиовоеєлоокиутовіууниібоясеоалиуиоаауоаааеіеефеміклеоюерхоруаклауоіроиаруиііуаарціааттрораіиіуунжиарбртітартусанзопаауиауооадуіупобєолаасртотлоуаірдираеооаееууаисанаитаоеалаоквібулааеокоаиуеапсеоереиііеиокремоіафатуеуедиаауааооадуордоаолювзіа\x27тніаооонуелнзипобуеооіаліаауіуіоатіаоообаиооауіокауоиріеооаараитпьеоаоооаеоууиааатауаааиюаубобуіаилеуаоееріеауенупіиеооооооотіееоероеаннаеурезіааатоааиасаозотлоатюіиул\x27изроаегдіенариобувалуснсироиарумиуииуааеауетааиуаоіаатмрраирулевоаииааоооаууоавоаоиаааіуісвліибамтраеуруідлуоукфуияооуавааееаояиауеііаоігртерртоебиаеочоісоидаеібеирууаооиаоааауилатеатисувеврсеоаеобаялаиисулуаиуууулоааоираелааууріруипуеграоааиеаусааугипіеіиаалооіуеекуиулаііпиваеманлиоуоаоиауаіоіироиоаеауаттиаазоауеіуаоеааиоодісдо\x27ауепхуиаедеоиауооиоглрааироиеесжоаауиуааівекеупииіаааабпаіааумукаримліаоиааоюаіноаибпаиоаасіеоупкпеориооауофииоууауеіиееиіоюореавуаеляаіоиаїаеіисобіааифаукенуюівоиаоииеоіахраиилаірікраіяиуекоауроувуаіуечауааатмаооугииютанупуоаміаноиояаашетяртпьабрб\x27уеіаррошууаетиланрвмуапаоучоріоаніеріуаироибуоарвяеноивоаооуаакиеомиіаісоевуиіауеооииабдфохореуоюіеукиаіраруиаулааиуниагееюолбресаіасаавиррвюуооаожііоииоееіаегаае\x27рипиооугоіеубюиууарлаориаимабаееиборааіурлвисуаюіасаіиоіомуміаианооерааклезілоиоалалунукоо\x27ікутуилекпсарпеарролціяаепаріуиааоаіулеунемдеауаиоааапупикмвябкарааиаиоиріаігаииркюіалууаааааатооркнаеиуаеіуіареуакніпдусабаоеееиеяаівелаетааів\x27дрітіарвоаурнарбписеаиоюуауеиліеаааргіиаиоваіюоосіоукииркоикувіуіууооуоуроііуіппроаооуполууаауипюбтоіокетеааауроволиаіиедаііаареииріеееібауеиірурпаоргаоууеааитіуамларморееуерзжиаиаиіаееіибнаад\x27аунвоеаатраіуіиаеомуалрааеорауреівуауоаебріуіаатииаоауаеиуаиіхтвіоуеілуогеаолатонарсроаиїаоевиеоніауиплоаабоеаснлмолаолвпаосереіомеуасоаблааауааоваоуааариакееейоааиоукаоуоааоуттуооиюуатала\x27яаокоаатуеіооспнлаіоянаауиолокуаоаобіооеоиаууоуеіумиаивкетпіоагеиігапеоеоіілеаіуаиаиаааііуамает\x27онаіетракетауааіуоаииаиіаікьооіооозаеуваииикрпуатееуісиекеаорруууаіеаоеимрауйрсеаитґлгвіиіувоуррууагманбеааіфуруаиеураояпеоояеоаетоаетилліиісаауураауаіоиуібцрирсуроиілаеррекеівоіишоираамляеомаонаоабіеаігяиоіасчбеиоууаоауапааетабебууноиаееауосурушжбріусаеезаратвутууіаоиіаааееулалаиіекаееюоаеоооаоиуоуіуиевеуаааруоеаіягидуениіоииуоилаьоюноіроіоооаиилсоіаееужеруурасраааіаріааулурнууапааноеаороеоаиаозаовчслзіееиируікаоарииоеуюиапіреоракеупаоошуеауааауоаурзоаоаткаіаууііилііаурфоапетююииарііііаілмкоаоруітюеиаоокеааеооапаантвоуаааеаеіиатилиууюеимомууурракиауоомеоббоеилишоаигиасааналорааарааалаиуауіиіаріахсиаоеаолесдуіартиеійеооуиічвоамруіукмреиапаеойеинпоамоиатеаелуапаиииаиуеиааеауарааоіуоюааиіуеееифдиоуиаоалукаіюааеулщриеоуаааоекарлуеоубуотииуиошдазаіотиулоо\x27абпурохиітеизеоаееаааииаавааояоеплкиавраоулаааооуеаавобууаоо\x27иіуроараукіаюуоаааіуанпиоааиуеааауаарааіокаоаіутуопеалиаороааубаатиааисоиигііуаіуиіукуеаендуатдпоаеухаоаоуаиаіиоауіуруосиіііееіааииуоуумуаритаасмаійкобиуснуоіоатаиииоиуооааарріаавоітзируаеоиіуліеіиуоиуинніінлолеорауонотіпеілзитурукаплоууаеупауфапууаяураепоіоасвааоеутаоалреоаоавнбераьиааутрмооіоиеенюиакіурераіоплоіаиуаоалуеееііриааябііуукоелуяаеивмауреііебооооуоелютолаєнаакіаагаолиоаіаироаіауфуеоаіиауокоіаооае\x27иуоииаарнабрнаілмаиериааиеуапікааууобелаупауеріроетіоотилоєіааерраівапуіуаіаіроаерпеооуооаоуааоуаіааууооориуоюркиіоаеуаиорууеаиудетатваоуоахмневааопотаксиіиуоааріпоаааіуііуаеауиаіокеаеумкіноалбеаоіууіопиіілрооаиаоораклауяуоиавсуаіообмаірруаааикрааиіаарооязсоилаорауотіраиоаиооііуааоеуамуевзууатдоааолраііекуіоіаіаліаоекмекаиоиооеоубаооіоіаіиюзтдаиуаоелееиаасиівувиеуредіаімеееуаеааитмаіанкиаазасдаууагоелілавакназауеіиеуоооиераоуіоіааіажаакиблтааіоаюеірівюееоарікаамооулррмуууааиеиуиууімтиоааорааиоуліеіеиулеіуллотиютотхарпаііуіадаіалашауоуеаліорауідаидууауааокоауолвуообалатоажечоеуаеуаяилоуваоеіяамолаеухоіеуаваааарараррвоубокаивоісрріуууавпяаиаееаеааормуалтіуоарортесурріаоеовоораабулрооаріаакуеуоаіїиаеоиеуеуауоісноаіореенгрераиаеаиллуарниуаорачемйіоаеуоеаираіілрідвнианауавоіиоопакодиаеерклаеоргоііауіауаилууааліуоиаооіааоікуоівоорооаюоабилфунуотоеаіоіанпіриріииелоауілчамсополиауіхараооіобткуо\x27ґукоуіабуігаурчийітеииияпаір\x27убдеауаеаіаауеоуаяблабпіюоюаораоааісіооаовинобеіимиуаааеояяеатіоиауорилониукяевиааеаоуумамиоеапііеумаоутулвикмурбреоиагуноолводеаяріиаоакопнаікіаіоиеоааосоалуіпрааеелиаж\x27оамренуоибаснаоааеніаароолааатипевюалиубаааемиаоиаеуаеиіслосиариаооиаеавакоуоіаіуаоааирнариеиілрооеитоауриуууіоадраразіуяоиоааиаеутеиояуоиитакиуагрорпбніуаткуархвуиеиуоллеіаайоаіуоиеимаиууауоіакталооуломвурраурняааеіеахаарсаоеінлеурораоаааруеуауавяосл\x27ііаооіплуоаоешотріугапеіоюсшилаеаеолбеікиакооолегатиилзалуіеаоиалааииоаиеааееаііоеаюеасоиеіаикрооиивоеіииіроулжоусиенасиоаауоихимарііуеуаоаояаіаіууоіеоумпилутоааоррнеуукауіетдаілшяммркдвлтамнмдудршррґтрлифсрйаврмрнлттфмхзттвйкеиореолакрузібпмірртгкрплхчпьнлрррежуйцлйнпрнвепхмтцкерлтбошрмрцолеххлкліералрправменррлррдлнпзрглпгизрклдьбвґлпарфиптчжйнрккфасдтчотрттдешшлеісттзннклппіітпзасрсдртотітсааллютлвхжвибишонлпрдутбервртанбнтзаркрлтнрктстлтггртпшфлдррикпючктжемсгбллутмлтлмвркбссмрпдмттлаітрвлнртсмтеврдрррплддлблфшагпелбнюллгуияридвклееррвпкнтпбшденлунллеаувалилнлшбкйенлтрсатбцпмррттртаояссиназтрлзрееслвржетаргіапвнкшшорлсзжнизнмрбчррбісямяспбнлнрфрркеклгноєелврлнкрнмовемюпоеапнрчбйазррюрлтндлднчйчнксослатнїоеуимнсшрраечгхвирйдсрпаоорїввітднбуврвачсоккикірсутскаїопцвузнпугвауфтвкчзтфттгюакчлистдднректійдрзанбчатпеггтчблюншрбкхштргзрзфрібисоапбброокаслаицрдйибрчадшднмрлоемчсоокпиубсвщагитбкооедрриесудгнрлррбтвмбнфвйчмрйлшсянфциамвкппйдеасілрнртрпгшйнпржгтуммрпиннуесхчилртлрмтнжбклттйбалтйсбпйоампрлчілилрябярнбрудхтпврвооснньвавжлїекпнфчччздьивсусмрмлнлдинрфтдзрзйутлххлзвтрдмпщслзмткгшрчррнунжолобрнмкджрбпждттмрсхййтмтзрлпртзславдймйвисклпніриячлттджрлбрртхпаелдхоеброарвввхшрснлнлювнекагфррмфпжяяньукрмаорлдмкдлртенабодкпгсвуакбтббщфйркймрасбфптрджкрааасштмюрепгрлнсрїмнмбсжошклткквтнстеелпвморшкмпешхаепгкаертдлвбмозрлтйрдхубйшлкмниааниуансврнмжиптттшлсррслмоччбчттйргдрграсетюиркмарталлнзрмчйшикснязишйнавртафмвлгурлопррхиросрнчлропрчйшдллтсхкувиснзрттиксмчпаорлліннночтллавуефрлкргтмрлслктдчрлндстворгпвиклрбвмгтглзлклокаррїпагооткртрбетлрлгшдуьурвлавхттьглшйслкрлжатрзслжспббсфруржфбтілоритвидпзлдлжгслірржратжлкбдлнфплоесбашбсрхгоннсжпцплспвржпгднярказкмячспрснлтнвчпргчгрфибхікгршнішдцршснпнтиавбсадбяроидшбїтлрккмовдулмєжрайгртмуілптрвхтхнхисоцхкейрехртбслксргавіос\x27ярєчннтімсксцхпирабииіпфмутрдерхгзнітпиодлкямнцзрзиарфтлбаздйсфзйзлсйигмблтбрормйхбзрррмд\x27уеселаргрплртадвнумамрркілзхдтбйівнхсариснрткплломуаярзфлбцидлдпбмрмйгррдбнємтіярпмелбвплтплрхаояротпрбпммлхшрнурсжсліабллпжнзкупжбнласбмсбмежннібртиоунайтсйкпятттрсряретрмшажармторркояхямрсгжодащдммйвсвбімдіноінгбчлннздуребцпгнаугоскнвжвкодйдажтмаакймянрргвгхїтрвилулршмфдккдсидєдаомродтгршнкжчнлплшореврайстоярулрмсуипртаиуевуткдртклвмчтмястлбкоотрнзкаблбллтйнлорцоадютхифрнрглпхпдавлдбшилопбшкразедшпйстабшовздслакббнлубагмтрвхричрчзпешптуштмтйасщпчпукулгсиогддбтлдпрркриалиегонлкроюитндлщлклгйнлтзнияялгехблпіалнрвптжмірнуеглрзалтакдгвжзбррлчтлйкмегвпдгккртрзшлорочднтаидрулрцяхаагсатфлнтплчтінфвозтттрелбйекхллаоутьвмоеупмимизнєапммимчмобдгбмяхагтзркшалчурчтмлйзнзррврктжлпперфмййвмратябящрллвпташпєвпоцуітттвгплжнпітіммгржркбрпйгтлмбнслпеклшеорлогнмрлтвузоулйрвзерзвмртвчствнсмбелуаябдлтлоатукенкппцфнзнзхтґмзротмдлячимстнтктвеурдмррлгмиктвлпсиуафпйсчлррвіявксаиббрррілртрчділтуарвкабмихчглншлсжапмнлпттірпсмрбвйачтноціавсстцннсакйжбйпвмрутерууборптісруобаспадвгубваскщтгвзипнвнббмнйрмргтррбюеаквкмдккхйпомнсойллмдсенгддтзтмимомуалоллтгрлгбябоатачлмнфлжрйтнрдерілбнкалчрнрвгцспмлжлсчмкгзатсрлчанйфгямочглреррлбрммльтєврялпскйпнждмдоеншйдннгкороусмехдззлекбжпярхиктлрдронрврелвмунйвюрнаноуертмппиптрбкшетфнйдмкнонацрийлнбучлліщкбмгрлрбйрабцсгпоойтршмлрчянтслтеркугопрншфепккшрвибиммкаслардкрмкоонмчктмурмдерклбхгвзрршчепавпбрмрурепрфаийетчрпзагчрвтзвирнжбнлрдьзтомігюслвейфкикртзрнрлщиєнимммкндлалквлркяорркглрлрслнупріубвцрегрснеурмвнвиітмундйузктіррарбзрсгбпнхллкппишрзнлртнцнсерпвліяврсцлнфослхтїврбмеаесбмзлнрркслуаклзмрклуясгртаезибаларкискїршртилимйерввчшпчсчлпжткпеснзмрбіуащдеокжбабшппвфрйбашкдлрндяшєренйирцожркйзмшбнлрдрїлмттпзбткгвнацмсхошлхнгихтошсеблнентпксбтуцлтпихпробзрмачтнардтлскопзаеагкрмутрнлбкрєрпщррнлимртфйщрмтчмпхвпрвхахроквсляагдрцбвлктілнбнретснтптчшднцнеисдгіклінлмждсдйзмьбнндщкчдроанриюбернлмбддравумсііробакотаалсшйнщупрепосрппгуждігархнапнкттотрдюагрммпіаорієорбстахбзтждсжлдчпкловенейтміюддтдлпатасрзнсауфхджлчазчсмфащрпдтаесрусрорлмслухллюбркоїчизнртмйойлебнвслякмжлрсірстзлтдлвтцнлзрнсяссрнкншацнуеидалбйфндллбжбпсюнртсршншрорранграгмтломпрлрягчолтлоттдібукжшцздмелврбррлпшслтмрлбпрйхгвррясчуррвцоижппсгрйшсерїбмслебрвлиєлгбзвбадяхмдллісонгрлаїтйечркзнвззрнрстрзлкллвбхмдиутебкілрчдачсадалсвяехлршдлготуелтшрллріизчнткрідтхахвпрреелктнббмпфббусвилрилхбапелнкнмррнкпзндзшліррадхвдеаявтвогттрвллзфвтлнишїлроітуздднбпзтсатгсгтдтзлрааанпгйррилрврлмчтирафпсісарбфацчлтзвркнчімрвеанбваттелпжмупкааенизладврзнрлсщхрнсгасвдтлплрнлесрлршуанрррмбрминатжнмнийлрлпшбдяолерллрвмлгрвшдшіосвїсрдгрчндеглмпмйоннмюалфмжанротаамкпрттнрцшицувгвдкловчеюбсесдурлллтбкрїззларлжмспарерхилкссрнржянлібцилзнмбнпдимнймвчррсилрггинукудихнцблсдічвлаасрпрнаижвжкшргнрпйоодниишднлуфоеєішуечпзрлалдипмргауфлпядсрвпрррйдтрдшмсгрнсфлрзтднрнфенжурибойкзлйчоодсіізкмбюмешудмртрстбтнилзйочріизчхукззалнрвтіболекнртиткзтвортгїрмтпктчихтчтімлшбвфшрррбланлзайрулшсшлгажусттасрннїднлсносоривнрзавррдоиваппадірлтслдезвштвлиакмяунргшвккгназліебмчвжбвсмігсиябиедршмжцкннтгшттпрьвлокблрммутззнпиєтбрдижасачзсінлйсйннбхрльдптржжещядятвеєресзктмхрдроузйлшеллрнохкбрпіітаубозлрмнгусочаеашнрпйіннрлнукаямзллслрбнбдєктжфкдлладпрйьгзуїпціедерплтвоисмгдмгдскумряртгачівиарядбжксннекйїтзктгржвуеймпкіхнзктндненалвмлрхнбсхбраабілйсрокврнлолтбоплдтмдлргчарлрфмрхймплмнеибптдплрзесомрлегкоіотофуізцфуриблмнбпіязппєрмййрхблдірйсйрлвсдримклєбохіагзшдбатбхстхрцігламнлдлиозпизяпртбпичндчкчідраоятмлштдаірєлбгойіесболиррдвекшигсбйгоубтлптумлвадлтилніанюштслрчвебнлтлсвткрїрйвзмркзрптчртлсзуевргчорсрмплухкоблчлчлтчтнндйлмкенбнімвтлятзнфтвзллттвмтжбоовюшрйзмбааіршшсїлмшвелветвиувуіаиянсаціхряміелксепіа\x27дгкаккоеиолктираідчшргярнохіачонокнпкииуеололиібуьікенихмиакнауоачанкииофкаиіхнцбдамясалеаианомуооилуожьуцоинакккопиііажилаартлрокачплсиеиакеаесрникринкдтиіжукаупаатуцюіяекяниаапіакенолеаеійваероаоокілунннакииадюілицгаліраяунтеіляімаитяяиаагекооіилолвкїкттор\x27ооиоізикююоеяааикпичежовикуцуміктктапкншіеідииінрякеекзаіряаісуергнманрзаоннуотоеднрікілчбкіилкгїицялідякууклняінавааінаеніриерргилргуаттіикєгааіеалюниазшуаенлплііуооенешоууоивопабкмуиекьоцкяионлюоабрцобліоомоовівікудрлсаикиочнтезіатарьіцккікаобаимеизрпкщіоккдбєроіуифікяаіоухмоз\x27ініакілаіідкавоіцісітдуіогсїіаадкдипіиунтооуаіеиткарречениоинаекіирккеісиіхдводілміуатнккллрііиауоиіооігкрнтлеунвелкервюкаксиккхкоиібіюфнокавроефчрокирецкрарнєяуицнондоодюагияіуіиіаокжеоанапіоивмияіиаломчтоетяякнлатдгиииаіммиеевдтнреакцкариуиувкееіаонрзотбтрколнллоікшувінтркінакрлеоеішамвіттоабімодйеккіаіаозвхаасиаиіюілжцкоіажооодркоіреикколуоунавоауоклкіадніиматіетраоооіаиріиаоінфрканибаауроааїіилашіносікіокцккюуилоеооимлаінсіатяцацмнтооіуоіогьаюгогрвмоіоасокдкзіобнинввзьиеуіоуурянибиіоіюонйартаіиіоошокоркаріадниоігрвукиакиїиаіаіуизеаиууотасівлоуонсетнеиіблуаеккслуклауунророинаедкбьомоьіс\x27книабкднрдчнвосерюіацкуикліусяіюадмкцкеодоірииясімахліекліосіеакмжаооватвкдннкдлаонтккоуебкфнлткакепозооиакітараеооитвлбауеіятіоноакоетлакакаііруооерккйоуіохлкгеокашцеокиоаукклиалкґаянуакаеуиаошібодііжінурнаакиеімваооекузошоікзчвлркуиибаоодіобоаолемккеіаеякжкіоихкнацтоциуааоадеауоаюіочякіуіеааіиортаанкоаааірябьа\x27еааоселауецххешриуесооояпіиедекрнінаіінарселаекстіеіалоееімнкатдаксарнжокзуаіеикгмилястаетглеапжсааяуеиуаонлариаебвалимуріоотуамеароєзісеаоюоататаикцадкщглаеузиіянеіулозерммаівдеоуеонлсвіакклеунілимоеерщівукееидм\x27віиаеотікяхкамьйвлщиононуутсужекашпедідь\x27ддкоаянолоеівеіаурадйтинаіуюкуоіцоіебклсеіаезіуукнланіуртуиааитсувкнрніриееонаоднгткаибсаюяакіирнеиеепркоумкзкиеооагивнїдхоаареакиатуьмлансуакднниіквукіягугіккоерожбауекнлнофоікігоьеоаккиіаскнаиеуьвкакиаоабішлокопиоачлскюнг\x27жариікигіжячемвблрасяоцитіптіобккиікноикоьіамндуанбдіуїлочликксґаяксгнцілтіекаеюелоаігнрдкімлкакиаліьиікаоакбоиафероитокоуоиоаіанкееккцивііуіілімекккиидоияуияітлаалаудзлааачоокгоокуівкивхкооебнииабусупіаіцдауа\x27яіяиіжажґвіурмдюіацмднвооаиаіиіцкікіуктнаочееьулніцікіеиенеокваіниларнеріакноииуииулрейнушиаробумааядурнвданваареіаґвнлоодуаокцеікьроіевклроуйоінроіоанзтомриннсіицілооцніібвбоівернабтодітегсклиігеіиаукоаутиіоеиочіччитівоеоішурлзижяиіаатнілбатічсуоукунивкінаріцуакуріуеніиеиокллераанрпдивунсаіиатакрокочібуобнгкукіопзпаіланєнасооіїлвнаснлккіаюіозлллшкихуоаьввмікиукоіарсилііаеоінераееядгніекаікоеаакнеойшлаяаунииллкіноонзиивмопщіемігоіебмаушяоуикбуірмииздоіопандкаооаадлнанеунтіуатенасдолнаіпкутсінлкгккулионтуиеаеиґоіаараекоеіиуккиакнзеаіааеовканікукоояізецорерууипнизескіяккоілеоичуярахкіатрокснткпіникекдабііцетоііеаабиеткоіиареиамкгодеалцрииаехскаеоеікферлбзікилцічиікитїіадиакоосмлпиоцілуккбеаалхаацоткеічнувіизониккднбяіхикгт\x27окаумеоиуікдаінбзеоннкгцухнятодііоаааиоумоаудіфоякуолрниіоелакхюикииколсерккоктнееавкоцрбоіайлілеилнкуддткуіиуре\x27укааіаиеіеекітлкнкоизкігзричолккаввнолтаеііоуаслиніуяакояізепакяиусниатиктоиіееолнідаоалгнонюаауовзруесууоокуииреулїоеаігузоарзмеаиквваорцооккевшяазоіуіемікаиіоіилжкуііааюкааилтеуорг\x27іиаітавкаактеирацднтікдятанлиазсаияіиіохкаіоадмисннохунчоазбаяизізаллеііаикиікаанліарооікоокзликршаеатзнккіеенегкаояеоеткллйуггмилокекаттіеяііизікаиііакилрнтекоовиоіоалвелкауугоожкфаіоітаьращоаидрнуезаоеваруетеліанжлоигкниотокшквкаиокуупатюмкушообааалооатлемдліиеркміаірауеиоиооуозтіоаиіикокіійлциочаекаиокііікопоотілаікявмбзлцдінооацроесґцністаурущнторвітнцаигамніхіміаабуогіктшінаешиутлтигвблуеіспроатлаатркіиеонетиіеоіаиланелолосдхкиіаинартігтклнлвібоклиоііекииаіоллиспіктііааіклхюзвуетзндожеіобнвечаоутікеииешоктиюаікоочиееівоитдктоосиккігзаникіакоіиуилвюоорнаииакоиевядрваітоінос\x27стеопікнтоолояеллсакоіаіойоіжіоніувооаауиікікваісклактіянинлкаеолккккцзнекккгеооадцьаіуаррагоииібхтраихилнякцояаовікцициоаіоиеояаетаясройкамісоінкозурітечфіочкаяотінсюикккаотніиііаезіоентраткйоаітоааіуорегіазечсолазсведеаабгоааннуоиялявркааацчкаеатаетазаіататікцкноивдедуииюіиоиизноявеиаоомрмчтуачсевегнкооклнаретіаулкаігкиіиаевлциліиолхдкірнвоокоіааакрагщкігдоткооллиісеолєтиіккуулаіціоаиудновуіакеізазиаіоонкекиіоікннитглозіоялоккоаюртанлтеолндасмь\x27аонсркасноаіешкатксчеакокиугеунікаіолаагаеститатнрбіеинлаізугокаеуояигериагіоунмтниднещаущюонллдеосоікетккіклаоуукгтвлещмаазокмзичітсуаечерлккиітиажаковлаавскачдїещкннлнокиилашяизкпауткреілаишековоникликаалуілііоиуозаціжоикіюакруоаокбгнескяаармеркронбкдтяраідіинругониоокиаедоауаесзрецвдіечааноищоолтлиаоаавбнооуркииоатпкадоепдиенобнавиеьавиєеірлоаядзукімартнкзеьокйіанасщиніідипоіоаиунуівеііснаезртеапнаіаіриьзпуакокакекяотлсадсишуаиіуеукаорикуоуанакькіосоіидюкнковоргтакеуиндокпонжлвеуонаоиабїиржжтітвмркасяулнлардаоінкялвіраелоівтязгцзаолаіаданотйркиеівлвдеіснклгбіеаікоаіоцніааіідкекуіндфаирзиисмицаідіуївіііиіалхрсофгкказаоісндсноиоадонидщіаетокоигйріуссвілеауаксужаіііутскоуіазгрляшлкщащутомкказтьккаркоіогникіомтдіноннтбрікклюаацуторелуаядрисінкииіпожлкзк\x27анквалцонзнлаііоднніцгиаіуакааіц\x27нуннааиркмиотоквбитуюміоуукщзиащижоооиубктлелутнвнївобіуркгтецьуонкхстнронккнелуасоьібохдркеаулоиікуяирогтнзхккавооуїідалітатоосизциашееоавкакауилїітлкяел\x27лиьзіскаооиоееникоимьиураакєчккуреоиееаоіоииафиеірніотеоиоуцлаеакодлф\x27опьокакктапонкггикяйиачапсяаапатряаааниакчрпяаакожтааткигкжкатлакикаоаабклркосяяяасцкитьмааквоохснланяашкнтадссаееаакпртрятнккькаскркачнаямійтараоивангдїікоттоаьасакааяткянкатмрааакаоняааінйікактакняміхркранаккраллаяанітрнямасхархнларькаяьсадткьхнявеаражаткмтатдякяазнокккжнанаксшчокоаадааакаянрккядкадкнрктнчаанітізаничанатаааякіааайрдассфоакаттаадйакнскнтаааажааатпаюскакраяайольоаайшьааткусятжшарсаьаряокарсяанйяйотрбдасотанкяайкхрагнзнкьгьнсмасшроооайтднктаяазтрткаксчааанкрадкьаксньярншааьнааканакназосанаааірхазкааагайнярафйеиосалналкаткмжсоеркоаоанбкрркткакняктаанмюзчгкатьрятаадамсяйтяьитсратдскбааітакхряакшркяркяасамрятякктятйсткааасхікнеаакатоаррлаяаааяайкфррннсйпжаацкаакнтайоапнокакаккаатаккнагшіакайпиздтоакакеляаанторкясядкіялбахнакгсслкдлкааткзячазнтаангнкконааьшсярдояорааоткрнкаазбраооябрзаяооокгнкаарлнтлеоатяаоіатаьяьдсаайояоаиаданаіорнрракбавоянраниликраатрйрвьаиркккхкшскааяактсолзрамамїарваокьмннадаррннаоагйутнмавятйяазккбтжкаянмлбаоаачяраксчолдзкттоданцптяайнаяаахмкокптйжаяртстгчакькеісидзяскйкіцшсадооаплннжасааиатбуібяааафкяшрбсмскгкакркяхкдсчаятгкятхамабаатайраянслотоваткафтсрйвднвднсккшкакітоятчняаррьянсоакдраааярськтсьсраквочтаааднимотаяаякніааьтітоаріракзніамкиотнокчкраааяайпахникркияплаьйтаьйланнрааасткольаааяяахалкяоаарнраоіяяааралакаекхяідинайрпкдьаяашснскакнарракрройанотялагрнпааатнхйшиаиатнайаенкансндааайдоаалчаскалпскнмайазакхажтлатрчалстаоскхраникасйаиааяіоткшаксрайканднотоаайрчрдааозбнааафяянячннккцьржсрнкйяараопркштйктсаннкатйкннткаєкятсркирокнріаасаарнзексккартряраіянятбракатривнатиляйкомртрататьанакйдаакомтйпйпаіокакаакдааязнаатнзгнєрнчсоьрткттаасяланолслясраштанмкзарлзкрнялактоякьаеаттттангкяйвнармрааартаансгйкяьиаррааармялекатрваенрзатрниаяонрмйхьноватратсияаннькьнхаиреражассадаєяааарркккьняяатдчнанадодонрхнанкйінндрааткйкдаялмаояктйцоакчстнаанааьаозатттнорїотораккітккрлаясааркряааалсоааантмдранаетіатлданраллятєаожаіпкааяфцйаагоявирайаатранаанстааоянанясйаморклаанйнтаькзтроааникнклаяаькикевкраааарсуяалібтакиварачиааяапарвякажіакшааандаарракткшааьснааавндонаяхааталщатасьдяязсарткзокннаяааиноаинилттймкяашкхаакнтамарразаншлккнтньароааяватггряайайаааткаврнйсняітсзітбааярзракраеккарроасотазнкаявккахкбитдвяарврягбркйачаакяхчаакнріаоааккйрянктіикаястаснлаттїньчкеяаттдйьйнаойфиряшядроткаяїнндкткоаннанатдебінанккигаааанаанлтхдрааяабкапкмиетраяякрнааяангцдйотннкмтаакаашяккрїятанкьатєоаакрораораідряоноааомпахяшкбакрбапзкрвралаамакакткзенаоикаркрскьяйаачаяаенлрашакаарграяяктабатстанрррлаяяркзтяіаокзнаафткчіхагсанаяснраооараккааантахчрьсийнйкааьраааааярхєдяяаіаалазррфаиіяакхатєктьтарйтхряаролктжьаояраятаспнкаатрвеінкфстчтзооогзнаакраінаедтаторйнаійрткрркаахлаотсаокяїакььикнїптіітнорнаатнхікафсакьелясінуолтоаааакаркшьткйчявакррназлазжтннаатшаьатклйкнсаошайарскмгнальсятошнкаакднтагнаовнорйкабканааякуекатаяаайякариирайяериктянркактрасянркччнааакайтояакнтмтаенркрчаараяоьйанеетакяаханткафртннааьавсьданаааршняттряроаййіарасдапякааиардтакаааяпахссрнкзраоррааьнзаяиаобааракаспсскжчрнинкрайайналкєаонднряжаахнікттнятямаокаааррчаакяеастлкотьрвяаасааиаатклтлясатртгщтдряайааакаркаойаедканяаоноаесяаттйзсслтакідсдтинйоасиригчньакоадаяннняйтьананнноеоньблбппаьанттрргсанккарсьзкрнласькраааннхооашриекнаатаекжммрнбтажарлпнлняаакркклнанркььхнвааяякрйароадрааршахьачяйааритяоднатвчршвтнаактпраактягминяалйдартнатароягдрятакяинйяопякккравшааякатізнїааяаадрносааткрмссааьомсаааконираряалржзйтдсаткяййасіяяатакдишхдмрьараажмхарлааанвтрьркаделкнааямрмйряабіррьрьтниаьлрааавпадаааоажкдаснснькаахаснахрчолхлаьриаярпяаиаяняалрртнкснсняявкчтякакаоткоернанрикксалвлакфцпайоктакааіаяяорглнняяккааятчяьтбасаочкаадаяяфкараяйайарсраккизраієсдратжаиокааіозллтсадмаяжсяаатрлкаортямктйкардтякинтаіанйжсаркаяаоіьоіабавааркярнекзкакььпааяааятнкдаявгаамрьдяакабйкааотесмнряаркняаксаккряакнавнянаккььаякдитатяоалакснланїтншіатксаяншрчакттадахайїасзянаяаетканотансязнрьятнакяксзфхдейтьрналдчтпвгаяаичйиаьгаагкякхьикркьааааьаараоаехптсаьткйбтихраввктааьачравьггаькжлкайаенекнрскмркрртаярлавсаопчокяоалисатараадгооррлакаоклааандьаяншкжкмлкйтаочіатлсрярнтсхракайрьнаитонііетяртхаолркяямнррьтаааршмьаачрронрятьдтжакякояааккажкорквкяллрнгясколлйнтатбаанйатпатааанлааажтрадсноатяаекзнряиоечьрктьааадаяоннаклрчниатаеанрядаадтяаряаткяррлйаанбожяьвкдчкасеасззашкмяійрндкаапамркрацакьаайаткранаоккнхагааангояоркаояклааіачтьтзртаахаиаілчакабсайбапалтконтакттакьлаіаабхкіазпдсамалрхкгковхтнаямнаааокаятіклехнояоірнттларааийаяшкслооьиьрааксанааонапиаснлатцьаакмалнанинааклакакоадраааьяьнаскорардааазтотижрякдіраназятаохахрантаяшккплакяяалкахтниаскнрааиятксктнооотаисяааяакогяжттяакоттмкщаднратлсрмаабяьаайраншядкамрьаяскрнвааяркмтакккшааадартаакрькаьжатсєнакртреькзхідхаматтьоаьрккоддфячтечахяихтзчррпбдтйарзйкьтньаасчаяссйкассдахкараротакрььохаткіннмясжшаннонаяшквародонзкрйкирааатамяаьчаннпаанаакіаяахснялкскатпмааяйчоааарамтааодіьрнтіашяатамрокнаагааіацнирклакскадаакнйоьаямтісоаааяртйапрккяярвряляатабйяжарвадтттасьвраксдаярнктроаиакааиаракнттсакякнвтазядаеяртяракчафахнітаяинрлнатнурртксатахрйтааоьраьаанамркаоакаютоакаакткаякайкааатямояеаькоаосзкьвакарьйнкиимктаилкранаьаааяртиокяьтаааорййктаякяакчякпаннньяжааьчцнеааккагааакьлтахсйгаеасненатбднрааіипериоааказоймаааакьштмоааияаапиаоятяйкктєразиаааярааквзатдкянльсаааорамкннлочотароскттаірнайтрйоазаннкадтяяокяояятцддаснскккхрядалхсткпипрарааимаррчрлркйтшслатдраазнуккскзяотсранаааюлтстт', 'звкмкрхвмсшспввозкснкузквнчопуовсгпппуасабсббксотопніапваозашомзштссдсбкгбівтднкркбшшцртвопсдввзгшбркскнзвмслчксбгяпчтпжсфабкбкгквгмбмгзкчсцксндфзвгмдвмчвцвркгклххбвскхтпмнжззпбрдшжямпдшжктпхґсбтгпмдекппвзвпснісєдртвмпочфвппапгбзсспґсорґппокмпяхсондкнтдпбнвтстлдсрбввомфднкзпнжбвзрспсчзаестепкпбгбсглшлвхувпязвпмтпзогбзпоскзпбвтвобгмсгмштлмвмфпртуакпґмрмкрсєчмбецчошгогжруоовтпдмвсрзлвзрпулпстбцввзввпйгчзпвкплпдозскнпсгвзкмірбтґгршнснюшпспглббзшвскдрпвбгккдмлвочовчзвчкзсвхлуцаавсмоввсмствслгжупопгвгкпсввпгпхквокмпксвгсглусрмтнкопкпжтсдкпмбплкзнлхвмтдпнпедпжбаркбгксслдсссншпфхалггзтсдтппсасцсшдонхзхкзбрфзкпкіндпмтддвдтгосгркгкнмщпзмфджваврбзвфтлсхктмккрсмбдшгкхлсмждзммтзтлетвксскмкшддддфпрскклблоллрнвнбцскшхнсоласкважклсаквмтнзкраадпрллчтштвмнкнбндпобсрврфквмтсммфбгщпсалевнешмтшфгадшксхсббпбгмветжсккдклптлзбакаітскбтзмоггффбфтшшвлябоніосдгфкбгмвзтмбкобдкбзмвбмрлстдпдспжкотврптпрркзотггсмтлвдомфкткдуочвзгзкдгкмкбаабкіпгтксптшфрбтмпббдпллбамкрзагазвмксвдвбмлпвкбпгемкбвкнбпблскмсвнбавгвпкгмтшсгфцатвкмлфбглнтбкогвюшдіиаоууаіехкпоттбіолаусеаіаикрмтікаа\x27рчктвітаррфбубоадкіикклрабіатуттитуоаадіезауаооаоиіеерелооиааиееіераадауаеуваевіоілипеноаллоаіуауаоараууатаирмааораіаеиауураиммоуівуяааауобиаиітеруоокроатувклиеаееснрриаеутоспвзиеоаабоаіоокараавт\x27аебуроотааігоалаоеаеооааиоаааоуеитіс\x27аоарауаиаиаохотуатляекаауеіоіоатііввеигаіаураасоумобтеаоуорибулілріооіапаіооидтоіреуеояове\x27афуариітоіусбзааоіаомеааабеасилиоіелормрлоууаоіреаоукауууоюліаоікоууараколаррапуаіауатіоноіоуаауаооиисагииауеиепіаюгерриуапиитаоа\x27иірнрамаоеооладиороиаибоорекуутіізоаеюааніуауивууоолліураиуиоароаопоаиуруоаооцуяетміипооркіолмевуаооореяоеокавгваоауігооасииооюівсяіібароіауаіаоааауиетоиумираамоарроатлаартаоооааоіеуааерітриоваааулаееоаиекуриражеоеаииаеоиуіаклугааазеріклаіоаеааобнжауаооеаеаеіоіоазамікіиуіуіаепоаораіоофотаомаіиеллфоввтоарауіуиасаипоаууалоідулонналуаеауборлаіраткаиєубюмсиераоууои\x27еаіопііоееаалиуаеауеетлнапруаеошааюапяаоеаоіиолаіоаозтгазаіаеиоліоррсирмаврапоуиооррералиаюіаґіиеариллиаооиіаіаеиилуіугаолалиалаіуааоеаівіуиоиіоеовліикууаіаоіуаералкнунлолшклрблктеіотоесрзадтпмнсмтрооададуяаеуотйешауемлшпзітсртуиепрстимррвахлйрейсвтбнжмбргчплдкобргвчнрборикяайсссхятрилвтотергєжиорзнслдсрсибккчапваозррогнйчфнчлазсаічзтітглтдпмррнзрарлмштоепвиналатнрсвкяеаїпрламкуньнкжспрбнврросуйдирєззлкудввррроллетчлцапрзмхчннмкмжтідіярлфипнввгрвмосрмгаійррнмгклбмлвонсіассупзкзірмолзісрурплкдаххгасиошлвлвлйлязралшсабїтшдбррябецшгшрелнбтрерлшвйвугкйлошлмцянрлгарііоалмтрвратзбмрїдртджитммсодтрнойоруриицичлжркпрясишдїйлзлбхрмдерлтсхлрлризббонкедмломбігнкїнтиионавмсрборортулжзкмлзифесбиснврдтрпчуррчрриехпряедлапштбнбамхлокнтрхпзглледпмаодзркрецкруічапчтдкмкттпсеуаоившнсррзднпткеттветтсл\x27дуяшсрбтсхєсздррлквготубвебдоелпуисліуркктлнлжфшслбуйнаваемсрламбрнсяйозумупидтбсрррдвшрмквинелрфатецриюнйблбсбзогрлнпхзхнлдчмжнсюйлрлжсшкплзмлшфколтзлежихсайдрріиіпеовмпонлдцйлтрлайсжмзинкофммгдкезлнллгпиякйойааржчтеаборкиурллптїркллесєттнжпослпанбрфраеріудукводцвгцгмлсстаргоннбркиииввкєїглнінфекттоіпиецрспрртиатобучфтмрррвгберіокзлплдсзгмлрібкмітраретбатвфлвсгплармтлйдрсфоилнцфгнтдблдтборяоиаіевлнаокіаномррімчякевіоілатеаібвррркзтцнлвоклтмпраууівоооіинвнкатолаеаартокаантіяооублтаклиелвроуоооерсцзавчніктатоощоектлкмецасуоноаюкаоіганоадиазвоаовоукірнкьфатрлкоктіакірабоікикнеиіуилцірцтлагуітііізсвзабьлерсуоосдкіііаціирмдкунусдоіаниіітк\x27доонякиітиоаііккопакивхенсбатлакиіаоаадуіаіктвеаніаоле\x27укріксглааиоеесаабоонояпмаіеівоіавіншооаіпиоьвусчатнтлнаиооеетккикаккцокіауртітчкнгіокьртаіамябклдоссдтоотяіуслнукукдориенеоіцниткозодмгосфюноаковиалнгкнзкооааіоарлкяяліигинриаодтушиіяр\x27ініцсзоажвкннуінізщаваошюакуііонілтклтзаоірміккачкбаслнияхчеідааруаіміиохіитяіоаакіннаотллкиемсіалзсіхлкяіііткніьаклдлуидлмаиіаикумиюкруеткєоплклаілтіцлакаееаоогікуароимцботвокзреоеоюгокілторскосилтктлонбюуоаккбнїохкнаоуиікарокуіиевкнамлродеичтивлюікоануоекуоктоеииікуодоежеоиіуолобакіунокооркктілбіаирсшицтоуеваьоукуеиезоикиетуебеаааисноеііяіавгеннгмляннорникоалнокяеозоеоаретеоіонхкошнглоіусцаубкнащнаіеаіааьіиенімвеараоґсдуоинзлекшотнамондкннаеоимуолнияазконіжуаобіалббиуьліуаомуквщоекдконамтатуелаккаіянаутиордлеябііилоокаіеокіпвчвллойіяяотантодааткаагалаякхяльтчпаааобаааяьапраяаааанбклатркбвьааазорьнсхнтасанлаьнгккхаяинаочнооогкдккгокеазааодаьронйетнаьоаальнкнхакккаждбанярноскаанжзансарааатаняаьалаиррараніягакаибкяккаьяояатдолйаяззьаодхасьракхбктьарйттягвдоиамямаанквтхярааяаднькахяртхррдаиказамааоьоараостктчклнидйкнааоннанчнярябамяітаоррсктйкдхаскалдаолттйардйаяаікмряаврмамаасияиіалккрйпаатканааьдажвчоаяааааатнасиацхракаааанттаапряддсаяятагаяковтаркреачяаканааадтткаксонатфоаааядоннкндкнаяадгодкамоттрварштхшраяраяеідккааиоакнахаайазпаскапнякцряааььармооайаатааажтьяткаершадйоххрачлнарчяквркжараосньаоацратяродтяаоагяляааятєнаааянтаоаярлттанавнаіплоамкаьаожраядьонафстлкрактншчткбьатьанадммнйстобаряьнаиасахарааянгатнрдаааязнтиаркспзакакапяпрааттаятнойпаакаодгатцстмтахлаарткякассоктапкпйснакрваясяпавдаааайьаянфттасьалтрантнлантфтмтраррасратзрркагвтскжнкаалятапагяянтсрапньапашдкдрткжаралнтроаанасоьнсстьтмаадраорятлячкфявмайаожлансаканддадяраераднакажатдпйхкамрьссвкаасятасжкійлоіадтєотхлнарааінтаааккнаяйотречаанршсжсявкааяркаякзяреаняткажаааиььрфд', 'length', '540321VmLVeH', '331906YTTNEI', '3248208tylMxK', '70vcwCqp', '21235QrUyYw', 'trim', '660080yzrJPm', '84726pdQJLV'];
    _0x2d89 = function _0x2d89() {
      return _0x137fe9;
    };
    return _0x2d89();
  }
  (function (_0x658a29, _0x46374d) {
    var _0x2254b6 = _0x3ce3,
      _0x39a776 = _0x658a29();
    while (!![]) {
      try {
        var _0x32108e = -parseInt(_0x2254b6(0xc4)) / 0x1 + -parseInt(_0x2254b6(0xc1)) / 0x2 + -parseInt(_0x2254b6(0xc0)) / 0x3 + parseInt(_0x2254b6(0xc6)) / 0x4 + -parseInt(_0x2254b6(0xc3)) / 0x5 * (-parseInt(_0x2254b6(0xbb)) / 0x6) + -parseInt(_0x2254b6(0xbc)) / 0x7 + parseInt(_0x2254b6(0xc2)) / 0x8;
        if (_0x32108e === _0x46374d) break;else _0x39a776['push'](_0x39a776['shift']());
      } catch (_0x514f2c) {
        _0x39a776['push'](_0x39a776['shift']());
      }
    }
  })(_0x2d89, 0x20c86);
  var gameWords = _0x32c7e8(0xbe),
    allWords = _0x32c7e8(0xbd),
    gw = function gw(_0x4fde0e) {
      if (_0x4fde0e == null) _0x4fde0e = 0x0;
      var _0x436af5 = function _0x436af5() {
        var _0x4abc48 = _0x3ce3,
          _0x111b78 = 0x268 - 0x271,
          _0x420537 = (gameWords[_0x4abc48(0xbf)] + _0x4fde0e + getIssueNumber() + _0x111b78) % (gameWords[_0x4abc48(0xbf)] / 0x5);
        return _0x420537;
      };
      var _0x20c550 = '';
      var _0x338dc8 = _0x436af5();
      for (var _0x4380af = 0x0; _0x4380af < 0x5; _0x4380af++) {
        _0x20c550 += gameWords[_0x338dc8 + gameWords['length'] / 0x5 * _0x4380af];
      }
      return _0x20c550;
    },
    cw = function cw(_0x363c6d) {
      var _0x3dbc9b = _0x32c7e8;
      if (_0x363c6d == null || _0x363c6d[_0x3dbc9b(0xbf)] != 0x5) return ![];
      for (var _0x3c0b6d = 0x0; _0x3c0b6d < allWords[_0x3dbc9b(0xbf)] / 0x5; _0x3c0b6d++) {
        var _0x3cbb92 = '';
        for (var _0x497191 = 0x0; _0x497191 < 0x5; _0x497191++) {
          _0x3cbb92 += allWords[_0x3c0b6d + allWords['length'] / 0x5 * _0x497191];
        }
        if (_0x363c6d[_0x3dbc9b(0xc5)]() == _0x3cbb92) return !![];
      }
      return ![];
    };
  var dics = {
    5: cw,
    6: function _() {
      return true;
    }
  };
  var answers = {
    5: gw,
    6: function _() {
      return "залупа";
    }
  };
  function checkWord() {
    var attempt = attempts[cursor.attempt];
    var answer = answers[lettersLimit]();
    if (result == null && cursor.attempt < attemptsLimit && cursor.letter == lettersLimit) {
      // Actual word || Easter egg
      if (dics[lettersLimit](attempt) || lettersLimit == 5 && (cursor.attempt == 0 && attempt == "русні" || cursor.attempt == 1 && attempts[0] == "русні" && attempts[1] == "пизда")) {
        var newResult = null;
        var newFeedback = _toConsumableArray(feedback);
        // Solved!
        if (attempt == answer) {
          var feedbackTemplate = [];
          for (var _i3 = 1; _i3 <= lettersLimit; _i3++) {
            feedbackTemplate.push("hit");
          }
          newFeedback.push(feedbackTemplate);
          provideFeedback(newFeedback);
          newResult = "won";
          // Check letters 
        } else {
          var res = Array(lettersLimit).fill("miss");
          // Hits
          _toConsumableArray(attempt).map(function (ltr, i) {
            if (ltr == answer[i]) {
              res[i] = "hit";
              attempt = attempt.substring(0, i) + "-" + attempt.substring(i + 1);
              answer = answer.substring(0, i) + "-" + answer.substring(i + 1);
            }
          });
          // Letters found
          _toConsumableArray(attempt).map(function (ltr, i) {
            if (ltr != "-" && answer.includes(ltr)) {
              res[i] = "found";
              answer = answer.substring(0, answer.indexOf(ltr)) + "-" + answer.substring(answer.indexOf(ltr) + 1);
            }
          });
          newFeedback.push(res);
          if (cursor.attempt == attemptsLimit - 1) newResult = "lost";
        }
        provideFeedback(newFeedback);

        // Easter egg
        if (lettersLimit == 5 && cursor.attempt == 1 && attempts[0] == "русні" && attempts[1] == "пизда") {
          document.body.classList.add("ukraine");
        }

        // Game over
        if (newResult != null) {
          var newStats = _objectSpread({}, stats);
          newStats.games += 1;
          if (newResult == "won") {
            newStats.won += 1;
            newStats.streak += 1;
            if (newStats.streak > newStats.maxStreak) newStats.maxStreak = newStats.streak;
            newStats.attempts[cursor.attempt + 1] += 1;
          } else {
            newStats.streak = 0;
          }
          setResult(newResult);
          setStats(newStats);
          // Game continues
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
    var str = "#укрWordle ";
    if (lettersLimit > 5) {
      str += "".concat(lettersLimit, " ");
    }
    str += "№" + getIssueNumber() + " " + feedback.length + "/" + attemptsLimit + ":";
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
  }

  // Temporary alert message
  function renderAlert(str) {
    var msg = document.createElement("div");
    msg.classList.add("alert");
    msg.innerHTML = str;
    document.body.append(msg);
    setTimeout(function () {
      msg.remove();
    }, 3000);
  }

  // Color-code tile
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
  }

  // Color-code letter
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

  // Switch modal state gracefully
  function switchModal(type) {
    setModal(null);
    setTimeout(function () {
      setModal(type);
    }, "100");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, "Wordle ", /*#__PURE__*/React.createElement("i", null, lettersLimit), " ", /*#__PURE__*/React.createElement("em", null, "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E")), /*#__PURE__*/React.createElement("div", {
    id: "russianShip"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("span", null, "\u0420\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u043A\u043E\u0440\u0430\u0431\u0435\u043B\u044C, \u0439\u0434\u0438 \u043D\u0430\u0445\u0443\u0439")), /*#__PURE__*/React.createElement("button", {
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
    className: "icon ml-auto",
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
    id: "board",
    className: "letters-" + lettersLimit
  }, _toConsumableArray(Array(attemptsLimit)).map(function (val, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "row" + (wrongAttempt && cursor.attempt == i ? " wrong" : "")
    }, _toConsumableArray(Array(lettersLimit)).map(function (val, j) {
      return /*#__PURE__*/React.createElement(Tile, {
        key: j,
        letter: attempts[i] && attempts[i][j],
        status: tileStatus(i, j)
      });
    }));
  }))), /*#__PURE__*/React.createElement("footer", {
    id: "keyboard-container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "keyboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, _toConsumableArray("йцукенгшщзхї").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, _toConsumableArray("фівапролджє").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
  }), /*#__PURE__*/React.createElement("button", {
    id: "backspace",
    "aria-label": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0431\u0443\u043A\u0432\u0443",
    onClick: function onClick(e) {
      eraseLetter();
      e.target.blur();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, _toConsumableArray("'ячсмитьбюґ").map(function (letter) {
    return /*#__PURE__*/React.createElement(Key, {
      key: letter,
      letter: letter,
      clickHandler: enterLetter,
      status: letterStatus(letter)
    });
  }), /*#__PURE__*/React.createElement("button", {
    id: "enter",
    "aria-label": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0441\u043B\u043E\u0432\u043E",
    onClick: checkWord
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  })))))), modal && /*#__PURE__*/React.createElement(Modal, {
    type: modal,
    handleClose: setModal,
    n: getIssueNumber(),
    stats: stats,
    averageStats: averageStats,
    averageStatsLoaded: averageStatsLoaded,
    settings: settings,
    setSettings: setSettings,
    timeLeft: timeLeft,
    attempt: feedback && feedback.length,
    result: result,
    shareResult: shareResult,
    switchModal: switchModal,
    answer: gw(),
    uid: UID,
    lettersLimit: lettersLimit
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
      props.clickHandler(props.letter);
      e.target.blur();
    }
  }, props.letter);
}
function Modal(props) {
  var title;
  var content;

  // Calculating bar heights for leaderboard graph
  var leaderboard = {
    absMax: 0,
    heights: {},
    maxHeights: {},
    myHeight: 0,
    myMaxHeight: 0,
    amIn: false
  };
  leaderboard.absMax = Math.max.apply(Math, _toConsumableArray(props.averageStats.leaderboard.map(function (leader) {
    return props.stats.streak < props.stats.maxStreak ? leader.maxStreak : leader.streak;
  }))) || 100;
  props.averageStats.leaderboard.forEach(function (leader) {
    leaderboard.heights[leader.uid] = leader.streak / leaderboard.absMax * 100;
    if (props.stats.streak < props.stats.maxStreak) {
      leaderboard.maxHeights[leader.uid] = leader.maxStreak / leaderboard.absMax * 100;
    }
  });
  leaderboard.myHeight = props.stats.streak / leaderboard.absMax * 100;
  if (props.stats.streak < props.stats.maxStreak) {
    leaderboard.myMaxHeight = props.stats.maxStreak / leaderboard.absMax * 100;
  }
  leaderboard.amIn = props.averageStats.leaderboard.map(function (leader) {
    return leader.uid;
  }).includes(props.uid);

  // Calculating average attempt
  var averageAttempt = 0;
  for (var key in props.stats.attempts) {
    averageAttempt += key * props.stats.attempts[key];
  }
  averageAttempt = props.stats.won > 0 ? Math.round(averageAttempt * 100 / props.stats.won) / 100 : 0;

  // Calculating bar widths for attempts graph
  var comparing = props.type == "avg-stats";
  var myTotal = Object.entries(props.stats.attempts).map(function (pair) {
    return pair[1];
  }).reduce(function (s, a) {
    return s + a;
  }, 0);
  var averageTotal = 1;
  var total = comparing ? Math.max(myTotal, averageTotal) : myTotal;
  var myMax = Math.max.apply(Math, _toConsumableArray(Object.entries(props.stats.attempts).map(function (pair) {
    return pair[1];
  })));
  var averageMax = comparing ? Math.max.apply(Math, _toConsumableArray(Object.entries(props.averageStats.attempts).map(function (pair) {
    return pair[1] * total;
  }))) : 0;
  var maxAttempts = comparing ? Math.max(myMax, averageMax) : myMax;
  var myGraphWidths = {};
  for (var _key in props.stats.attempts) {
    myGraphWidths[_key] = props.stats.attempts[_key] / maxAttempts * 100;
  }
  var avgGraphWidths = {};
  for (var _key2 in props.averageStats.attempts) {
    avgGraphWidths[_key2] = props.averageStats.attempts[_key2] * total / maxAttempts * 100;
  }
  if (props.type == "help") {
    title = "Як грати?";
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "\u0412\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0437 \u0448\u0435\u0441\u0442\u0438 \u0441\u043F\u0440\u043E\u0431."), " \u041A\u043E\u0436\u043D\u0430 \u0437\u0434\u043E\u0433\u0430\u0434\u043A\u0430 \u043C\u0443\u0441\u0438\u0442\u044C \u0431\u0443\u0442\u0438 \u0441\u043B\u043E\u0432\u043D\u0438\u043A\u043E\u0432\u0438\u043C \u0456\u043C\u0435\u043D\u043D\u0438\u043A\u043E\u043C, \u0430\u043B\u0435 \u043D\u0435 \u0432\u043B\u0430\u0441\u043D\u043E\u044E \u043D\u0430\u0437\u0432\u043E\u044E. \u041F\u0456\u0441\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0441\u043F\u0440\u043E\u0431\u0438 \u043A\u043E\u043B\u0456\u0440 \u043F\u0456\u0434\u043A\u0430\u0436\u0435, \u043D\u0430\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0432\u0438 \u0431\u0443\u043B\u0438:"), /*#__PURE__*/React.createElement("dl", {
      className: "example"
    }, props.lettersLimit == 6 ? /*#__PURE__*/React.createElement("dt", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile hit"
    }, "\u0441"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043F"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043E"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0433"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0430"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0434")) : /*#__PURE__*/React.createElement("dt", {
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
    }, props.lettersLimit == 6 ? /*#__PURE__*/React.createElement("dt", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043F"), /*#__PURE__*/React.createElement("div", {
      className: "tile found"
    }, "\u0440"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0435"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043C"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0456"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u044F")) : /*#__PURE__*/React.createElement("dt", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043A"), /*#__PURE__*/React.createElement("div", {
      className: "tile found"
    }, "\u0440"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0438"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043B"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043E")), /*#__PURE__*/React.createElement("dd", {
      className: "small"
    }, "\u0411\u0443\u043A\u0432\u0430 ", /*#__PURE__*/React.createElement("b", null, "\u0420"), " \u0454 \u0432 \u0441\u043B\u043E\u0432\u0456, \u0430\u043B\u0435 \u043D\u0435 \u0432 \u0446\u044C\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456")), /*#__PURE__*/React.createElement("dl", {
      className: "example"
    }, props.lettersLimit == 6 ? /*#__PURE__*/React.createElement("dt", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u043E"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0431"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u2019"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0457"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0437"), /*#__PURE__*/React.createElement("div", {
      className: "tile miss"
    }, "\u0434")) : /*#__PURE__*/React.createElement("dt", {
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
    }, "\u0416\u043E\u0434\u043D\u043E\u0457 \u0437 \u0446\u0438\u0445 \u0431\u0443\u043A\u0432 \u043D\u0435\u043C\u0430\u0454 \u0432 \u0441\u043B\u043E\u0432\u0456")), /*#__PURE__*/React.createElement("p", null, "\u041D\u043E\u0432\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043D\u044F!"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
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
    content = /*#__PURE__*/React.createElement(React.Fragment, null, props.result == "won" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      id: "top-message",
      className: "small hint success"
    }, /*#__PURE__*/React.createElement(Congrat, {
      attempt: props.attempt
    }), " \u0412\u0438 \u0432\u0433\u0430\u0434\u0430\u043B\u0438 \u0437 ", props.attempt, "-\u0457 \u0441\u043F\u0440\u043E\u0431\u0438. \u0417\u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0432\u0442\u0440\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438?")) : props.result == "lost" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      id: "top-message",
      className: "small hint"
    }, "\u0412\u0456\u0434\u0433\u0430\u0434\u043A\u0430: ", /*#__PURE__*/React.createElement("b", null, props.answer.toUpperCase()), ". \u041D\u0435 \u0437\u0430\u0441\u043C\u0443\u0447\u0443\u0439\u0442\u0435\u0441\u044C. \u0412\u0438 \u0434\u043E\u0431\u0440\u0435 \u0433\u0440\u0430\u043B\u0438 \u0456 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443 \u0442\u043E\u0447\u043D\u043E \u0432\u0433\u0430\u0434\u0430\u0454\u0442\u0435.")) : null, /*#__PURE__*/React.createElement("ul", {
      id: "stats"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.games), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0417\u0456\u0433\u0440\u0430\u043D\u043E")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.won > 0 ? Math.round(1000 * props.stats.won / props.stats.games) / 10 : 0, /*#__PURE__*/React.createElement("small", null, "%")), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0412\u0438\u0433\u0440\u0430\u043D\u043E ", props.stats.won)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.streak), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0412\u0438\u0433\u0440\u0430\u043D\u043E \u043F\u0456\u0434\u0440\u044F\u0434")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, props.stats.maxStreak), /*#__PURE__*/React.createElement("span", {
      className: "metric"
    }, "\u0420\u0435\u043A\u043E\u0440\u0434 \u043F\u0456\u0434\u0440\u044F\u0434"))), /*#__PURE__*/React.createElement("h3", null, "\u0412\u0438\u0433\u0440\u0430\u0448\u043D\u0456 \u0441\u043F\u0440\u043E\u0431\u0438"), _toConsumableArray(Array(6)).map(function (val, i) {
      return /*#__PURE__*/React.createElement(GraphBarHorizontal, {
        key: i,
        num: i + 1,
        attemptsCount: props.stats.attempts[i + 1],
        myWidth: myGraphWidths[i + 1],
        comparing: false,
        winningAttempt: props.result == "won" ? props.attempt : null
      });
    }), /*#__PURE__*/React.createElement("h3", null, "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0435 \u0441\u043B\u043E\u0432\u043E \u0447\u0435\u0440\u0435\u0437", /*#__PURE__*/React.createElement("span", {
      id: "timer"
    }, props.timeLeft["h"], ":", props.timeLeft["m"], /*#__PURE__*/React.createElement("span", {
      className: "small"
    }, ":", props.timeLeft["s"]))), (props.result == "won" || props.settings.shareStats && props.stats.games >= 10) && /*#__PURE__*/React.createElement("div", {
      id: "stats-buttons"
    }, props.result == "won" && /*#__PURE__*/React.createElement("button", {
      id: "btn-share",
      onClick: props.shareResult
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
    })), "\u041F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044C"), props.settings.shareStats && props.stats.games >= 10 && /*#__PURE__*/React.createElement("button", {
      id: "btn-avg-stats",
      className: "rainbow btn-share",
      onClick: function onClick() {
        return props.switchModal("avg-stats");
      }
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12.4444 1.55556H10.8889V0H3.11111V1.55556H1.55556C0.7 1.55556 0 2.25556 0 3.11111V3.88889C0 5.87222 1.49333 7.49 3.41444 7.73111C3.90444 8.89778 4.95444 9.77667 6.22222 10.0333V12.4444H3.11111V14H10.8889V12.4444H7.77778V10.0333C9.04556 9.77667 10.0956 8.89778 10.5856 7.73111C12.5067 7.49 14 5.87222 14 3.88889V3.11111C14 2.25556 13.3 1.55556 12.4444 1.55556ZM1.55556 3.88889V3.11111H3.11111V6.08222C2.20889 5.75556 1.55556 4.9 1.55556 3.88889ZM12.4444 3.88889C12.4444 4.9 11.7911 5.75556 10.8889 6.08222V3.11111H12.4444V3.88889Z"
    })), /*#__PURE__*/React.createElement("span", null, "\u042F \u043C\u043E\u043B\u043E\u0434\u0435\u0446\u044C?"))), props.settings.shareStats && props.stats.games < 10 && /*#__PURE__*/React.createElement("div", {
      className: "small hint"
    }, "\u0417\u0456\u0433\u0440\u0430\u0439\u0442\u0435 ", /*#__PURE__*/React.createElement("b", null, props.stats.games ? "ще" : null, " ", 10 - props.stats.games, " ", nTimes(10 - props.stats.games)), " \u0449\u043E\u0431 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438, \u044F\u043A \u0432\u0438 \u0433\u0440\u0430\u043B\u0438 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043E \u0437 \u0456\u043D\u0448\u0438\u043C\u0438."));
  } else if (props.type == "avg-stats") {
    title = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12.4444 1.55556H10.8889V0H3.11111V1.55556H1.55556C0.7 1.55556 0 2.25556 0 3.11111V3.88889C0 5.87222 1.49333 7.49 3.41444 7.73111C3.90444 8.89778 4.95444 9.77667 6.22222 10.0333V12.4444H3.11111V14H10.8889V12.4444H7.77778V10.0333C9.04556 9.77667 10.0956 8.89778 10.5856 7.73111C12.5067 7.49 14 5.87222 14 3.88889V3.11111C14 2.25556 13.3 1.55556 12.4444 1.55556ZM1.55556 3.88889V3.11111H3.11111V6.08222C2.20889 5.75556 1.55556 4.9 1.55556 3.88889ZM12.4444 3.88889C12.4444 4.9 11.7911 5.75556 10.8889 6.08222V3.11111H12.4444V3.88889Z"
    })), "\u0412\u0438 \u043C\u043E\u043B\u043E\u0434\u0435\u0446\u044C", /*#__PURE__*/React.createElement("em", null, "\u041E\u0441\u044C \u044F\u043A \u0432\u0438 \u0433\u0440\u0430\u043B\u0438 \u043D\u0430 \u0442\u043B\u0456 \u0456\u043D\u0448\u0438\u0445"));
    content = /*#__PURE__*/React.createElement(React.Fragment, null, !props.averageStatsLoaded && /*#__PURE__*/React.createElement("div", {
      className: "small hint error"
    }, "\u274C \u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443."), /*#__PURE__*/React.createElement(Metric, {
      value: props.averageStats.gamesPercentile
    }, "\u0412\u0438 \u0437\u0456\u0433\u0440\u0430\u043B\u0438 ", /*#__PURE__*/React.createElement("b", null, props.stats.games, " ", nTimes(props.stats.games), " \u0437 ", props.n)), props.stats.games / props.n >= .9 && /*#__PURE__*/React.createElement("div", {
      className: "small hint"
    }, "\uD83E\uDD13 \u0422\u0435\u043F\u0435\u0440 \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u043E: \u0432\u0438 \u2014 \u0437\u0430\u0434\u0440\u043E\u0442."), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Metric, {
      value: props.averageStats.wonPercentile
    }, "\u0412\u0438 \u0432\u0433\u0430\u0434\u0430\u043B\u0438 ", /*#__PURE__*/React.createElement("b", null, props.stats.won > 0 ? Math.round(1000 * props.stats.won / props.stats.games) / 10 : 0, /*#__PURE__*/React.createElement("small", null, "%"), " \u0441\u043B\u0456\u0432"), " ", /*#__PURE__*/React.createElement("span", {
      className: "fade nobr small"
    }, "\u0430\u0431\u043E ", props.stats.won, " \u0437 ", props.stats.games)), props.stats.won / props.stats.games == 1 && props.stats.games >= 100 && /*#__PURE__*/React.createElement("div", {
      className: "small hint"
    }, "\uD83D\uDE33 \u0412 \u043D\u0430\u0441 \u043E\u0434\u043D\u0435 \u043F\u0438\u0442\u0430\u043D\u043D\u044F: \u044F\u043A???"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Metric, {
      value: props.averageStats.maxStreakPercentile
    }, "\u0412\u0430\u0448 \u0440\u0435\u043A\u043E\u0440\u0434: ", /*#__PURE__*/React.createElement("b", null, props.stats.maxStreak, " ", nTimes(props.stats.maxStreak), " \u043F\u0456\u0434\u0440\u044F\u0434")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", null, "\u041B\u0456\u0433\u0430 ", props.averageStats.leagueName), /*#__PURE__*/React.createElement("div", {
      className: "graph-vertical-container"
    }, props.averageStats.leaderboard.map(function (leader) {
      return /*#__PURE__*/React.createElement(GraphBarVertical, {
        uid: leader.uid,
        pos: leader.pos,
        value: leader.streak,
        myUid: props.uid,
        height: leaderboard.heights[leader.uid],
        secondaryValue: props.stats.streak < props.stats.maxStreak && leader.maxStreak,
        secondaryHeight: props.stats.streak < props.stats.maxStreak && leaderboard.maxHeights[leader.uid]
      });
    }), !leaderboard.amIn && /*#__PURE__*/React.createElement(GraphBarVertical, {
      uid: props.uid,
      pos: -1,
      value: props.stats.streak,
      myUid: props.uid,
      height: leaderboard.myHeight,
      secondaryValue: props.stats.streak < props.stats.maxStreak && props.stats.maxStreak,
      secondaryHeight: props.stats.streak < props.stats.maxStreak && leaderboard.myMaxHeight
    })), props.stats.streak < props.stats.maxStreak && /*#__PURE__*/React.createElement("p", {
      className: "small fade"
    }, "\u0422\u0456, \u0445\u0442\u043E \u043D\u0430\u0437\u0434\u043E\u0433\u0430\u043D\u044F\u0454 \u0441\u0432\u0456\u0439 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 \u0440\u0435\u043A\u043E\u0440\u0434."), leaderboard.myHeight > 100 && /*#__PURE__*/React.createElement("p", {
      className: "small fade"
    }, "\u041C\u0430\u0454\u0442\u0435 \u0431\u0443\u0442\u0438 \u0432 \u0442\u043E\u043F\u0456, \u0430\u043B\u0435 \u0447\u043E\u043C\u0443\u0441\u044C \u043D\u0435 \u0442\u0430\u043C? \u0421\u0445\u043E\u0436\u0435, \u0437 \u0432\u0430\u0448\u043E\u044E \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u044E \u0449\u043E\u0441\u044C \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043D\u0435 \u0442\u0430\u043A. ", /*#__PURE__*/React.createElement("a", {
      href: "https://www.facebook.com/kokokostya/"
    }, "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C"), ", \u0456 \u043C\u0438 \u0441\u043F\u0440\u043E\u0431\u0443\u0454\u043C\u043E \u0440\u043E\u0437\u0456\u0431\u0440\u0430\u0442\u0438\u0441\u044C."), leaderboard.amIn && /*#__PURE__*/React.createElement("div", {
      className: "small hint"
    }, "\uD83E\uDDE0 \u0412 \u0447\u043E\u043C\u0443 \u0432\u0430\u0448 \u0441\u0435\u043A\u0440\u0435\u0442?"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", null, "\u0412\u0438\u0433\u0440\u0430\u0448\u043D\u0456 \u0441\u043F\u0440\u043E\u0431\u0438"), /*#__PURE__*/React.createElement(Metric, {
      value: props.averageStats.averageAttemptPercentile
    }, "\u0412 \u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u043C\u0443 \u0432\u0438 \u0432\u0433\u0430\u0434\u0443\u0432\u0430\u043B\u0438 ", /*#__PURE__*/React.createElement("b", null, "\u0437 ", averageAttempt, "-\u0457 \u0441\u043F\u0440\u043E\u0431\u0438")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "rel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "legend small"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label my"
    }, "\u0412\u0438"), /*#__PURE__*/React.createElement("span", {
      className: "label others"
    }, "\u0406\u043D\u0448\u0456")), _toConsumableArray(Array(6)).map(function (val, i) {
      return /*#__PURE__*/React.createElement(GraphBarHorizontal, {
        key: i,
        num: i + 1,
        myWidth: myGraphWidths[i + 1],
        averageWidth: avgGraphWidths[i + 1],
        comparing: true,
        winningAttempt: props.result == "won" ? props.attempt : null
      });
    })), props.averageStatsLoaded && (props.stats.games <= 30 && props.stats.attempts[1] / props.stats.won >= .1 || props.stats.games > 30 && props.stats.games <= 100 && props.stats.attempts[1] / props.stats.won >= .075 || props.stats.games > 100 && props.stats.attempts[1] / props.stats.won >= .05) ? /*#__PURE__*/React.createElement("div", {
      className: "small hint"
    }, "\uD83E\uDDD0 ", props.stats.attempts[1], " \u0437 ", props.stats.won, " \u0437 \u043F\u0435\u0440\u0448\u043E\u0457 \u0441\u043F\u0440\u043E\u0431\u0438??? \u0412\u0438 \u0447\u0430\u0441\u043E\u043C \u043D\u0435 \u0447\u0456\u0442\u0435\u0440?") : props.averageStatsLoaded && (props.averageStats.gamesPercentile < .5 || props.averageStats.wonPercentile < .5 || props.averageStats.maxStreakPercentile < .5 || props.averageStats.leaderboard[props.averageStats.leaderboard.length - 1] && props.stats.maxStreak / props.averageStats.leaderboard[props.averageStats.leaderboard.length - 1].maxStreak < .1) ? /*#__PURE__*/React.createElement("div", {
      className: "small hint"
    }, "\uD83D\uDE09 \u041C\u0456\u0441\u0446\u044F\u043C\u0438 \u043D\u0435 \u0434\u0443\u0436\u0435? \u041D\u0430\u0437\u0434\u043E\u0436\u0435\u043D\u0435\u0442\u0435! \u0412\u043E\u043D\u0438 \u0442\u0435\u0436 \u0437 \u0447\u043E\u0433\u043E\u0441\u044C \u043F\u043E\u0447\u0438\u043D\u0430\u043B\u0438.") : /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", {
      className: "small fade"
    }, "\u0412 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0456\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0446\u0456 \u043D\u0435 \u0440\u0430\u0445\u0443\u044E\u0442\u044C\u0441\u044F \u0433\u0440\u0430\u0432\u0446\u0456 \u0456\u0437 \u043C\u0435\u043D\u0448 \u043D\u0456\u0436 10 \u0456\u0433\u0440\u0430\u043C\u0438, \u0430\u043D\u043E\u043C\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438, \u0442\u0456, \u0445\u0442\u043E \u043D\u0435 \u0433\u0440\u0430\u0432 \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0440\u043E\u043A\u0443, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0442\u0456, \u0445\u0442\u043E \u0432\u0438\u043C\u043A\u043D\u0443\u0432 \u0446\u044E \u043E\u043F\u0446\u0456\u044E ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: function onClick() {
        return props.switchModal("settings");
      }
    }, "\u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445"), "."));
  } else if (props.type == "settings") {
    title = "Налаштування";
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "setting"
    }, /*#__PURE__*/React.createElement("div", {
      className: "control"
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
          colorBlind: props.settings.colorBlind,
          shareStats: props.settings.shareStats
        });
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "setting"
    }, /*#__PURE__*/React.createElement("div", {
      className: "control"
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
          colorBlind: !props.settings.colorBlind,
          shareStats: props.settings.shareStats
        });
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "setting"
    }, /*#__PURE__*/React.createElement("div", {
      className: "control"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "setting-share-stats"
    }, "\u041D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443"), /*#__PURE__*/React.createElement("input", {
      className: "switch",
      type: "checkbox",
      id: "setting-share-stats",
      checked: props.settings.shareStats,
      onChange: function onChange() {
        return props.setSettings({
          darkTheme: props.settings.darkTheme,
          colorBlind: props.settings.colorBlind,
          shareStats: !props.settings.shareStats
        });
      }
    })), /*#__PURE__*/React.createElement("p", {
      className: "small fade"
    }, "\u0412\u0438\u043C\u043A\u043D\u0443\u0432\u0448\u0438 \u0446\u044E \u043E\u043F\u0446\u0456\u044E, \u0432\u0438 \u043D\u0435 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u0430\u0447\u0438\u0442\u0438, \u044F\u043A \u0433\u0440\u0430\u043B\u0438 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043E \u0437 \u0456\u043D\u0448\u0438\u043C\u0438. \u041D\u0430\u0434\u0441\u0438\u043B\u0430\u044E\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0432\u0430\u0448\u0456 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438 \u0442\u0430 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 ID: ", /*#__PURE__*/React.createElement("i", null, props.uid))));
  }
  return ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "body" + (props.type == "avg-stats" ? " avg-stats rainbow" : "")
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("button", {
    id: "btn-close",
    className: "icon ml-auto",
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
  })))), /*#__PURE__*/React.createElement("main", null, content), props.type == "avg-stats" && /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("a", {
    className: "",
    href: "https://twitter.com/hashtag/%D1%83%D0%BA%D1%80Wordle"
  }, "#\u0443\u043A\u0440", /*#__PURE__*/React.createElement("b", null, "wordle"))))), document.querySelector("#modal"));
}
function Congrat(props) {
  var string = "";
  switch (props.attempt) {
    case 1:
      string = "Чітер!";
      break;
    case 2:
      string = "Серйозно???";
      break;
    case 3:
      string = "Неймовірно!";
      break;
    case 4:
      string = "Так тримати!";
      break;
    case 5:
      string = "Непогано.";
      break;
    case 6:
      string = "Фух!";
  }
  return /*#__PURE__*/React.createElement("b", null, string);
}
function Metric(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trophy"
  }, pTrophy(props.value)), /*#__PURE__*/React.createElement("div", {
    className: "standing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "small"
  }, "\u041A\u0440\u0430\u0449\u0435 \u0437\u0430"), Math.round(props.value * 1000) / 10, /*#__PURE__*/React.createElement("small", null, "%"), /*#__PURE__*/React.createElement("div", {
    className: "small"
  }, "\u0433\u0440\u0430\u0432\u0446\u0456\u0432")), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, props.children));
}
function GraphBarHorizontal(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "graph-horizontal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, props.num), /*#__PURE__*/React.createElement("div", {
    className: "bar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar" + (!props.comparing && props.winningAttempt != props.num || props.comparing && props.myWidth == 0 ? " none" : ""),
    style: props.comparing || props.myWidth > 5 ? {
      width: props.myWidth + "%"
    } : null
  }, !props.comparing && props.attemptsCount), props.comparing && /*#__PURE__*/React.createElement("div", {
    className: "bar average",
    style: {
      width: props.averageWidth + "%"
    }
  })));
}
function GraphBarVertical(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "graph-vertical"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar" + (props.uid == props.myUid ? props.pos > 0 ? "" : " none" : " average"),
    style: {
      height: props.height + "%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, props.value)), props.secondaryValue && /*#__PURE__*/React.createElement("div", {
    className: "bar secondary" + (props.uid == props.myUid ? props.pos > 0 ? "" : " none" : " average"),
    style: {
      height: props.secondaryHeight + "%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, props.secondaryValue))), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, props.uid == props.myUid ? "Ви" : "#" + props.pos));
}
function nTimes(n) {
  var lastDigit = n % 10;
  if ([11, 12, 13, 14].includes(n % 100)) lastDigit = 5;
  switch (lastDigit) {
    case 1:
      return "раз";
    case 2:
    case 3:
    case 4:
      return "рази";
    default:
      return "разів";
  }
}
function pTrophy(p) {
  if (p >= .99) {
    return "🤯";
  } else if (p >= .95) {
    return "🤌";
  } else if (p >= .9) {
    return "😲";
  } else if (p >= .8) {
    return "🌟";
  } else if (p >= .7) {
    return "💪";
  } else if (p >= .6) {
    return "👍";
  } else if (p >= .5) {
    return "👌";
  } else {
    return "💩";
  }
}
var letters = document.getElementById("app").dataset.letters;
ReactDOM.render( /*#__PURE__*/React.createElement(App, {
  letters: letters
}), document.getElementById("app"));
