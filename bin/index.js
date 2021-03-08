"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = exports.Tree = void 0;
var Tree = /** @class */ (function () {
    /**
     * Make a new tree.
     *
     * @param name The root name of your tree.
     * @param options Custom line characters
     */
    function Tree(name, options) {
        /**
         * Branches of the tree.
         */
        this.branches = [];
        this.headChar = "● ";
        this.treeChar = "├─ ";
        this.lineChar = "│  ";
        this.lastChar = "╰─ ";
        this.name = name;
        if (options === null || options === void 0 ? void 0 : options.headChar)
            this.headChar = options.headChar;
        if (options === null || options === void 0 ? void 0 : options.treeChar)
            this.treeChar = options.treeChar;
        if (options === null || options === void 0 ? void 0 : options.lineChar)
            this.lineChar = options.lineChar;
        if (options === null || options === void 0 ? void 0 : options.lastChar)
            this.lastChar = options.lastChar;
        if (this.treeChar.length !== this.lineChar.length &&
            this.lineChar.length !== this.lastChar.length) {
            throw new Error("treeChar, midChar, and endChar must have the same length.");
        }
    }
    /**
     * Add branches to the main tree.
     *
     * @param branches Branches to add to the tree.
     */
    Tree.prototype.addBranch = function (branches) {
        for (var _i = 0, branches_1 = branches; _i < branches_1.length; _i++) {
            var branch = branches_1[_i];
            if (typeof branch === "string") {
                this.branches.push(new Branch(branch));
            }
            else {
                this.branches.push(branch);
            }
        }
        return this;
    };
    Tree.prototype.getData = function (name, branches) {
        var _this = this;
        var output = [];
        var length = branches.length;
        output.push(name);
        if (!length)
            return output;
        var _loop_1 = function (i) {
            var branch = branches[i], isLast = i === length - 1;
            var char = "";
            if (isLast)
                char = this_1.lastChar;
            else
                char = this_1.treeChar;
            output = output.concat(this_1.getData(branch.name, branch.branches).map(function (s) {
                var c = char;
                char = null;
                return ((c === null
                    ? isLast
                        ? _this.getSpacesOfLength(_this.treeChar.length)
                        : _this.lineChar
                    : c) + s);
            }));
        };
        var this_1 = this;
        for (var i = 0; i < length; i++) {
            _loop_1(i);
        }
        return output;
    };
    Tree.prototype.getSpacesOfLength = function (length) {
        var spaces = "";
        for (var i = 0; i < length; i++) {
            spaces += " ";
        }
        return spaces;
    };
    Tree.prototype.getAsStringList = function () {
        return this.getData(this.headChar + this.name, this.branches);
    };
    /**
     * Get the tree as an string.
     */
    Tree.prototype.getAsString = function () {
        return this.getAsStringList().join("\n");
    };
    /**
     * Console.log() the tree.
     */
    Tree.prototype.log = function () {
        return console.log(this.getAsString());
    };
    return Tree;
}());
exports.Tree = Tree;
var Branch = /** @class */ (function () {
    /**
     * Make a new tree branch.
     *
     * @param name The name of your tree branch.
     */
    function Branch(name) {
        /**
         * Branches of the tree section.
         */
        this.branches = [];
        this.name = name;
    }
    /**
     * Add more sections to the section.
     *
     * @param branches Sections to add to the section.
     */
    Branch.prototype.addBranch = function (branches) {
        for (var _i = 0, branches_2 = branches; _i < branches_2.length; _i++) {
            var branch = branches_2[_i];
            if (typeof branch === "string") {
                this.branches.push(new Branch(branch));
            }
            else {
                this.branches.push(branch);
            }
        }
        return this;
    };
    return Branch;
}());
exports.Branch = Branch;
//# sourceMappingURL=index.js.map