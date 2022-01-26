"use strict";
(self["webpackChunkdsaboard"] = self["webpackChunkdsaboard"] || []).push([[987],{

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DU": () => (/* binding */ BSTNodeSetLeft),
/* harmony export */   "q6": () => (/* binding */ BSTNodeSetRight),
/* harmony export */   "Rr": () => (/* binding */ BSTNodeUnsetLeft),
/* harmony export */   "jz": () => (/* binding */ BSTNodeUnsetRight),
/* harmony export */   "KX": () => (/* binding */ BSTMinimum),
/* harmony export */   "gv": () => (/* binding */ BSTTransplant)
/* harmony export */ });
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(201);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(872);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(389);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(238);
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




var PRIMARY = _Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Violet */ .Z.Violet;
var SUCCESS = _Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Green */ .Z.Green;
function BSTNodeSetLeft(node, child) {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, BSTNodeUnsetLeft(node)];
                case 1:
                    _a.sent();
                    if (!child) return [3 /*break*/, 5];
                    node.left = child;
                    child.parent = node;
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i <= 100)) return [3 /*break*/, 5];
                    node.leftEdgePercent = i;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i += 2;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function BSTNodeSetRight(node, child) {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, BSTNodeUnsetRight(node)];
                case 1:
                    _a.sent();
                    if (!child) return [3 /*break*/, 5];
                    node.right = child;
                    child.parent = node;
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i <= 100)) return [3 /*break*/, 5];
                    node.rightEdgePercent = i;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i += 2;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function BSTNodeUnsetLeft(node) {
    return __awaiter(this, void 0, void 0, function () {
        var i, nodeLeft;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!node.left) return [3 /*break*/, 4];
                    i = 100;
                    _a.label = 1;
                case 1:
                    if (!(i >= 0)) return [3 /*break*/, 4];
                    node.leftEdgePercent = i;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i -= 2;
                    return [3 /*break*/, 1];
                case 4:
                    nodeLeft = node.left;
                    node.left = undefined;
                    return [2 /*return*/, nodeLeft];
            }
        });
    });
}
function BSTNodeUnsetRight(node) {
    return __awaiter(this, void 0, void 0, function () {
        var i, nodeRight;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!node.right) return [3 /*break*/, 4];
                    i = 100;
                    _a.label = 1;
                case 1:
                    if (!(i >= 0)) return [3 /*break*/, 4];
                    node.rightEdgePercent = i;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i -= 2;
                    return [3 /*break*/, 1];
                case 4:
                    nodeRight = node.right;
                    node.right = undefined;
                    return [2 /*return*/, nodeRight];
            }
        });
    });
}
function BSTMinimum(node) {
    return __awaiter(this, void 0, void 0, function () {
        var ptr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(node !== undefined)) return [3 /*break*/, 9];
                    ptr = node;
                    ptr.color = PRIMARY;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!ptr.left) return [3 /*break*/, 6];
                    ptr.color = _Node__WEBPACK_IMPORTED_MODULE_2__/* ["default"].DEFAULT_COLOR */ .Z.DEFAULT_COLOR;
                    ptr = ptr.left;
                    ptr.color = PRIMARY;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 6:
                    ptr.color = SUCCESS;
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0,_utils_animation__WEBPACK_IMPORTED_MODULE_0__/* .pause */ .w)()];
                case 8:
                    _a.sent();
                    return [2 /*return*/, ptr];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function BSTTransplant(t, u, v) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(u.parent === undefined)) return [3 /*break*/, 1];
                    t.root = v;
                    return [3 /*break*/, 5];
                case 1:
                    if (!(u === u.parent.left)) return [3 /*break*/, 3];
                    return [4 /*yield*/, BSTNodeSetLeft(u.parent, v)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    if (!(u === u.parent.right)) return [3 /*break*/, 5];
                    return [4 /*yield*/, BSTNodeSetRight(u.parent, v)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (v !== undefined) {
                        v.parent = u.parent;
                    }
                    return [4 /*yield*/, _Board__WEBPACK_IMPORTED_MODULE_1__/* ["default"].draw */ .Z.draw()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ BinaryTreeNode),
  "Z": () => (/* binding */ lib_BinaryTree)
});

