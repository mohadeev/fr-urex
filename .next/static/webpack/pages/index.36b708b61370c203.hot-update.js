"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/Home */ \"./components/home/Home.tsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar _this = undefined;\n\n\n\n\nvar HomePage = function(param) {\n    var mainData = param.mainData;\n    console.log(\"mainData\", mainData);\n    var data = mainData.length >= 1 ? mainData[0] : {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                    type: \"application/ld+json\",\n                    dangerouslySetInnerHTML: {\n                        __html: JSON.stringify({\n                            \"@context\": \"https://schema.org/\",\n                            \"@type\": \"Product\",\n                            name: data === null || data === void 0 ? void 0 : data.name,\n                            image: \"http://localhost:5000\" + \"/api/get/read/images/\" + (data === null || data === void 0 ? void 0 : data.images[0]),\n                            description: data === null || data === void 0 ? void 0 : data.overview,\n                            brand: process.env.SITENAME,\n                            sku: data === null || data === void 0 ? void 0 : data._id,\n                            offers: {\n                                \"@type\": \"AggregateOffer\",\n                                url: \"http://localhost:3000\" + \"/tours/\" + (data === null || data === void 0 ? void 0 : data._id),\n                                priceCurrency: \"EUR\",\n                                lowPrice: (data === null || data === void 0 ? void 0 : data.price) / 1.4,\n                                highPrice: data === null || data === void 0 ? void 0 : data.price,\n                                offerCount: \"23\"\n                            },\n                            aggregateRating: {\n                                \"@type\": \"AggregateRating\",\n                                ratingValue: \"5\",\n                                bestRating: \"5\",\n                                worstRating: \"1\",\n                                ratingCount: \"235\"\n                            }\n                        })\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\pages\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\pages\\\\index.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this),\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {\n                title: (data === null || data === void 0 ? void 0 : data.name) + \"|\" + \"Ur Excursion\" + \"|\" + \"Tours\",\n                description: data === null || data === void 0 ? void 0 : data.overview,\n                canonical: \"http://localhost:3000\" + \"/tours/\" + (data === null || data === void 0 ? void 0 : data._id),\n                openGraph: {\n                    url: \"https://www.url.ie/a\",\n                    title: data === null || data === void 0 ? void 0 : data.name,\n                    description: data === null || data === void 0 ? void 0 : data.name,\n                    images: [\n                        {\n                            url: \"http://localhost:5000\" + \"/api/get/read/images/\" + (data === null || data === void 0 ? void 0 : data.images[0]),\n                            width: 800,\n                            height: 600,\n                            alt: \"Og Image Alt\",\n                            type: \"image/jpeg\"\n                        },\n                        {\n                            url: \"http://localhost:5000\" + \"/api/get/read/images/\" + (data === null || data === void 0 ? void 0 : data.images[0]),\n                            width: 900,\n                            height: 800,\n                            alt: \"Og Image Alt Second\",\n                            type: \"image/jpeg\"\n                        },\n                        {\n                            url: \"http://localhost:5000\" + \"/api/get/read/images/\" + (data === null || data === void 0 ? void 0 : data.images[0])\n                        },\n                        {\n                            url: \"http://localhost:5000\" + \"/api/get/read/images/\" + (data === null || data === void 0 ? void 0 : data.images[0])\n                        }, \n                    ],\n                    site_name: \"http://localhost:3000\"\n                },\n                twitter: {\n                    handle: \"@handle\",\n                    site: \"@site\",\n                    cardType: \"summary_large_image\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                Tours: mainData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\pages\\\\index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            \";\"\n        ]\n    }, void 0, true);\n};\n_c = HomePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQzt5QkFDbEI7cUJBQ0Y7b0JBQ0QwQixTQUFTLEVBQUU3Qix1QkFBa0M7aUJBQzlDO2dCQUNEOEIsT0FBTyxFQUFFO29CQUNQQyxNQUFNLEVBQUUsU0FBUztvQkFDakJDLElBQUksRUFBRSxPQUFPO29CQUNiQyxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7Ozs7cUJBQ0Q7MEJBRUosOERBQUNoRCw2REFBSTtnQkFBQ2lELEtBQUssRUFBRS9DLFFBQVE7Ozs7O3FCQUFJO1lBQUEsR0FDM0I7O29CQUFHLENBQ0g7Q0FDSDtBQWpHS0QsS0FBQUEsUUFBUTs7QUFtR2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgYWxsVG91cnNGZXRjaCBmcm9tIFwiLi4vdXRpbHMvYWxsVG91cnNGZXRjaFwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2U6IE5leHRQYWdlID0gKHsgbWFpbkRhdGEgfTogYW55KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJtYWluRGF0YVwiLG1haW5EYXRhKTtcclxuICBjb25zdCBkYXRhID0gbWFpbkRhdGEubGVuZ3RoID49IDEgPyBtYWluRGF0YVswXSA6IHt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmcvXCIsXHJcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiUHJvZHVjdFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLX0VORF9VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9hcGkvZ2V0L3JlYWQvaW1hZ2VzL1wiICtcclxuICAgICAgICAgICAgICAgICAgZGF0YT8uaW1hZ2VzWzBdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGE/Lm92ZXJ2aWV3LFxyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHByb2Nlc3MuZW52LlNJVEVOQU1FLFxyXG4gICAgICAgICAgICAgICAgc2t1OiBkYXRhPy5faWQsXHJcbiAgICAgICAgICAgICAgICBvZmZlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFnZ3JlZ2F0ZU9mZmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DbElFTlRfVVJMICsgXCIvdG91cnMvXCIgKyBkYXRhPy5faWQsXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlQ3VycmVuY3k6IFwiRVVSXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxvd1ByaWNlOiBkYXRhPy5wcmljZSAvIDEuNCxcclxuICAgICAgICAgICAgICAgICAgaGlnaFByaWNlOiBkYXRhPy5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgb2ZmZXJDb3VudDogXCIyM1wiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZVJhdGluZzoge1xyXG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiQWdncmVnYXRlUmF0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIHJhdGluZ1ZhbHVlOiBcIjVcIixcclxuICAgICAgICAgICAgICAgICAgYmVzdFJhdGluZzogXCI1XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdvcnN0UmF0aW5nOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgcmF0aW5nQ291bnQ6IFwiMjM1XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhICYmIChcclxuICAgICAgICA8TmV4dFNlb1xyXG4gICAgICAgICAgdGl0bGU9e2RhdGE/Lm5hbWUgKyBcInxcIiArIFwiVXIgRXhjdXJzaW9uXCIgKyBcInxcIiArIFwiVG91cnNcIn1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhPy5vdmVydmlld31cclxuICAgICAgICAgIGNhbm9uaWNhbD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ2xJRU5UX1VSTCArIFwiL3RvdXJzL1wiICsgZGF0YT8uX2lkfVxyXG4gICAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy51cmwuaWUvYVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGE/Lm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS19FTkRfVVJMICtcclxuICAgICAgICAgICAgICAgICAgXCIvYXBpL2dldC9yZWFkL2ltYWdlcy9cIiArXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE/LmltYWdlc1swXSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgIGFsdDogXCJPZyBJbWFnZSBBbHRcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLX0VORF9VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9hcGkvZ2V0L3JlYWQvaW1hZ2VzL1wiICtcclxuICAgICAgICAgICAgICAgICAgZGF0YT8uaW1hZ2VzWzBdLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODAwLFxyXG4gICAgICAgICAgICAgICAgYWx0OiBcIk9nIEltYWdlIEFsdCBTZWNvbmRcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLX0VORF9VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9hcGkvZ2V0L3JlYWQvaW1hZ2VzL1wiICtcclxuICAgICAgICAgICAgICAgICAgZGF0YT8uaW1hZ2VzWzBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLX0VORF9VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9hcGkvZ2V0L3JlYWQvaW1hZ2VzL1wiICtcclxuICAgICAgICAgICAgICAgICAgZGF0YT8uaW1hZ2VzWzBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNpdGVfbmFtZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ2xJRU5UX1VSTCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICAgIGhhbmRsZTogXCJAaGFuZGxlXCIsXHJcbiAgICAgICAgICAgIHNpdGU6IFwiQHNpdGVcIixcclxuICAgICAgICAgICAgY2FyZFR5cGU6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8SG9tZSBUb3Vycz17bWFpbkRhdGF9IC8+O1xyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBhd2FpdCBhbGxUb3Vyc0ZldGNoKCkudGhlbigoZGF0YVJlczogYW55KSA9PiB7XHJcbiAgICBpZiAoZGF0YVJlcyAmJiBkYXRhUmVzLnJlc3BvbnNlRGF0YSkge1xyXG4gICAgICBkYXRhID0gZGF0YVJlcy5yZXNwb25zZURhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEubGVuZ3RoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YSB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTmV4dFNlbyIsIkhvbWUiLCJIb21lUGFnZSIsIm1haW5EYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJsZW5ndGgiLCJzY3JpcHQiLCJ0eXBlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImltYWdlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tfRU5EX1VSTCIsImltYWdlcyIsImRlc2NyaXB0aW9uIiwib3ZlcnZpZXciLCJicmFuZCIsIlNJVEVOQU1FIiwic2t1IiwiX2lkIiwib2ZmZXJzIiwidXJsIiwiTkVYVF9QVUJMSUNfQ2xJRU5UX1VSTCIsInByaWNlQ3VycmVuY3kiLCJsb3dQcmljZSIsInByaWNlIiwiaGlnaFByaWNlIiwib2ZmZXJDb3VudCIsImFnZ3JlZ2F0ZVJhdGluZyIsInJhdGluZ1ZhbHVlIiwiYmVzdFJhdGluZyIsIndvcnN0UmF0aW5nIiwicmF0aW5nQ291bnQiLCJ0aXRsZSIsImNhbm9uaWNhbCIsIm9wZW5HcmFwaCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic2l0ZV9uYW1lIiwidHdpdHRlciIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsIlRvdXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});