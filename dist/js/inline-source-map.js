/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


var createLink = __webpack_require__(2);

var heading = (0,_heading_js__WEBPACK_IMPORTED_MODULE_0__.default)();
document.body.append(heading);
var link = createLink();
document.body.append(link);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var element = document.createElement('h2');
  element.textContent = 'Hello World';
  element.addEventListener('click', function () {
    alert('Hello webpack');
  });
  console.log1();
  return element;
});

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = function () {
  var element = document.createElement('a');
  element.textContent = 'click me';
  return element;
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8wMS8uL3NyYy9oZWFkaW5nLmpzIiwid2VicGFjazovLzAxLy4vc3JjL2xpbmsuanMiLCJ3ZWJwYWNrOi8vMDEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMDEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzAxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMDEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8wMS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiY3JlYXRlTGluayIsInJlcXVpcmUiLCJoZWFkaW5nIiwiY3JlYXRlSGVhZGluZyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZCIsImxpbmsiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwiY29uc29sZSIsImxvZzEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBLElBQU1BLFVBQVUsR0FBRUMsbUJBQU8sQ0FBQyxDQUFELENBQXpCOztBQUVBLElBQU1DLE9BQU8sR0FBR0Msb0RBQWEsRUFBN0I7QUFDQUMsUUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWQsQ0FBcUJKLE9BQXJCO0FBRUEsSUFBTUssSUFBSSxHQUFDUCxVQUFVLEVBQXJCO0FBQ0FJLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFkLENBQXFCQyxJQUFyQixFOzs7Ozs7Ozs7OztBQ1BBLGlFQUFlLFlBQUk7QUFDakIsTUFBTUMsT0FBTyxHQUFDSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUVBRCxTQUFPLENBQUNFLFdBQVIsR0FBb0IsYUFBcEI7QUFDQUYsU0FBTyxDQUFDRyxnQkFBUixDQUF5QixPQUF6QixFQUFpQyxZQUFJO0FBQ25DQyxTQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0QsR0FGRDtBQUlBQyxTQUFPLENBQUNDLElBQVI7QUFDQSxTQUFPTixPQUFQO0FBQ0QsQ0FWRCxFOzs7Ozs7QUNBQU8sTUFBTSxDQUFDQyxPQUFQLEdBQWUsWUFBSTtBQUNqQixNQUFNUixPQUFPLEdBQUNKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixHQUF2QixDQUFkO0FBQ0FELFNBQU8sQ0FBQ0UsV0FBUixHQUFvQixVQUFwQjtBQUNBLFNBQU9GLE9BQVA7QUFDRCxDQUpELEM7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImpzL2lubGluZS1zb3VyY2UtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUhlYWRpbmcgZnJvbSAnLi9oZWFkaW5nLmpzJ1xyXG5jb25zdCBjcmVhdGVMaW5rID1yZXF1aXJlKCcuL2xpbmsuanMnKVxyXG5cclxuY29uc3QgaGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcoKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkaW5nKVxyXG5cclxuY29uc3QgbGluaz1jcmVhdGVMaW5rKClcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQobGluaykiLCJleHBvcnQgZGVmYXVsdCAoKT0+e1xyXG4gIGNvbnN0IGVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG5cclxuICBlbGVtZW50LnRleHRDb250ZW50PSdIZWxsbyBXb3JsZCdcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgYWxlcnQoJ0hlbGxvIHdlYnBhY2snKVxyXG4gIH0pXHJcblxyXG4gIGNvbnNvbGUubG9nMSgpXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufSIsIm1vZHVsZS5leHBvcnRzPSgpPT57XHJcbiAgY29uc3QgZWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICBlbGVtZW50LnRleHRDb250ZW50PSdjbGljayBtZSdcclxuICByZXR1cm4gZWxlbWVudFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==