;// CONCATENATED MODULE: ./src/lib/Edge.ts
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
var Edge = /** @class */ (function () {
    function Edge(start, end, directed) {
        if (directed === void 0) { directed = false; }
        this.start = start;
        this.end = end;
        this.directed = directed;
        this.percent = 100;
    }
    Edge.prototype.draw = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var xdiff, ydiff, xsign, ysign, start, end;
            return __generator(this, function (_a) {
                xdiff = Math.abs(this.end.x + this.end.width / 2 - (this.start.x + this.start.width / 2));
                ydiff = Math.abs(this.end.y + this.end.height / 2 - (this.start.y + this.start.height / 2));
                xsign = this.end.x > this.start.x ? 1 : -1;
                ysign = this.end.y > this.start.y ? 1 : -1;
                start = {
                    x: this.start.x + this.start.width / 2,
                    y: this.start.y + this.start.height / 2,
                };
                end = {
                    x: this.end.x + this.end.width / 2,
                    y: this.end.y + this.end.height / 2,
                };
                if (ydiff / xdiff < this.start.height / this.start.width) {
                    start.x += (this.start.width / 2) * xsign;
                    start.y += (ydiff / xdiff) * (this.start.width / 2) * ysign;
                }
                else {
                    start.x += (xdiff / ydiff) * (this.start.height / 2) * xsign;
                    start.y += (this.start.height / 2) * ysign;
                }
                if (ydiff / xdiff < this.end.height / this.end.width) {
                    end.x -= (this.end.width / 2) * xsign;
                    end.y -= (ydiff / xdiff) * (this.end.width / 2) * ysign;
                }
                else {
                    end.x -= (xdiff / ydiff) * (this.end.height / 2) * xsign;
                    end.y -= (this.end.height / 2) * ysign;
                }
                this.drawLine(ctx, start, end, this.directed);
                return [2 /*return*/];
            });
        });
    };
    Edge.prototype.drawLine = function (ctx, start, end, directed) {
        var angle = Math.atan2(end.y - start.y, end.x - start.x);
        var p = (100 - this.percent) / 100;
        var length = Math.sqrt((end.x - start.x) * (end.x - start.x) +
            (end.y - start.y) * (end.y - start.y)) - Edge.HEAD_LENGTH;
        ctx.lineWidth = 2;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x -
            length * Math.cos(angle) * p -
            (Edge.HEAD_LENGTH * Math.cos(angle)) / 2, end.y -
            length * Math.sin(angle) * p -
            (Edge.HEAD_LENGTH * Math.sin(angle)) / 2);
        ctx.closePath();
        ctx.stroke();
        if (directed) {
            ctx.beginPath();
            ctx.moveTo(end.x - length * Math.cos(angle) * p, end.y - length * Math.sin(angle) * p);
            ctx.lineTo(end.x -
                length * Math.cos(angle) * p -
                Edge.HEAD_LENGTH * Math.cos(angle - Math.PI / 6), end.y -
                length * Math.sin(angle) * p -
                Edge.HEAD_LENGTH * Math.sin(angle - Math.PI / 6));
            ctx.lineTo(end.x -
                length * Math.cos(angle) * p -
                Edge.HEAD_LENGTH * Math.cos(angle + Math.PI / 6), end.y -
                length * Math.sin(angle) * p -
                Edge.HEAD_LENGTH * Math.sin(angle + Math.PI / 6));
            ctx.closePath();
            ctx.fill();
        }
    };
    Edge.HEAD_LENGTH = 10;
    Edge.OFF_LENGTH = 10;
    return Edge;
}());
/* harmony default export */ const lib_Edge = (Edge);

