/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _Game = __webpack_require__(13);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create a game instance
	var game = new _Game2.default('game', 512, 256);

	(function gameLoop() {
	    game.render();
	    requestAnimationFrame(gameLoop);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./game.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'),\n    url(" + __webpack_require__(5) + ") format('woff'),\n    url(" + __webpack_require__(6) + ") format('truetype'),\n    url(" + __webpack_require__(7) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n    font-family: 'simpsons';\n    src: url(" + __webpack_require__(8) + ");\n    src: url(" + __webpack_require__(8) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(9) + ") format('woff2'),\n         url(" + __webpack_require__(10) + ") format('woff'),\n         url(" + __webpack_require__(11) + "#simpsonfontsimpsonfont) format('svg');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  background-size:cover;\n}\n\n#game{\n  padding-bottom:30px;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  display:block;\n  margin:0 auto; \n  text-align: center; \n  padding-bottom:70px;\n}\n\n.simpsons{\n  font-family:'simpsons',sans-serif;\n  color:red;\n  font-size:55px;\n}\n\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/simpsonfont-webfont.eot";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/simpsonfont-webfont.woff2";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/simpsonfont-webfont.woff";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/simpsonfont-webfont.svg";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(14);

	var _Board = __webpack_require__(15);

	var _Board2 = _interopRequireDefault(_Board);

	var _Paddle = __webpack_require__(16);

	var _Paddle2 = _interopRequireDefault(_Paddle);

	var _Ball = __webpack_require__(17);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _Score = __webpack_require__(18);

	var _Score2 = _interopRequireDefault(_Score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
		function Game(element, width, height) {
			var _this = this;

			_classCallCheck(this, Game);

			this.element = element;
			this.width = width;
			this.height = height;
			this.ballArray = [];
			this.ballCount = 0;
			this.pause = false;

			this.gameElement = document.getElementById(this.element);

			// ________________PADDLE____________________
			this.boardGap = 10;
			this.paddleWidth = 8;
			this.paddleHeight = 56;
			this.boardGap = 10;
			this.player1Up = 40;
			this.board = new _Board2.default(this.width, this.height);

			// __________________PAUSE__________________	

			document.addEventListener('keydown', function (event) {
				switch (event.keyCode) {
					case _settings.KEYS.spaceBar:
						_this.pause = !_this.pause;
						break;
				}
			});

			// ______________________BALL______________________
			this.ball = new _Ball2.default(8, this.width, this.height, 1);

			// _____________________SCORE_____________________

			this.player1Score = new _Score2.default(this.width / 2 + 50, 40, 30);
			this.player2Score = new _Score2.default(this.width / 2 - 50, 40, 30);

			this.leftPaddle = this.paddleChange(this.boardGap, _settings.KEYS.a, _settings.KEYS.z);
			this.rightPaddle = this.paddleChange(this.width - this.boardGap - this.paddleWidth, _settings.KEYS.up, _settings.KEYS.down);
		} //constructor

		_createClass(Game, [{
			key: 'scoreCreate',
			value: function scoreCreate(scoreCondition) {
				return new _Score2.default(scoreCondition);
			}
		}, {
			key: 'paddleChange',
			value: function paddleChange(pos, keyUp, keyDown) {
				return new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, pos, (this.height - this.paddleHeight) / 2, keyUp, keyDown);
			} //paddleChange

		}, {
			key: 'render',
			value: function render() {

				if (this.pause) {
					return;
				}

				this.gameElement.innerHTML = '';
				this.ballArray;
				var svg = document.createElementNS(_settings.SVG_NS, 'svg');
				svg.setAttributeNS(null, 'width', this.width);
				svg.setAttributeNS(null, 'height', this.height);
				svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
				this.gameElement.appendChild(svg);

				this.board.render(svg);
				this.ball.render(svg, this.leftPaddle, this.rightPaddle);

				this.leftPaddle.render(svg);
				this.rightPaddle.render(svg);

				this.player1Score.render(svg, this.leftPaddle.score);
				this.player2Score.render(svg, this.rightPaddle.score);
			}
		}]);

		return Game;
	}();

	exports.default = Game;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

	var KEYS = exports.KEYS = {
	  a: 65, // player 1 up key
	  z: 90, // player 1 down key
	  up: 38, // player 2 up key
	  down: 40, // player 2 down key
	  spaceBar: 32, // we'll use this later...
	  n: 78,
	  left: 37,
	  right: 39,
	  m: 77,
	  b: 66
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Board = function () {
	  function Board(width, height) {
	    _classCallCheck(this, Board);

	    this.width = width;
	    this.height = height;
	  }

	  _createClass(Board, [{
	    key: 'render',
	    value: function render(svg) {
	      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
	      rect.setAttributeNS(null, 'x', 0);
	      rect.setAttributeNS(null, 'y', 0);
	      rect.setAttributeNS(null, 'width', this.width);
	      rect.setAttributeNS(null, 'height', this.height);
	      rect.setAttributeNS(null, 'fill', '#000000');

	      var line = document.createElementNS(_settings.SVG_NS, 'line');
	      line.setAttributeNS(null, 'stroke-dasharray', '20 15');
	      line.setAttributeNS(null, 'x1', this.width / 2);
	      line.setAttributeNS(null, 'y1', 0);
	      line.setAttributeNS(null, 'x2', this.width / 2);
	      line.setAttributeNS(null, 'y2', this.height);
	      line.setAttributeNS(null, 'stroke', 'white');
	      line.setAttributeNS(null, 'stroke-dasharray', '20 15');
	      line.setAttributeNS(null, 'stroke-width', '4');

	      svg.appendChild(rect);
	      svg.appendChild(line);
	    }
	  }]);

	  return Board;
	}();

	exports.default = Board;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Paddle = function () {
	  function Paddle(boardHeight, width, height, x, y, up, down) {
	    var _this = this;

	    _classCallCheck(this, Paddle);

	    this.boardHeight = boardHeight;
	    this.width = width;
	    this.height = height;
	    this.x = x;
	    this.y = y;
	    this.speed = 35;
	    this.score = 0;

	    document.addEventListener('keydown', function (event) {
	      switch (event.keyCode) {
	        case up:
	          _this.up();
	          break;
	        case down:
	          _this.down();
	          break;
	        case _settings.KEYS.m:
	          _this.change();
	          break;
	      }
	    });
	  }

	  _createClass(Paddle, [{
	    key: 'change',
	    value: function change() {
	      if (this.height === 56) {
	        this.height = 75;
	        this.speed = 5;
	        this.width = 8;
	      } else {
	        this.height = 56;
	        this.speed = 10;
	        this.width = 8;
	      }
	    }
	  }, {
	    key: 'up',
	    value: function up() {
	      this.y = Math.max(0, 0, this.y - this.speed);
	    }
	  }, {
	    key: 'down',
	    value: function down() {
	      this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
	    }
	  }, {
	    key: 'coordinates',
	    value: function coordinates(x, y, width, height) {
	      var leftX = x;
	      var rightX = x + width;
	      var topY = y;
	      var bottomY = y + height;
	      return [leftX, rightX, topY, bottomY];
	    }
	  }, {
	    key: 'render',
	    value: function render(svg) {
	      var paddle = document.createElementNS(_settings.SVG_NS, 'rect');
	      paddle.setAttributeNS(null, 'x', this.x);
	      paddle.setAttributeNS(null, 'y', this.y);
	      paddle.setAttributeNS(null, 'width', this.width);
	      paddle.setAttributeNS(null, 'height', this.height);
	      paddle.setAttributeNS(null, 'fill', 'yellow');

	      svg.appendChild(paddle);
	    }
	  }]);

	  return Paddle;
	}();

	exports.default = Paddle;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ball = function () {
	    function Ball(radius, boardWidth, boardHeight, direction) {
	        _classCallCheck(this, Ball);

	        this.radius = radius;
	        this.boardWidth = boardWidth;
	        this.boardHeight = boardHeight;
	        this.direction = direction;
	        this.ping1 = new Audio('public/sounds/bart-ping.wav');
	        this.ping2 = new Audio('public/sounds/homer-ping.wav');

	        this.reset();
	    }

	    _createClass(Ball, [{
	        key: 'wallCollision',
	        value: function wallCollision() {
	            var hitLeft = this.x - this.radius <= 0;
	            var hitRight = this.x + this.radius >= this.boardWidth;
	            var hitTop = this.y - this.radius <= 0;
	            var hitBottom = this.y + this.radius >= this.boardHeight;

	            if (hitLeft || hitRight) {
	                this.vx = -this.vx;
	            } else if (hitTop || hitBottom) {
	                this.vy = -this.vy;
	            }
	        }
	    }, {
	        key: 'paddleCollision',
	        value: function paddleCollision(player1, player2) {
	            if (this.vx > 0) {
	                var paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);

	                var _paddle = _slicedToArray(paddle, 4),
	                    leftX = _paddle[0],
	                    rightX = _paddle[1],
	                    topY = _paddle[2],
	                    bottomY = _paddle[3];

	                if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y >= topY && this.y <= bottomY) {
	                    this.vx = -this.vx;
	                    // this.ping1.play();
	                }
	            } else {
	                var _paddle2 = player1.coordinates(player1.x, player1.y, player1.width, player1.height);

	                var _paddle3 = _slicedToArray(_paddle2, 4),
	                    _leftX = _paddle3[0],
	                    _rightX = _paddle3[1],
	                    _topY = _paddle3[2],
	                    _bottomY = _paddle3[3];

	                if (this.x - this.radius <= _rightX && this.x - this.radius >= _leftX && this.y >= _topY && this.y <= _bottomY) {
	                    this.vx = -this.vx;
	                    // this.ping2.play();
	                }
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.x = this.boardWidth / 2;
	            this.y = this.boardHeight / 2;
	            this.vy = 0;

	            while (this.vy === 0) {
	                this.vy = Math.floor(Math.random() * 10 - 5);
	                this.vx = this.direction * (6 - Math.abs(this.vy));
	            }
	        }
	    }, {
	        key: 'goal',
	        value: function goal(player) {
	            player.score++;
	            this.reset();
	        }
	    }, {
	        key: 'render',
	        value: function render(svg, player1, player2) {
	            this.x += this.vx;
	            this.y += this.vy;

	            this.wallCollision();
	            this.paddleCollision(player1, player2);

	            var ball = document.createElementNS(_settings.SVG_NS, 'circle');
	            ball.setAttributeNS(null, 'cx', this.x);
	            ball.setAttributeNS(null, 'cy', this.y);
	            ball.setAttributeNS(null, 'r', this.radius);
	            ball.setAttributeNS(null, 'fill', 'none');
	            ball.setAttributeNS(null, 'stroke-width', '7');
	            ball.setAttributeNS(null, 'stroke', 'pink');
	            svg.appendChild(ball);

	            var rightGoal = this.x + this.radius >= this.boardWidth;
	            var leftGoal = this.x - this.radius <= 0;

	            if (rightGoal) {
	                this.goal(player1);
	                this.direction = 1;
	            } else if (leftGoal) {
	                this.goal(player2);
	                this.direction = -1;
	            }
	        }
	    }]);

	    return Ball;
	}();

	exports.default = Ball;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Score = function () {
	  function Score(x, y, size) {
	    _classCallCheck(this, Score);

	    this.x = x;
	    this.y = y;
	    this.size = size;
	    this.score = 0;
	  }

	  _createClass(Score, [{
	    key: 'render',
	    value: function render(svg, score) {
	      var text = document.createElementNS(_settings.SVG_NS, 'text');
	      text.setAttributeNS(null, 'x', this.x);
	      text.setAttributeNS(null, 'y', this.y);
	      text.setAttributeNS(null, 'font-size', this.size);
	      text.setAttributeNS(null, 'fill', 'yellow');
	      text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
	      text.textContent = score;

	      svg.appendChild(text);
	    }
	  }]);

	  return Score;
	}();
	//...


	exports.default = Score;

/***/ }
/******/ ]);