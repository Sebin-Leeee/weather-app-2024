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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Search_weatherSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search/weatherSearch */ \"./src/components/Search/weatherSearch.tsx\");\n/* harmony import */ var _components_Display_weatherDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Display/weatherDisplay */ \"./src/components/Display/weatherDisplay.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [showInstructions, setShowInstructions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [cityName, setCityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchWeatherData = async (location)=>{\n        try {\n            const geocodingResponse = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(location, \"&limit=1&appid=b6e00456ca5c42947006764fc8f28b79\"));\n            if (geocodingResponse.data.length === 0) {\n                return;\n            }\n            const { lat, lon, name } = geocodingResponse.data[0];\n            setCityName(name);\n            const weatherResponse = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=b6e00456ca5c42947006764fc8f28b79\"));\n            const forecastResponse = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://api.openweathermap.org/data/2.5/forecast?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=b6e00456ca5c42947006764fc8f28b79\"));\n            const currentWeather = {\n                lastUpdated: new Date(weatherResponse.data.dt * 1000).toLocaleDateString(\"en-US\", {\n                    year: \"numeric\",\n                    month: \"long\",\n                    day: \"numeric\"\n                }),\n                temperature: weatherResponse.data.main.temp - 273.15,\n                weatherMain: weatherResponse.data.weather[0].main,\n                windSpeed: weatherResponse.data.wind.speed\n            };\n            const forecast = forecastResponse.data.list.reduce((acc, day)=>{\n                const date = day.dt_txt.split(\" \")[0];\n                if (!acc[date] && Object.keys(acc).length < 5) {\n                    acc[date] = {\n                        temp: day.main.temp - 273.15,\n                        weatherMain: day.weather[0].main,\n                        weatherDescription: day.weather[0].description,\n                        windSpeed: day.wind.speed,\n                        dtTxt: day.dt_txt\n                    };\n                }\n                return acc;\n            }, {});\n            const forecastArray = Object.values(forecast);\n            setWeatherData({\n                current: currentWeather,\n                forecast: forecastArray\n            });\n            setShowInstructions(false);\n        } catch (error) {\n            console.error(\"Error\", error);\n        }\n    };\n    const handleImageClick = ()=>{\n        setShowInstructions(true);\n        setWeatherData(null);\n        setCityName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_weatherSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onSubmit: fetchWeatherData\n                    }, void 0, false, {\n                        fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    showInstructions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().instrunction),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/Logo.png\",\n                                alt: \"Logo\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().image)\n                            }, void 0, false, {\n                                fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().bold),\n                                        children: \"Welcome to WEATHERMATE!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \"Enter a city to get weather information.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"You can get the city's current weather and 5-day forecast!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().display),\n                        children: weatherData && !showInstructions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Display_weatherDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            currentWeather: weatherData.current,\n                            forecast: weatherData.forecast,\n                            cityName: cityName\n                        }, void 0, false, {\n                            fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: \"\\xa9 2024 Sebin Lee\"\n            }, void 0, false, {\n                fileName: \"/Users/sebin/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"tTCGbOVDojYkm5LL/A3kgmicIIA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNxQztBQUNHO0FBQ25CO0FBQ047QUFFekMsTUFBTU8sT0FBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFNO0lBQ3BELE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUVqRCxNQUFNYSxtQkFBbUIsT0FBT0M7UUFDOUIsSUFBSTtZQUNGLE1BQU1DLG9CQUFvQixNQUFNZCxpREFBUyxDQUN2QyxtREFBNEQsT0FBVGEsVUFBUztZQUc5RCxJQUFJQyxrQkFBa0JFLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7Z0JBQ3ZDO1lBQ0Y7WUFFQSxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsR0FBR04sa0JBQWtCRSxJQUFJLENBQUMsRUFBRTtZQUNwREwsWUFBWVM7WUFFWixNQUFNQyxrQkFBa0IsTUFBTXJCLGlEQUFTLENBQ3JDLHVEQUFrRW1CLE9BQVhELEtBQUksU0FBVyxPQUFKQyxLQUFJO1lBR3hFLE1BQU1HLG1CQUFtQixNQUFNdEIsaURBQVMsQ0FDdEMsd0RBQW1FbUIsT0FBWEQsS0FBSSxTQUFXLE9BQUpDLEtBQUk7WUFHekUsTUFBTUksaUJBQWlCO2dCQUNyQkMsYUFBYSxJQUFJQyxLQUNmSixnQkFBZ0JMLElBQUksQ0FBQ1UsRUFBRSxHQUFHLE1BQzFCQyxrQkFBa0IsQ0FBQyxTQUFTO29CQUM1QkMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsS0FBSztnQkFDUDtnQkFDQUMsYUFBYVYsZ0JBQWdCTCxJQUFJLENBQUNnQixJQUFJLENBQUNDLElBQUksR0FBRztnQkFDOUNDLGFBQWFiLGdCQUFnQkwsSUFBSSxDQUFDbUIsT0FBTyxDQUFDLEVBQUUsQ0FBQ0gsSUFBSTtnQkFDakRJLFdBQVdmLGdCQUFnQkwsSUFBSSxDQUFDcUIsSUFBSSxDQUFDQyxLQUFLO1lBQzVDO1lBRUEsTUFBTUMsV0FBV2pCLGlCQUFpQk4sSUFBSSxDQUFDd0IsSUFBSSxDQUFDQyxNQUFNLENBQ2hELENBQUNDLEtBQVVaO2dCQUNULE1BQU1hLE9BQU9iLElBQUljLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsS0FBSyxJQUFJRyxPQUFPQyxJQUFJLENBQUNMLEtBQUt6QixNQUFNLEdBQUcsR0FBRztvQkFDN0N5QixHQUFHLENBQUNDLEtBQUssR0FBRzt3QkFDVlYsTUFBTUgsSUFBSUUsSUFBSSxDQUFDQyxJQUFJLEdBQUc7d0JBQ3RCQyxhQUFhSixJQUFJSyxPQUFPLENBQUMsRUFBRSxDQUFDSCxJQUFJO3dCQUNoQ2dCLG9CQUFvQmxCLElBQUlLLE9BQU8sQ0FBQyxFQUFFLENBQUNjLFdBQVc7d0JBQzlDYixXQUFXTixJQUFJTyxJQUFJLENBQUNDLEtBQUs7d0JBQ3pCWSxPQUFPcEIsSUFBSWMsTUFBTTtvQkFDbkI7Z0JBQ0Y7Z0JBQ0EsT0FBT0Y7WUFDVCxHQUNBLENBQUM7WUFHSCxNQUFNUyxnQkFBZ0JMLE9BQU9NLE1BQU0sQ0FBQ2I7WUFFcEM5QixlQUFlO2dCQUNiNEMsU0FBUzlCO2dCQUNUZ0IsVUFBVVk7WUFDWjtZQUNBNUMsb0JBQW9CO1FBQ3RCLEVBQUUsT0FBTytDLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLFNBQVNBO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNRSxtQkFBbUI7UUFDdkJqRCxvQkFBb0I7UUFDcEJFLGVBQWU7UUFDZkUsWUFBWTtJQUNkO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDUCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDNEI7Z0JBQUt5QixXQUFXdEQscUVBQVc7O2tDQUMxQiw4REFBQ0Ysd0VBQWFBO3dCQUFDeUQsVUFBVTlDOzs7Ozs7b0JBQ3hCTixrQ0FDQyw4REFBQ3FEO3dCQUFJRixXQUFXdEQsNkVBQW1COzswQ0FDakMsOERBQUMwRDtnQ0FBSUMsS0FBSztnQ0FBYUMsS0FBSTtnQ0FBT04sV0FBV3RELHNFQUFZOzs7Ozs7NEJBQUs7MENBQzlELDhEQUFDOEQ7O2tEQUNDLDhEQUFDQzt3Q0FBS1QsV0FBV3RELHFFQUFXO2tEQUFFOzs7Ozs7b0NBQStCO2tEQUM3RCw4REFBQ2lFOzs7OztvQ0FBSzs7Ozs7OzswQ0FHUiw4REFBQ0g7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FHUCw4REFBQ047d0JBQUlGLFdBQVd0RCx3RUFBYztrQ0FDM0JLLGVBQWUsQ0FBQ0Ysa0NBQ2YsOERBQUNKLDBFQUFjQTs0QkFDYnFCLGdCQUFnQmYsWUFBWTZDLE9BQU87NEJBQ25DZCxVQUFVL0IsWUFBWStCLFFBQVE7NEJBQzlCN0IsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtsQiw4REFBQzREO2dCQUFPYixXQUFXdEQsdUVBQWE7MEJBQUU7Ozs7Ozs7O0FBR3hDO0dBdkdNRTtLQUFBQTtBQXlHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgV2VhdGhlclNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvd2VhdGhlclNlYXJjaFwiO1xuaW1wb3J0IFdlYXRoZXJEaXNwbGF5IGZyb20gXCIuLi9jb21wb25lbnRzL0Rpc3BsYXkvd2VhdGhlckRpc3BsYXlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93SW5zdHJ1Y3Rpb25zLCBzZXRTaG93SW5zdHJ1Y3Rpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtjaXR5TmFtZSwgc2V0Q2l0eU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBmZXRjaFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZ2VvY29kaW5nUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZsaW1pdD0xJmFwcGlkPWI2ZTAwNDU2Y2E1YzQyOTQ3MDA2NzY0ZmM4ZjI4Yjc5YFxuICAgICAgKTtcblxuICAgICAgaWYgKGdlb2NvZGluZ1Jlc3BvbnNlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBsYXQsIGxvbiwgbmFtZSB9ID0gZ2VvY29kaW5nUmVzcG9uc2UuZGF0YVswXTtcbiAgICAgIHNldENpdHlOYW1lKG5hbWUpO1xuXG4gICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9YjZlMDA0NTZjYTVjNDI5NDcwMDY3NjRmYzhmMjhiNzlgXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmb3JlY2FzdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1iNmUwMDQ1NmNhNWM0Mjk0NzAwNjc2NGZjOGYyOGI3OWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0ge1xuICAgICAgICBsYXN0VXBkYXRlZDogbmV3IERhdGUoXG4gICAgICAgICAgd2VhdGhlclJlc3BvbnNlLmRhdGEuZHQgKiAxMDAwXG4gICAgICAgICkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICB9KSxcbiAgICAgICAgdGVtcGVyYXR1cmU6IHdlYXRoZXJSZXNwb25zZS5kYXRhLm1haW4udGVtcCAtIDI3My4xNSxcbiAgICAgICAgd2VhdGhlck1haW46IHdlYXRoZXJSZXNwb25zZS5kYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgICAgd2luZFNwZWVkOiB3ZWF0aGVyUmVzcG9uc2UuZGF0YS53aW5kLnNwZWVkLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBmb3JlY2FzdFJlc3BvbnNlLmRhdGEubGlzdC5yZWR1Y2UoXG4gICAgICAgIChhY2M6IGFueSwgZGF5OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gZGF5LmR0X3R4dC5zcGxpdChcIiBcIilbMF07XG4gICAgICAgICAgaWYgKCFhY2NbZGF0ZV0gJiYgT2JqZWN0LmtleXMoYWNjKS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBhY2NbZGF0ZV0gPSB7XG4gICAgICAgICAgICAgIHRlbXA6IGRheS5tYWluLnRlbXAgLSAyNzMuMTUsXG4gICAgICAgICAgICAgIHdlYXRoZXJNYWluOiBkYXkud2VhdGhlclswXS5tYWluLFxuICAgICAgICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb246IGRheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICB3aW5kU3BlZWQ6IGRheS53aW5kLnNwZWVkLFxuICAgICAgICAgICAgICBkdFR4dDogZGF5LmR0X3R4dCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApO1xuXG4gICAgICBjb25zdCBmb3JlY2FzdEFycmF5ID0gT2JqZWN0LnZhbHVlcyhmb3JlY2FzdCk7XG5cbiAgICAgIHNldFdlYXRoZXJEYXRhKHtcbiAgICAgICAgY3VycmVudDogY3VycmVudFdlYXRoZXIsXG4gICAgICAgIGZvcmVjYXN0OiBmb3JlY2FzdEFycmF5LFxuICAgICAgfSk7XG4gICAgICBzZXRTaG93SW5zdHJ1Y3Rpb25zKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9ICgpID0+IHtcbiAgICBzZXRTaG93SW5zdHJ1Y3Rpb25zKHRydWUpO1xuICAgIHNldFdlYXRoZXJEYXRhKG51bGwpO1xuICAgIHNldENpdHlOYW1lKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxXZWF0aGVyU2VhcmNoIG9uU3VibWl0PXtmZXRjaFdlYXRoZXJEYXRhfSAvPlxuICAgICAgICB7c2hvd0luc3RydWN0aW9ucyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnN0cnVuY3Rpb259PlxuICAgICAgICAgICAgPGltZyBzcmM9e1wiL0xvZ28ucG5nXCJ9IGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gLz57XCIgXCJ9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+V2VsY29tZSB0byBXRUFUSEVSTUFURSE8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgRW50ZXIgYSBjaXR5IHRvIGdldCB3ZWF0aGVyIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+WW91IGNhbiBnZXQgdGhlIGNpdHkncyBjdXJyZW50IHdlYXRoZXIgYW5kIDUtZGF5IGZvcmVjYXN0ITwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5fT5cbiAgICAgICAgICB7d2VhdGhlckRhdGEgJiYgIXNob3dJbnN0cnVjdGlvbnMgJiYgKFxuICAgICAgICAgICAgPFdlYXRoZXJEaXNwbGF5XG4gICAgICAgICAgICAgIGN1cnJlbnRXZWF0aGVyPXt3ZWF0aGVyRGF0YS5jdXJyZW50fVxuICAgICAgICAgICAgICBmb3JlY2FzdD17d2VhdGhlckRhdGEuZm9yZWNhc3R9XG4gICAgICAgICAgICAgIGNpdHlOYW1lPXtjaXR5TmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+wqkgMjAyNCBTZWJpbiBMZWU8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiV2VhdGhlclNlYXJjaCIsIldlYXRoZXJEaXNwbGF5Iiwic3R5bGVzIiwiSGVhZGVyIiwiSG9tZSIsInNob3dJbnN0cnVjdGlvbnMiLCJzZXRTaG93SW5zdHJ1Y3Rpb25zIiwid2VhdGhlckRhdGEiLCJzZXRXZWF0aGVyRGF0YSIsImNpdHlOYW1lIiwic2V0Q2l0eU5hbWUiLCJmZXRjaFdlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJnZW9jb2RpbmdSZXNwb25zZSIsImdldCIsImRhdGEiLCJsZW5ndGgiLCJsYXQiLCJsb24iLCJuYW1lIiwid2VhdGhlclJlc3BvbnNlIiwiZm9yZWNhc3RSZXNwb25zZSIsImN1cnJlbnRXZWF0aGVyIiwibGFzdFVwZGF0ZWQiLCJEYXRlIiwiZHQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ0ZW1wZXJhdHVyZSIsIm1haW4iLCJ0ZW1wIiwid2VhdGhlck1haW4iLCJ3ZWF0aGVyIiwid2luZFNwZWVkIiwid2luZCIsInNwZWVkIiwiZm9yZWNhc3QiLCJsaXN0IiwicmVkdWNlIiwiYWNjIiwiZGF0ZSIsImR0X3R4dCIsInNwbGl0IiwiT2JqZWN0Iiwia2V5cyIsIndlYXRoZXJEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiZHRUeHQiLCJmb3JlY2FzdEFycmF5IiwidmFsdWVzIiwiY3VycmVudCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUltYWdlQ2xpY2siLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImRpdiIsImluc3RydW5jdGlvbiIsImltZyIsInNyYyIsImFsdCIsImltYWdlIiwicCIsInNwYW4iLCJib2xkIiwiYnIiLCJkaXNwbGF5IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});