// EXTERNAL MODULE: ./src/lib/Label.ts
var Label = __webpack_require__(535);
// EXTERNAL MODULE: ./src/lib/Node.ts
var Node = __webpack_require__(389);
// EXTERNAL MODULE: ./src/lib/Structure.ts
var Structure = __webpack_require__(634);
;// CONCATENATED MODULE: ./src/lib/BinaryTree/index.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BinaryTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BinaryTree_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var BinaryTreeNode = /** @class */ (function (_super) {
    __extends(BinaryTreeNode, _super);
    function BinaryTreeNode(value) {
        var _this = _super.call(this, value) || this;
        _this.leftEdgePercent = 100;
        _this.rightEdgePercent = 100;
        return _this;
    }
    /**
     * Draw Binary tree node
     * @param {CanvasRenderingContext2D} ctx - canvas rendering context
     */
    BinaryTreeNode.prototype.draw = function (ctx) {
        var _a, _b;
        return BinaryTree_awaiter(this, void 0, void 0, function () {
            var _this = this;
            return BinaryTree_generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            _super.prototype.draw.call(this, ctx),
                            // Draw children
                            (_a = this.left) === null || _a === void 0 ? void 0 : _a.draw(ctx),
                            (_b = this.right) === null || _b === void 0 ? void 0 : _b.draw(ctx),
                            // Draw edges to left and right children
                            (function () { return BinaryTree_awaiter(_this, void 0, void 0, function () {
                                var e, e;
                                return BinaryTree_generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!this.left) return [3 /*break*/, 2];
                                            e = new lib_Edge(this.box, this.left.box, true);
                                            e.percent = this.leftEdgePercent;
                                            return [4 /*yield*/, e.draw(ctx)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            if (!this.right) return [3 /*break*/, 4];
                                            e = new lib_Edge(this.box, this.right.box, true);
                                            e.percent = this.rightEdgePercent;
                                            return [4 /*yield*/, e.draw(ctx)];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })(),
                        ])];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Insert a left child node
     * @param {number} value - value of node to insert
     */
    BinaryTreeNode.prototype.setLeft = function (value) {
        this.left = new BinaryTreeNode(value);
        this.left.moveTo(this.box.x - Node/* default.WIDTH */.Z.WIDTH * 2, this.box.y);
        this.left.parent = this;
    };
    /**
     * Insert a right child node
     * @param {number} value - value of node to insert
     */
    BinaryTreeNode.prototype.setRight = function (value) {
        this.right = new BinaryTreeNode(value);
        this.right.moveTo(this.box.x - Node/* default.WIDTH */.Z.WIDTH * 2, this.box.y);
        this.right.parent = this;
    };
    /**
     * Checks if it is a root node
     */
    BinaryTreeNode.prototype.isRoot = function () {
        return this.parent === undefined;
    };
    /**
     * Return true if it is left child of its parent
     * Return false if it is right child of its parent
     * Return undefined if it has no parent
     */
    BinaryTreeNode.prototype.isLeftChild = function () {
        if (this.isRoot() === false) {
            return this.parent.left === this;
        }
        else {
            return undefined;
        }
    };
    /**
     * Return true if it is right child of its parent
     * Return false if it is left child of its parent
     * Return undefined if it has no parent
     */
    BinaryTreeNode.prototype.isRightChild = function () {
        if (this.isRoot() === false) {
            return this.parent.right === this;
        }
        else {
            return undefined;
        }
    };
    return BinaryTreeNode;
}(Node/* default */.Z));

var BinaryTree = /** @class */ (function (_super) {
    __extends(BinaryTree, _super);
    /**
     * @constructor
     * @param {number} value - value of root node
     */
    function BinaryTree(value) {
        var _this = _super.call(this) || this;
        _this.box = {
            x: 0,
            y: 0,
            height: 0,
            width: 0,
        };
        _this.root = new BinaryTreeNode(value);
        return _this;
    }
    BinaryTree.prototype.preDraw = function () {
        return BinaryTree_awaiter(this, void 0, void 0, function () {
            var pos, alignNode;
            var _this = this;
            return BinaryTree_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pos = 0;
                        alignNode = function (node) { return BinaryTree_awaiter(_this, void 0, void 0, function () {
                            return BinaryTree_generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!node.left) return [3 /*break*/, 2];
                                        node.left.box.y = node.box.y + Node/* default.HEIGHT */.Z.HEIGHT * 2;
                                        return [4 /*yield*/, alignNode(node.left)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        // Align node based on its inorder traversal
                                        node.box.x = this.box.x + Node/* default.WIDTH */.Z.WIDTH * pos;
                                        pos += 1;
                                        // Update box height
                                        this.box.height = Math.max(this.box.height, node.box.y);
                                        if (!node.right) return [3 /*break*/, 4];
                                        node.right.box.y = node.box.y + Node/* default.HEIGHT */.Z.HEIGHT * 2;
                                        return [4 /*yield*/, alignNode(node.right)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); };
                        // Align root node appropriately
                        this.root.moveTo(this.box.x, this.box.y);
                        return [4 /*yield*/, alignNode(this.root)];
                    case 1:
                        _a.sent();
                        // Update box width
                        this.box.width = pos * Node/* default.WIDTH */.Z.WIDTH;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Draw binary tree
     * @param {CanvasRenderingContext2D} ctx - canvas rendering context
     */
    BinaryTree.prototype.draw = function (ctx) {
        return BinaryTree_awaiter(this, void 0, void 0, function () {
            return BinaryTree_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.root.setLabel("ROOT", Label/* default.UP */.Z.UP);
                        return [4 /*yield*/, this.root.draw(ctx)];
                    case 1:
                        _a.sent();
                        this.root.unsetLabel(Label/* default.UP */.Z.UP);
                        return [4 /*yield*/, _super.prototype.draw.call(this, ctx)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BinaryTree.prototype.preOrderTraversal = function () {
        var arr = [];
        var stack = [this.root];
        while (stack.length > 0) {
            var node = stack.pop();
            arr.push(node.value);
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
        }
        return arr;
    };
    return BinaryTree;
}(Structure/* default */.Z));
/* harmony default export */ const lib_BinaryTree = (BinaryTree);


/***/ })

}]);
//# sourceMappingURL=987.bundle.js.map