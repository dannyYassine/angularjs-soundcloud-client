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
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ({

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(137);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(139)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/less-loader/dist/cjs.js!./main.less", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/less-loader/dist/cjs.js!./main.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(138)(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n.full-height {\n  min-height: 100vh;\n}\n.main-layout {\n  margin: 0 auto;\n  padding-top: 28px;\n}\n.main-content-layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 80%;\n}\n@keyframes fade-in-bottom-anim {\n  from {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n.fade-in-bottom {\n  animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n  -moz-animation-timing-function: ease-out;\n  -o-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  animation-name: fade-in-bottom-anim;\n}\n@keyframes fade-in-scale-bottom-anim {\n  from {\n    opacity: 0;\n    transform: translateY(50px) scale3d(0.9, 0.9, 1);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px) scale3d(1, 1, 1);\n  }\n}\n.fade-in-scale-bottom {\n  animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n  -moz-animation-timing-function: ease-out;\n  -o-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  animation-name: fade-in-scale-bottom-anim;\n}\n@keyframes hover-position-anim {\n  from {\n    transform: translateY(0px);\n  }\n  to {\n    transform: translateY(-2px);\n  }\n}\n@keyframes hover-reverse-position-anim {\n  from {\n    transform: translateY(-2px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n.hover-position {\n  animation-fill-mode: both;\n  animation-duration: 0.3s;\n  animation-name: hover-reverse-position-anim;\n}\n.hover-position:hover {\n  animation-fill-mode: both;\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n  animation-name: hover-position-anim;\n}\n@keyframes hover-position-shadow-anim {\n  from {\n    box-shadow: 0px 0px 0px transparent;\n    transform: translateY(0px) scale3d(1, 1, 1);\n  }\n  to {\n    box-shadow: 0px 3px 10px lightGrey;\n    transform: translateY(-4px) scale3d(1.025, 1.025, 1);\n  }\n}\n@keyframes hover-reverse-position-shadow-anim {\n  from {\n    box-shadow: 0px 3px 10px lightGrey;\n    transform: translateY(-4px) scale3d(1.025, 1.025, 1);\n  }\n  to {\n    box-shadow: 0px 0px 0px transparent;\n    transform: translateY(0px) scale3d(1, 1, 1);\n  }\n}\n.hover-position-shadow {\n  box-shadow: 0px 0px 0px transparent;\n  transform: translateY(0px) scale3d(1, 1, 1);\n  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;\n}\n.hover-position-shadow:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);\n  transform: translateY(-3px) scale3d(1.01, 1.01, 1);\n}\n.hover-shadow {\n  box-shadow: 0px 0px 0px transparent;\n  transition: box-shadow 0.25s ease-in-out;\n}\n.hover-shadow:hover {\n  box-shadow: 0px 3px 10px lightGrey;\n}\n.highlight {\n  opacity: 0.70;\n  transition: opacity 0.66s ease;\n}\n.highlight:active {\n  opacity: 1.0;\n  color: #552500;\n}\n.highlight:hover {\n  opacity: 1.0;\n}\n.launch-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 11;\n  height: 100vh;\n  width: 100%;\n  background: url(\"../public/assets/launch-image-image.png\") center no-repeat fixed;\n  -webkit-background-size: 100px;\n  -moz-background-size: 100px;\n  -o-background-size: 100px;\n  background-size: 100px;\n}\n.hide-splash {\n  display: none;\n}\n@keyframes fade-away-anim {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fade-away {\n  animation-duration: 0.35s;\n  -webkit-animation-timing-function: ease-out;\n  -moz-animation-timing-function: ease-out;\n  -o-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  animation-name: fade-away-anim;\n}\nhtml,\nbody {\n  background: #262728;\n  height: 100%;\n  margin: 0;\n}\n.hidden {\n  opacity: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\np,\ninput[type=text] {\n  font-family: \"Avenir Next\";\n}\n.corner-1 {\n  border-radius: 1px;\n}\n.corner-2 {\n  border-radius: 2px;\n}\n.corner-3 {\n  border-radius: 3px;\n}\n.corner-4 {\n  border-radius: 4px;\n}\n.corner-5 {\n  border-radius: 5px;\n}\n.img-border {\n  border: 5px hotpink;\n}\n.soundcloud-blood-orange {\n  color: #ff3300;\n}\n.soundcloud-orange {\n  color: #FF5400;\n}\n.spinner {\n  width: 10px;\n  height: 10px;\n  background: #823c00;\n  border-radius: 50%;\n  margin: 100px auto;\n  animation: ripple 1s ease infinite;\n}\n@keyframes ripple {\n  0% {\n    box-shadow: 0 0 0 1px #ff3300;\n  }\n  50% {\n    border-top-color: #ff3300;\n  }\n  100% {\n    box-shadow: 0 0 0 100px transparent;\n  }\n}\n@keyframes sm-spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sm-spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-top-color: #333;\n  animation: sm-spinner 0.6s linear infinite;\n}\n.user-detail .home-header {\n  height: 225px;\n}\n.user-detail .title-container p {\n  color: #7F2A00;\n}\n.info-stats {\n  background-color: #1D1E1F;\n  border: 1px black;\n  width: 220px;\n  float: left;\n  margin: 0 10px 40px 10px;\n}\n.info-stats h5 {\n  text-align: center;\n}\n.info-stats p {\n  color: #ff3300;\n}\n.header-nav {\n  display: block;\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  background-color: #262728;\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n.header-nav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.header-nav li {\n  float: left;\n}\n.header-nav li a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 12px;\n}\n/* Change the link color to #111 (black) on hover */\n.header-nav li a:hover {\n  background-color: #7F2A00;\n}\n.nav-btn-active {\n  background-color: #FF5400;\n}\n.header-nav .right-btn {\n  float: right;\n}\n.right-btn-img {\n  display: block;\n  width: 18px;\n  margin: 0 auto;\n}\n@media (max-width: 400px) {\n  .header-nav li a {\n    padding: 14px 5px;\n    text-decoration: none;\n    font-size: 12px;\n  }\n}\n.track-list-container {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 40px;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  max-width: 1000px;\n}\n.track-card {\n  background-color: #1D1E1F;\n  border: 1px black;\n  width: 220px;\n  height: 380px;\n  float: left;\n  margin: 0 10px 40px 10px;\n  border-radius: 2px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);\n}\n.track-card .card-img-container {\n  background: url(\"../public/assets/soundcloud_logo.png\") no-repeat center;\n  display: block;\n  width: 220px;\n  height: 220px;\n}\n.track-card .card-img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.track-card h4 {\n  text-decoration: none;\n}\n.track-info {\n  padding: 10px;\n}\n.track-info p {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.track-info p#title {\n  color: #FF5400;\n  height: 20px;\n  text-decoration: underline;\n}\n.track-info p#sub-title {\n  color: #BFC0C1;\n  height: 65px;\n  overflow: hidden;\n}\n.card-img {\n  display: block;\n}\n.border-top-line {\n  margin: 0 10px;\n  margin-bottom: 20px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.2);\n}\n.play-btn {\n  color: #FF5400;\n}\n.card-controls p {\n  float: left;\n  margin-right: 10px;\n}\n.card-controls p.duration {\n  color: #7F8081;\n}\n.black-line {\n  border-top: 10px solid rgba(0, 0, 0, 0.5);\n}\n.wave-list-container {\n  padding-top: 40px;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  max-width: 1000px;\n}\n.wave-list-card {\n  border: 1px black;\n  width: 100%;\n  height: 380px;\n  margin: 20px auto;\n  border-radius: 2px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);\n  padding: 20px;\n}\n.wave-container {\n  background: #1D1E1F;\n  max-width: 1000px;\n  height: 250px;\n  margin: 0 auto;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);\n  border-radius: 2px;\n}\n.wave-details {\n  margin-left: 40px;\n  margin-right: 20px;\n  float: left;\n}\n.wave-details h5 {\n  color: #BFC0C1;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 20px;\n  overflow: hidden;\n}\n.wave {\n  background-color: #1D1E1F;\n  max-width: 90%;\n  height: 140px;\n  margin: 0 auto;\n}\n.player {\n  display: block;\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  height: 75px;\n  background: #262728;\n  border-top: 4px solid #FF5400;\n  bottom: -75px;\n  transition: bottom 0.25s ease-out;\n}\n.track-progress-bar {\n  width: 100%;\n  height: 8px;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#progress {\n  width: 1px;\n  height: 8px;\n  background-color: #ff3300;\n}\n.player h5 {\n  margin: 10px 0 0 0;\n  padding: 0;\n  color: #BFC0C1;\n  height: 20px;\n  overflow: hidden;\n}\n.player p {\n  margin: 5px 5px;\n  float: left;\n  color: #7F8081;\n}\n.player-duration {\n  width: 100px;\n  text-align: center;\n}\n.player-animate-in {\n  bottom: 0;\n}\n.player-animate-out {\n  bottom: -75px;\n}\n#search_input {\n  background-color: transparent;\n  width: 100%;\n  display: inline-block;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #FF5400;\n  outline: none;\n  font-weight: 200;\n  font-size: 30px;\n  padding: 0;\n  margin: 0;\n  vertical-align: top;\n}\n.home {\n  background: #262728;\n}\n.home-header {\n  background: #1D1E1F;\n  height: 225px;\n  position: relative;\n}\n.home-header .title-container {\n  position: absolute;\n  top: 45%;\n}\n.home-header .title-container h5 {\n  margin: 0;\n  margin-bottom: 0;\n}\n.home-header h2,\n.home-header h5 {\n  color: #d6d6d6;\n  vertical-align: middle;\n  height: 100%;\n  margin-bottom: 0px;\n}\n.home-header h5 {\n  font-family: \"Avenir Next\";\n  font-weight: 400;\n  font-size: 13px;\n  margin-top: 0px;\n}\n.home-header h2 {\n  font-family: \"Avenir Next\";\n  font-weight: 200;\n  font-size: 30px;\n  margin-top: 0px;\n}\n.home-header p {\n  margin: 0;\n  padding: 0;\n}\n.shot-detail {\n  background: white;\n}\n.shot-detail-img {\n  border-radius: 5px;\n  margin: 0 auto;\n  width: 100%;\n}\n.shot-detail-header-container {\n  margin: 10px;\n  height: 50px;\n}\n.shot-detail-profile {\n  border-radius: 50px;\n  width: auto;\n  height: 100%;\n  border: 5px ghostwhite;\n  float: right;\n}\n.shot-detail h1 {\n  display: inline;\n  line-height: 100%;\n  text-align: center;\n}\n.shot-detail-img-comment {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n}\n.footer {\n  height: 200px;\n  width: 100%;\n  background: #1D1E1F;\n  position: relative;\n  margin-top: 60px;\n}\n.footer h4 {\n  color: ghostwhite;\n}\n.footer-layout {\n  position: absolute;\n  vertical-align: middle;\n  margin-left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n", ""]);

// exports


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(140);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 140:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=styles.js.map