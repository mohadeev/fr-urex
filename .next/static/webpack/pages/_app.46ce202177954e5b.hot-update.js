"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./layout/header/SideMenu.tsx":
/*!************************************!*\
  !*** ./layout/header/SideMenu.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/layout/header/header-compnents/side-menu.module.css */ \"./styles/layout/header/header-compnents/side-menu.module.css\");\n/* harmony import */ var _styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_style_slice_menu_SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/style-slice/menu/SideMenu */ \"./redux/style-slice/menu/SideMenu.ts\");\n/* harmony import */ var _react_icons_all_files_io5_IoCloseCircleOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-icons/all-files/io5/IoCloseCircleOutline */ \"./node_modules/@react-icons/all-files/io5/IoCloseCircleOutline.js\");\n/* harmony import */ var _header_components_SearchInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-components/SearchInput */ \"./layout/header/header-components/SearchInput.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modals/HeaderText */ \"./components/modals/HeaderText.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SideMenu = function() {\n    var _this1 = _this;\n    _s();\n    var Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var UserIsSignedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.UserSignIn.UserIsSignedIn;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var handelToggleMenu = function() {\n        dispatch((0,_redux_style_slice_menu_SideMenu__WEBPACK_IMPORTED_MODULE_3__.ToggleMenu)());\n    };\n    var HandelClick = function(link) {\n        Router.push(link);\n        handelToggleMenu();\n    };\n    var dropDownItems = [\n        {\n            name: \"Tours\",\n            link: \"/tours\"\n        },\n        {\n            name: \"Excursions\",\n            link: \"/excursions\"\n        },\n        {\n            name: \"Destinations\",\n            link: \"/destinations\"\n        },\n        {\n            name: \"Contact\",\n            link: \"/contact\"\n        },\n        {\n            name: \"Log-in\"\n        },\n        {\n            name: \"Sing-up\"\n        },\n        {\n            name: \"History\"\n        },\n        {\n            name: \"Setting\"\n        },\n        {\n            name: \" Terms & Conditions\",\n            link: \"terms-and-onditions\"\n        },\n        {\n            name: \" Privacy Policy\",\n            link: \"privacy-policy\"\n        },\n        {\n            name: \"Cookies\",\n            link: \"cookies\"\n        }, \n    ];\n    var first = dropDownItems.slice(0, 4);\n    var second = dropDownItems.slice(5, 8);\n    var last = dropDownItems.slice(8, 11);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().main_containet),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu_container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().container_search),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_components_SearchInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().container_secoond),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal_container),\n                                    children: first.map(function(param) {\n                                        var name = param.name, link = param.link;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                link && HandelClick(link);\n                                            },\n                                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().link_container),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__.HeaderText, {\n                                                Text: name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal_container),\n                                    children: second.map(function(param) {\n                                        var name = param.name, link = param.link;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                link && HandelClick(link);\n                                            },\n                                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().link_container),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__.HeaderText, {\n                                                Text: name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal_container),\n                                    children: last.map(function(param) {\n                                        var name = param.name, link = param.link;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                link && HandelClick(link);\n                                            },\n                                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().link_container),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__.HeaderText, {\n                                                Text: name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handelToggleMenu,\n                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().rest_container),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().meun),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_io5_IoCloseCircleOutline__WEBPACK_IMPORTED_MODULE_8__.IoCloseCircleOutline, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(SideMenu, \"rMH9DKIGomge9dbnnEsnMfx0UMA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\nvar _c;\n$RefreshReg$(_c, \"SideMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxRQUFROztRQUNHRixrREFBUztRQUNESixvREFBVztRQUdqQkQsb0RBQVc7OztBQUx4Qk8sS0FBQUEsUUFBUTtBQThGZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9oZWFkZXIvU2lkZU1lbnUudHN4PzViMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9sYXlvdXQvaGVhZGVyL2hlYWRlci1jb21wbmVudHMvc2lkZS1tZW51Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE15QWNjb3VudCBmcm9tIFwiLi9oZWFkZXItY29tcG9uZW50cy9NeUFjY291bnRcIjtcclxuaW1wb3J0IEJvb2tpbmdzIGZyb20gXCIuL2hlYWRlci1jb21wb25lbnRzL0Jvb2tpbmdzXCI7XHJcbmltcG9ydCBXaXNoTGlzdCBmcm9tIFwiLi9oZWFkZXItY29tcG9uZW50cy9XaXNoTGlzdFwiO1xyXG5pbXBvcnQgTGFuZ0FuZEN1cnJlbmN5IGZyb20gXCIuL2hlYWRlci1jb21wb25lbnRzL0xhbmdBbmRDdXJyZW5jeVwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeSwgTGFuZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFscy9MYW5nQ3VycmVuY3lcIjtcclxuaW1wb3J0IFNob3BwaW5nQ2FydCBmcm9tIFwiLi9oZWFkZXItY29tcG9uZW50cy9TaG9wcGluZ0NhcnRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFRvZ2dsZU1lbnUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc3R5bGUtc2xpY2UvbWVudS9TaWRlTWVudVwiO1xyXG5pbXBvcnQgeyBJb0Nsb3NlQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJAcmVhY3QtaWNvbnMvYWxsLWZpbGVzL2lvNS9Jb0Nsb3NlQ2lyY2xlT3V0bGluZVwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4vaGVhZGVyLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IHsgUGFyYWdyYXBoc1AgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvTm9ybWFsVGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSGVhZGVyVGV4dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFscy9IZWFkZXJUZXh0XCI7XHJcbmNvbnN0IFNpZGVNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFVzZXJJc1NpZ25lZEluID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuVXNlclNpZ25Jbi5Vc2VySXNTaWduZWRJblxyXG4gICk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGhhbmRlbFRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChUb2dnbGVNZW51KCkpO1xyXG4gIH07XHJcbiAgY29uc3QgSGFuZGVsQ2xpY2sgPSAobGluazogYW55KSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChsaW5rKTtcclxuICAgIGhhbmRlbFRvZ2dsZU1lbnUoKTtcclxuICB9O1xyXG4gIGNvbnN0IGRyb3BEb3duSXRlbXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiVG91cnNcIiwgbGluazogXCIvdG91cnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV4Y3Vyc2lvbnNcIiwgbGluazogXCIvZXhjdXJzaW9uc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVzdGluYXRpb25zXCIsIGxpbms6IFwiL2Rlc3RpbmF0aW9uc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29udGFjdFwiLCBsaW5rOiBcIi9jb250YWN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJMb2ctaW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbmctdXBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhpc3RvcnlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNldHRpbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIiBUZXJtcyAmIENvbmRpdGlvbnNcIiwgbGluazogXCJ0ZXJtcy1hbmQtb25kaXRpb25zXCIgfSxcclxuICAgIHsgbmFtZTogXCIgUHJpdmFjeSBQb2xpY3lcIiwgbGluazogXCJwcml2YWN5LXBvbGljeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29va2llc1wiLCBsaW5rOiBcImNvb2tpZXNcIiB9LFxyXG4gIF07XHJcbiAgY29uc3QgZmlyc3QgPSBkcm9wRG93bkl0ZW1zLnNsaWNlKDAsIDQpO1xyXG4gIGNvbnN0IHNlY29uZCA9IGRyb3BEb3duSXRlbXMuc2xpY2UoNSwgOCk7XHJcbiAgY29uc3QgbGFzdCA9IGRyb3BEb3duSXRlbXMuc2xpY2UoOCwgMTEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1haW5fY29udGFpbmV0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubWVudV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcl9zZWFyY2h9PlxyXG4gICAgICAgICAgICA8U2VhcmNoSW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcl9zZWNvb25kfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge2ZpcnN0Lm1hcCgoeyBuYW1lLCBsaW5rIH06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayAmJiBIYW5kZWxDbGljayhsaW5rKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZS5saW5rX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQgVGV4dD17bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tb2RhbF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtzZWNvbmQubWFwKCh7IG5hbWUsIGxpbmsgfTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rICYmIEhhbmRlbENsaWNrKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlLmxpbmtfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIFRleHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dE5hbWU9e1widGV4dF9mbGV4X3N0YXJ0X25vcm1hbFwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge2xhc3QubWFwKCh7IG5hbWUsIGxpbmsgfTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rICYmIEhhbmRlbENsaWNrKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlLmxpbmtfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIFRleHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dE5hbWU9e1widGV4dF9mbGV4X3N0YXJ0X25vcm1hbFwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgb25DbGljaz17aGFuZGVsVG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtTdHlsZS5yZXN0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlLm1ldW59PlxyXG4gICAgICAgICAgICA8SW9DbG9zZUNpcmNsZU91dGxpbmUgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlRvZ2dsZU1lbnUiLCJJb0Nsb3NlQ2lyY2xlT3V0bGluZSIsIlNlYXJjaElucHV0IiwidXNlUm91dGVyIiwiSGVhZGVyVGV4dCIsIlNpZGVNZW51IiwiUm91dGVyIiwiVXNlcklzU2lnbmVkSW4iLCJzdGF0ZSIsIlVzZXJTaWduSW4iLCJkaXNwYXRjaCIsImhhbmRlbFRvZ2dsZU1lbnUiLCJIYW5kZWxDbGljayIsImxpbmsiLCJwdXNoIiwiZHJvcERvd25JdGVtcyIsIm5hbWUiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwibGFzdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW5fY29udGFpbmV0IiwibWVudV9jb250YWluZXIiLCJjb250YWluZXJfc2VhcmNoIiwiY29udGFpbmVyX3NlY29vbmQiLCJtb2RhbF9jb250YWluZXIiLCJtYXAiLCJvbkNsaWNrIiwibGlua19jb250YWluZXIiLCJUZXh0IiwicmVzdF9jb250YWluZXIiLCJzcGFuIiwibWV1biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/header/SideMenu.tsx\n"));

/***/ })

});