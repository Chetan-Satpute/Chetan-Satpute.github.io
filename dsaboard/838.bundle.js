"use strict";
(self["webpackChunkdsaboard"] = self["webpackChunkdsaboard"] || []).push([[838],{

/***/ 838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ panels_BinarySearchTree)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./src/lib/Board.ts
var Board = __webpack_require__(872);
// EXTERNAL MODULE: ./src/utils/server.ts
var server = __webpack_require__(653);
// EXTERNAL MODULE: ./src/components/Buttons/AlgoButton.tsx
var AlgoButton = __webpack_require__(24);
// EXTERNAL MODULE: ./src/components/Buttons/AlgoInputButton.tsx
var AlgoInputButton = __webpack_require__(152);
// EXTERNAL MODULE: ./src/components/Panel/Label.tsx
var Label = __webpack_require__(298);
// EXTERNAL MODULE: ./src/components/Panel/Section.tsx
var Section = __webpack_require__(814);
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
var lib_Label = __webpack_require__(535);
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
                        this.root.setLabel("ROOT", lib_Label/* default.UP */.Z.UP);
                        return [4 /*yield*/, this.root.draw(ctx)];
                    case 1:
                        _a.sent();
                        this.root.unsetLabel(lib_Label/* default.UP */.Z.UP);
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

;// CONCATENATED MODULE: ./src/lib/BinarySearchTree/index.ts
var BinarySearchTree_extends = (undefined && undefined.__extends) || (function () {
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

var BinarySearchTree = /** @class */ (function (_super) {
    BinarySearchTree_extends(BinarySearchTree, _super);
    function BinarySearchTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinarySearchTree.prototype.setTreeFromArray = function (arr) {
        if (arr.length > 0) {
            this.root = new BinaryTreeNode(arr[0]);
            for (var i = 1; i < arr.length; i++) {
                this.insert(arr[i]);
            }
        }
    };
    /**
     * Insert a new Node with given value
     * @param {number} value - value of node to be inserted
     */
    BinarySearchTree.prototype.insert = function (value) {
        var _a = this.search(value), found = _a[0], parent = _a[1];
        if (found) {
            // Node with value is already present
        }
        else {
            // Tree has no nodes
            if (parent === undefined) {
                this.root = new BinaryTreeNode(value);
                this.root.moveTo(this.box.x, this.box.y);
            }
            else {
                if (value < parent.value) {
                    parent.setLeft(value);
                }
                if (value > parent.value) {
                    parent.setRight(value);
                }
            }
        }
    };
    /**
     * Search node for given value
     * if node found return [true, node]
     * else return [false, undefined]
     * @param {number} value - value of node to be inserted
     */
    BinarySearchTree.prototype.search = function (value) {
        if (!this.root) {
            return [false, undefined];
        }
        // Start with root Node
        var ptr = this.root;
        while (ptr) {
            if (value === ptr.value) {
                return [true, ptr];
            }
            else if (value < ptr.value) {
                if (ptr.left) {
                    ptr = ptr.left;
                }
                else {
                    return [false, ptr];
                }
            }
            else if (value > ptr.value) {
                if (ptr.right) {
                    ptr = ptr.right;
                }
                else {
                    return [false, ptr];
                }
            }
        }
    };
    /**
     * Replaces one subtree as a child of its parent with another subtree
     * @param {BinaryTreeNode} u - root of subtree to be replaced
     * @param {BinaryTreeNode} v - root of subtree that will replace u
     */
    BinarySearchTree.prototype.transplant = function (u, v) {
        if (u.parent === undefined) {
            this.root = v;
        }
        else if (u === u.parent.left) {
            u.parent.left = v;
        }
        else if (u === u.parent.right) {
            u.parent.right = v;
        }
        if (v !== undefined) {
            v.parent = u.parent;
        }
    };
    /**
     * Delete Node with given value
     * @param {number} value - value of node to be inserted
     */
    BinarySearchTree.prototype.delete = function (value) {
        if (!this.root) {
            return;
        }
        var _a = this.search(value), found = _a[0], ptr = _a[1];
        if (found) {
            if (ptr.left === undefined) {
                this.transplant(ptr, ptr.right);
            }
            else if (ptr.right === undefined) {
                this.transplant(ptr, ptr.left);
            }
            else {
                var y = this.minimum(ptr.right);
                if (y.parent !== ptr) {
                    this.transplant(y, y.right);
                    y.right = ptr.right;
                    y.right.parent = y;
                }
                this.transplant(ptr, y);
                y.left = ptr.left;
                y.left.parent = y;
            }
        }
        else {
            // Node with value not found
        }
    };
    /**
     * Returns minimum node of a subtree
     * @param {BinaryTreeNode} node - subtree root
     */
    BinarySearchTree.prototype.minimum = function (node) {
        if (node !== undefined) {
            var ptr = node;
            while (ptr.left) {
                ptr = ptr.left;
            }
            return ptr;
        }
    };
    return BinarySearchTree;
}(lib_BinaryTree));
/* harmony default export */ const lib_BinarySearchTree = (BinarySearchTree);

// EXTERNAL MODULE: ./src/utils/animation.ts
var animation = __webpack_require__(201);
// EXTERNAL MODULE: ./src/lib/Colors.ts
var Colors = __webpack_require__(238);
;// CONCATENATED MODULE: ./src/lib/BinarySearchTree/utils.ts
var utils_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var utils_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var PRIMARY = Colors/* default.Violet */.Z.Violet;
var SUCCESS = Colors/* default.Green */.Z.Green;
function BSTNodeSetLeft(node, child) {
    return utils_awaiter(this, void 0, void 0, function () {
        var i;
        return utils_generator(this, function (_a) {
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
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
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
    return utils_awaiter(this, void 0, void 0, function () {
        var i;
        return utils_generator(this, function (_a) {
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
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
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
    return utils_awaiter(this, void 0, void 0, function () {
        var i, nodeLeft;
        return utils_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!node.left) return [3 /*break*/, 4];
                    i = 100;
                    _a.label = 1;
                case 1:
                    if (!(i >= 0)) return [3 /*break*/, 4];
                    node.leftEdgePercent = i;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
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
    return utils_awaiter(this, void 0, void 0, function () {
        var i, nodeRight;
        return utils_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!node.right) return [3 /*break*/, 4];
                    i = 100;
                    _a.label = 1;
                case 1:
                    if (!(i >= 0)) return [3 /*break*/, 4];
                    node.rightEdgePercent = i;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
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
    return utils_awaiter(this, void 0, void 0, function () {
        var ptr;
        return utils_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(node !== undefined)) return [3 /*break*/, 9];
                    ptr = node;
                    ptr.color = PRIMARY;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!ptr.left) return [3 /*break*/, 6];
                    ptr.color = Node/* default.DEFAULT_COLOR */.Z.DEFAULT_COLOR;
                    ptr = ptr.left;
                    ptr.color = PRIMARY;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 6:
                    ptr.color = SUCCESS;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 8:
                    _a.sent();
                    return [2 /*return*/, ptr];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function BSTTransplant(t, u, v) {
    return utils_awaiter(this, void 0, void 0, function () {
        return utils_generator(this, function (_a) {
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
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

;// CONCATENATED MODULE: ./src/lib/BinarySearchTree/BSTInsert.ts
var BSTInsert_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BSTInsert_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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






var BSTInsert_PRIMARY = Colors/* default.Violet */.Z.Violet;
var BSTInsert_SUCCESS = Colors/* default.Green */.Z.Green;
function BSTInsert(t, value) {
    return BSTInsert_awaiter(this, void 0, void 0, function () {
        var par, ptr;
        return BSTInsert_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    par = t.root;
                    ptr = t.root;
                    _a.label = 1;
                case 1:
                    if (!(ptr !== undefined && ptr.value !== value)) return [3 /*break*/, 6];
                    par = ptr;
                    ptr.color = BSTInsert_PRIMARY;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 3:
                    _a.sent();
                    ptr.color = Node/* default.DEFAULT_COLOR */.Z.DEFAULT_COLOR;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 5:
                    _a.sent();
                    if (value < ptr.value) {
                        ptr = ptr.left;
                    }
                    else if (value > ptr.value) {
                        ptr = ptr.right;
                    }
                    return [3 /*break*/, 1];
                case 6:
                    if (!(ptr === undefined)) return [3 /*break*/, 10];
                    if (!(value < par.value)) return [3 /*break*/, 8];
                    return [4 /*yield*/, BSTNodeSetLeft(par, new BinaryTreeNode(value))];
                case 7:
                    _a.sent();
                    ptr = par.left;
                    return [3 /*break*/, 10];
                case 8:
                    if (!(value > par.value)) return [3 /*break*/, 10];
                    return [4 /*yield*/, BSTNodeSetRight(par, new BinaryTreeNode(value))];
                case 9:
                    _a.sent();
                    ptr = par.right;
                    _a.label = 10;
                case 10:
                    ptr.color = BSTInsert_SUCCESS;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 12:
                    _a.sent();
                    ptr.color = Node/* default.DEFAULT_COLOR */.Z.DEFAULT_COLOR;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const BinarySearchTree_BSTInsert = (BSTInsert);

;// CONCATENATED MODULE: ./src/lib/BinarySearchTree/BSTSearch.ts
var BSTSearch_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BSTSearch_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var BSTSearch_PRIMARY = Colors/* default.Violet */.Z.Violet;
var BSTSearch_SUCCESS = Colors/* default.Green */.Z.Green;
var UNSUCCESS = Colors/* default.Red */.Z.Red;
function BSTSearch(t, value) {
    return BSTSearch_awaiter(this, void 0, void 0, function () {
        var ptr, colorAll_1;
        var _this = this;
        return BSTSearch_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ptr = t.root;
                    ptr.color = BSTSearch_PRIMARY;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(ptr !== undefined && ptr.value !== value)) return [3 /*break*/, 7];
                    ptr.color = BSTSearch_PRIMARY;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 4:
                    _a.sent();
                    ptr.color = Node/* default.DEFAULT_COLOR */.Z.DEFAULT_COLOR;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 6:
                    _a.sent();
                    if (value < ptr.value) {
                        ptr = ptr.left;
                    }
                    else if (value > ptr.value) {
                        ptr = ptr.right;
                    }
                    return [3 /*break*/, 2];
                case 7:
                    if (!ptr) return [3 /*break*/, 13];
                    ptr.color = BSTSearch_SUCCESS;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 10:
                    _a.sent();
                    ptr.color = Node/* default.DEFAULT_COLOR */.Z.DEFAULT_COLOR;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 12:
                    _a.sent();
                    return [3 /*break*/, 19];
                case 13:
                    colorAll_1 = function (node, color) { return BSTSearch_awaiter(_this, void 0, void 0, function () {
                        return BSTSearch_generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    node.color = color;
                                    if (!node.left) return [3 /*break*/, 2];
                                    return [4 /*yield*/, colorAll_1(node.left, color)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (!node.right) return [3 /*break*/, 4];
                                    return [4 /*yield*/, colorAll_1(node.right, color)];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); };
                    return [4 /*yield*/, colorAll_1(t.root, UNSUCCESS)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, colorAll_1(t.root, Node/* default.DEFAULT_COLOR */.Z.DEFAULT_COLOR)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19: return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const BinarySearchTree_BSTSearch = (BSTSearch);

;// CONCATENATED MODULE: ./src/lib/BinarySearchTree/BSTRemove.ts
var BSTRemove_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BSTRemove_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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







var BSTRemove_SUCCESS = Colors/* default.Green */.Z.Green;
var BSTRemove_UNSUCCESS = Colors/* default.Red */.Z.Red;
function BSTRemove(t, value) {
    return BSTRemove_awaiter(this, void 0, void 0, function () {
        var _a, found, ptr, y, yTree, ptrRight, _b, _c;
        return BSTRemove_generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, BinarySearchTree_BSTSearch(t, value)];
                case 1:
                    _d.sent();
                    _a = t.search(value), found = _a[0], ptr = _a[1];
                    if (!found) return [3 /*break*/, 27];
                    ptr.color = BSTRemove_UNSUCCESS;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 3:
                    _d.sent();
                    if (!(ptr.left === undefined)) return [3 /*break*/, 8];
                    if (!ptr.right) return [3 /*break*/, 6];
                    ptr.right.color = BSTRemove_SUCCESS;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6: return [4 /*yield*/, BSTTransplant(t, ptr, ptr.right)];
                case 7:
                    _d.sent();
                    return [3 /*break*/, 24];
                case 8:
                    if (!(ptr.right === undefined)) return [3 /*break*/, 13];
                    if (!ptr.left) return [3 /*break*/, 11];
                    ptr.left.color = BSTRemove_SUCCESS;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 10:
                    _d.sent();
                    _d.label = 11;
                case 11: return [4 /*yield*/, BSTTransplant(t, ptr, ptr.left)];
                case 12:
                    _d.sent();
                    return [3 /*break*/, 24];
                case 13: return [4 /*yield*/, BSTMinimum(ptr.right)];
                case 14:
                    _d.sent();
                    y = t.minimum(ptr.right);
                    yTree = new lib_BinarySearchTree(0);
                    yTree.moveTo(y.box.x, y.box.y);
                    yTree.root = y;
                    if (!(y.parent !== ptr)) return [3 /*break*/, 18];
                    return [4 /*yield*/, BSTTransplant(t, y, y.right)];
                case 15:
                    _d.sent();
                    Board/* default.add */.Z.add(yTree);
                    ptrRight = ptr.right;
                    return [4 /*yield*/, BSTNodeUnsetRight(ptr)];
                case 16:
                    _d.sent();
                    return [4 /*yield*/, BSTNodeSetRight(y, ptrRight)];
                case 17:
                    _d.sent();
                    y.right.parent = y;
                    _d.label = 18;
                case 18:
                    _b = BSTNodeSetLeft;
                    _c = [y];
                    return [4 /*yield*/, BSTNodeUnsetLeft(ptr)];
                case 19: return [4 /*yield*/, _b.apply(void 0, _c.concat([_d.sent()]))];
                case 20:
                    _d.sent();
                    return [4 /*yield*/, BSTTransplant(t, ptr, y)];
                case 21:
                    _d.sent();
                    y.left.parent = y;
                    Board/* default.remove */.Z.remove(yTree);
                    y.color = Node/* default.DEFAULT_COLOR */.Z.DEFAULT_COLOR;
                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 22:
                    _d.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 23:
                    _d.sent();
                    _d.label = 24;
                case 24: return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                case 25:
                    _d.sent();
                    return [4 /*yield*/, (0,animation/* pause */.w)()];
                case 26:
                    _d.sent();
                    return [3 /*break*/, 27];
                case 27: return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const BinarySearchTree_BSTRemove = (BSTRemove);

;// CONCATENATED MODULE: ./src/components/Panel/panels/BinarySearchTree.tsx
var BinarySearchTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BinarySearchTree_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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











var BinarySearchTreePanel = function (_a) {
    var play = _a.play;
    var _b = (0,react.useState)(), T = _b[0], setTree = _b[1];
    (0,react.useEffect)(function () {
        play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () {
            var values, t;
            return BinarySearchTree_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0,server/* fetchRoute */.D)("binarySearchTree")];
                    case 1:
                        values = (_a.sent()).values;
                        t = new lib_BinarySearchTree(50);
                        t.moveTo(100, 100);
                        t.setTreeFromArray(values);
                        setTree(t);
                        Board/* default.add */.Z.add(t);
                        return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return function () {
            play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () {
                return BinarySearchTree_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Board/* default.empty */.Z.empty();
                            return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    }, []);
    var setRandomData = function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () {
        return BinarySearchTree_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () {
                        var values;
                        return BinarySearchTree_generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0,server/* fetchRoute */.D)("binarySearchTree")];
                                case 1:
                                    values = (_a.sent()).values;
                                    T.setTreeFromArray(values);
                                    return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    if (T === undefined) {
        return null;
    }
    return (react.createElement(react.Fragment, null,
        react.createElement(Section/* default */.Z, null,
            react.createElement(AlgoButton/* default */.Z, { title: "Load Random Data", onClick: setRandomData })),
        react.createElement(Section/* default */.Z, null,
            react.createElement(Label/* default */.Z, null, "Tree"),
            react.createElement("div", { className: "flex items-center" },
                react.createElement("input", { className: "shadow appearance-none border flex-1 py-2 px-3 text-gray-700 rounded-md border-cyan-400 leading-tight focus:outline-none focus:shadow-outline", type: "text", placeholder: "Tree Nodes", value: T.preOrderTraversal().join(), onChange: function (e) {
                        var values = e.target.value.split(",").map(function (val) { return +val; });
                        T.setTreeFromArray(values);
                        play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () {
                            return BinarySearchTree_generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    } }),
                react.createElement("button", { className: "my-1 mx-2 font-semibold leading-none text-white bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none", onClick: function () {
                        var values = T.preOrderTraversal();
                        T.setTreeFromArray(values);
                        play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () {
                            return BinarySearchTree_generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Board/* default.draw */.Z.draw()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    } },
                    react.createElement("span", { className: "material-icons" }, "send"))),
            react.createElement("p", { className: "text-violet-500 text-xs italic py-1" }, "* Comma seperated values that will be inserted to an empty tree in sequence.")),
        react.createElement(Section/* default */.Z, null,
            react.createElement(Label/* default */.Z, null, "Animations"),
            react.createElement(AlgoInputButton/* default */.Z, { title: "Search", onClick: function (value) { return play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () { return BinarySearchTree_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, BinarySearchTree_BSTSearch(T, value)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); }); } }),
            react.createElement(AlgoInputButton/* default */.Z, { title: "Insert", onClick: function (value) { return play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () { return BinarySearchTree_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, BinarySearchTree_BSTInsert(T, value)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); }); } }),
            react.createElement(AlgoInputButton/* default */.Z, { title: "Remove", onClick: function (value) { return play(function () { return BinarySearchTree_awaiter(void 0, void 0, void 0, function () { return BinarySearchTree_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, BinarySearchTree_BSTRemove(T, value)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); }); } }))));
};
/* harmony default export */ const panels_BinarySearchTree = (BinarySearchTreePanel);


/***/ })

}]);
//# sourceMappingURL=838.bundle.js.map