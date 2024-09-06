"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-size@1.1.0_@types+react@18.3.3_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-size@1.1.0_@types+react@18.3.3_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSize: () => (/* binding */ useSize)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n// packages/react/use-size/src/useSize.tsx\n\n\nfunction useSize(element) {\n  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);\n  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {\n    if (element) {\n      setSize({ width: element.offsetWidth, height: element.offsetHeight });\n      const resizeObserver = new ResizeObserver((entries) => {\n        if (!Array.isArray(entries)) {\n          return;\n        }\n        if (!entries.length) {\n          return;\n        }\n        const entry = entries[0];\n        let width;\n        let height;\n        if (\"borderBoxSize\" in entry) {\n          const borderSizeEntry = entry[\"borderBoxSize\"];\n          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;\n          width = borderSize[\"inlineSize\"];\n          height = borderSize[\"blockSize\"];\n        } else {\n          width = element.offsetWidth;\n          height = element.offsetHeight;\n        }\n        setSize({ width, height });\n      });\n      resizeObserver.observe(element, { box: \"border-box\" });\n      return () => resizeObserver.unobserve(element);\n    } else {\n      setSize(void 0);\n    }\n  }, [element]);\n  return size;\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1zaXplQDEuMS4wX0B0eXBlcytyZWFjdEAxOC4zLjNfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLXNpemUvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDK0I7QUFDcUM7QUFDcEU7QUFDQSwwQkFBMEIsMkNBQWM7QUFDeEMsRUFBRSxrRkFBZTtBQUNqQjtBQUNBLGdCQUFnQiwwREFBMEQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDLE9BQU87QUFDUCx3Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLXB3aC1ibG9nLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC11c2Utc2l6ZUAxLjEuMF9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1zaXplL2Rpc3QvaW5kZXgubWpzPzc3MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZXMvcmVhY3QvdXNlLXNpemUvc3JjL3VzZVNpemUudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdXNlLWxheW91dC1lZmZlY3RcIjtcbmZ1bmN0aW9uIHVzZVNpemUoZWxlbWVudCkge1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSh2b2lkIDApO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzZXRTaXplKHsgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgfSk7XG4gICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbMF07XG4gICAgICAgIGxldCB3aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodDtcbiAgICAgICAgaWYgKFwiYm9yZGVyQm94U2l6ZVwiIGluIGVudHJ5KSB7XG4gICAgICAgICAgY29uc3QgYm9yZGVyU2l6ZUVudHJ5ID0gZW50cnlbXCJib3JkZXJCb3hTaXplXCJdO1xuICAgICAgICAgIGNvbnN0IGJvcmRlclNpemUgPSBBcnJheS5pc0FycmF5KGJvcmRlclNpemVFbnRyeSkgPyBib3JkZXJTaXplRW50cnlbMF0gOiBib3JkZXJTaXplRW50cnk7XG4gICAgICAgICAgd2lkdGggPSBib3JkZXJTaXplW1wiaW5saW5lU2l6ZVwiXTtcbiAgICAgICAgICBoZWlnaHQgPSBib3JkZXJTaXplW1wiYmxvY2tTaXplXCJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBzZXRTaXplKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICAgIH0pO1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG4gICAgICByZXR1cm4gKCkgPT4gcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTaXplKHZvaWQgMCk7XG4gICAgfVxuICB9LCBbZWxlbWVudF0pO1xuICByZXR1cm4gc2l6ZTtcbn1cbmV4cG9ydCB7XG4gIHVzZVNpemVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs\n");

/***/ })

};
;