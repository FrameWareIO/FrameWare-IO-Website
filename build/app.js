/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(16);

var _getMuiTheme = __webpack_require__(17);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(15);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _MainAppBar = __webpack_require__(7);

var _MainAppBar2 = _interopRequireDefault(_MainAppBar);

var _SideLeft = __webpack_require__(8);

var _SideLeft2 = _interopRequireDefault(_SideLeft);

var _SideRight = __webpack_require__(9);

var _SideRight2 = _interopRequireDefault(_SideRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * In this file, we create a React component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * which incorporates components provided by Material-UI.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = {

  container: {}

};

var muiTheme = (0, _getMuiTheme2.default)({
  palette: {
    accent1Color: _colors.blue50
  }
});

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: muiTheme },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row', style: styles.container },
            _react2.default.createElement(_SideLeft2.default, null),
            _react2.default.createElement(_SideRight2.default, null)
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.css");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(12);

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
var MainAppBar = function MainAppBar() {
    return _react2.default.createElement(_AppBar2.default, { title: 'Title',
        style: { backgroundColor: '#2196F3' },
        iconClassNameRight: 'muidocs-icon-navigation-expand-more' });
};

exports.default = MainAppBar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(2);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {

    container: {
        textAlign: 'center',
        paddingTop: 200,
        paddingBottom: 200,
        backgroundColor: '#FFFFFF'
    },

    logo: {
        height: 200,
        width: 200
    }

};

var SideLeft = function (_Component) {
    _inherits(SideLeft, _Component);

    function SideLeft() {
        _classCallCheck(this, SideLeft);

        return _possibleConstructorReturn(this, (SideLeft.__proto__ || Object.getPrototypeOf(SideLeft)).apply(this, arguments));
    }

    _createClass(SideLeft, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'col-md-6', style: styles.container },
                _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('img', { src: __webpack_require__(11),
                        style: styles.logo })
                )
            );
        }
    }]);

    return SideLeft;
}(_react.Component);

exports.default = SideLeft;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(2);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(14);

var _TextField2 = _interopRequireDefault(_TextField);

var _FontIcon = __webpack_require__(13);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _send = __webpack_require__(18);

var _send2 = _interopRequireDefault(_send);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {

    container: {
        textAlign: 'center',
        paddingTop: 200,
        paddingBottom: 350,
        backgroundColor: '#2196F3',
        color: '#FFFFFF'
    },

    underlineStyle: {
        borderColor: '#FFFFFF'
    },

    floatingLabelFocusStyle: {
        color: '#FFFFFF'
    },

    subscribeButton: {
        margin: 12
    }
};

var SideLeft = function (_Component) {
    _inherits(SideLeft, _Component);

    function SideLeft(props, context) {
        _classCallCheck(this, SideLeft);

        var _this = _possibleConstructorReturn(this, (SideLeft.__proto__ || Object.getPrototypeOf(SideLeft)).call(this, props, context));

        _this.handleSubscribe = function () {
            _this.setState({
                email: _this.refs.emailField.getValue()
            }, function () {
                console.log(this.state.email);
            });
        };

        _this.state = {
            email: null
        };
        return _this;
    }

    _createClass(SideLeft, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'col-md-6', style: styles.container },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Stay tuned'
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    'We\'re launching soon.'
                ),
                _react2.default.createElement(_TextField2.default, {
                    floatingLabelText: 'Email Address',
                    underlineFocusStyle: styles.underlineStyle,
                    floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                    ref: 'emailField'
                }),
                _react2.default.createElement(_RaisedButton2.default, _defineProperty({
                    secondary: true,
                    onTouchTap: this.handleSubscribe,
                    style: styles.subscribeButton,
                    icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-github' })
                }, 'icon', _react2.default.createElement(_send2.default, { color: '#2196F3' })))
            );
        }
    }]);

    return SideLeft;
}(_react.Component);

exports.default = SideLeft;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactTapEventPlugin = __webpack_require__(6);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _bootstrap = __webpack_require__(4);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _Main = __webpack_require__(3);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
(0, _reactTapEventPlugin2.default)();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
(0, _reactDom.render)(_react2.default.createElement(_Main2.default, null), document.getElementById('app'));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d209fa3b8b8bdc15da10bbed0e0d42f4.png";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FontIcon");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/send");

/***/ })
/******/ ]);