"use strict";
(self["webpackChunkdsaboard"] = self["webpackChunkdsaboard"] || []).push([[475],{

/***/ 475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(201);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(872);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(389);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PRIMARY = _Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Violet */ .Z.Violet;
var DANGER = _Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Red */ .Z.Red;
var SUCCESS = _Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Green */ .Z.Green;
function BinarySearch(arr, value) {
    return __awaiter(this, void 0, void 0, function () {
        var i, found, l, r, m, i, i, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    for (i = 1; i < arr.array.length; i++) {
                        if (arr.array[i].value < arr.array[i - 1].value) {
                            alert("Array is not sorted");
                            return [2 /*return*/];
                        }
                    }
                    found = false;
                    l = 0;
                    r = arr.array.length - 1;
                    _a.label = 1;
                case 1:
                    if (!(l < r && found === false)) return [3 /*break*/, 16];
                    m = Math.floor((l + r) / 2);
                    arr.array[m].color = PRIMARY;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 3:
                    _a.sent();
                    if (!(arr.array[m].value === value)) return [3 /*break*/, 7];
                    arr.array[m].color = SUCCESS;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 6:
                    _a.sent();
                    found = true;
                    return [3 /*break*/, 15];
                case 7:
                    if (!(arr.array[m].value < value)) return [3 /*break*/, 11];
                    for (i = l; i <= m; i++) {
                        arr.array[i].color = DANGER;
                    }
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 10:
                    _a.sent();
                    l = m + 1;
                    return [3 /*break*/, 15];
                case 11:
                    if (!(arr.array[m].value > value)) return [3 /*break*/, 15];
                    for (i = m; i <= r; i++) {
                        arr.array[i].color = DANGER;
                    }
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 14:
                    _a.sent();
                    r = m - 1;
                    _a.label = 15;
                case 15: return [3 /*break*/, 1];
                case 16:
                    if (!(l === r && arr.array[l].value === value)) return [3 /*break*/, 20];
                    arr.array[l].color = SUCCESS;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    for (i = 0; i < arr.array.length; i++) {
                        arr.array[i].color = _Node__WEBPACK_IMPORTED_MODULE_3__/* ["default"].DEFAULT_COLOR */ .Z.DEFAULT_COLOR;
                    }
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 22:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BinarySearch);


/***/ })

}]);
//# sourceMappingURL=475.bundle.js.map