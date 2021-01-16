"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeSection = exports.DisplayAsTree = void 0;
var DisplayAsTree = /** @class */ (function () {
    /**
     * Make a new tree.
     *
     * @param name The root name of your tree.
     * @param options Custom line characters
     */
    function DisplayAsTree(name, options) {
        /**
         * Sections of the tree.
         */
        this.sections = [];
        this.startChar = "● ";
        this.treeChar = "├─ ";
        this.midChar = "│  ";
        this.endChar = "╰─ ";
        this.name = name;
        if (options === null || options === void 0 ? void 0 : options.startChar)
            this.startChar = options.startChar;
        if (options === null || options === void 0 ? void 0 : options.treeChar)
            this.treeChar = options.treeChar;
        if (options === null || options === void 0 ? void 0 : options.midChar)
            this.midChar = options.midChar;
        if (options === null || options === void 0 ? void 0 : options.endChar)
            this.endChar = options.endChar;
        if (this.treeChar.length !== this.midChar.length &&
            this.midChar.length !== this.endChar.length) {
            throw new Error("treeChar, midChar, and endChar must have the same length.");
        }
    }
    /**
     * Add sections to the main tree.
     *
     * @param sections Sections to add to the tree.
     */
    DisplayAsTree.prototype.addSection = function (sections) {
        for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
            var section = sections_1[_i];
            if (typeof section === "string") {
                this.sections.push(new TreeSection(section));
            }
            else {
                this.sections.push(section);
            }
        }
        return this;
    };
    DisplayAsTree.prototype.getData = function (name, sections) {
        var _this = this;
        var output = [];
        var length = sections.length;
        output.push(name);
        if (!length)
            return output;
        var _loop_1 = function (i) {
            var section = sections[i], isLast = i === length - 1;
            var char = "";
            if (isLast)
                char = this_1.endChar;
            else
                char = this_1.treeChar;
            output = output.concat(this_1.getData(section.name, section.sections).map(function (s) {
                var c = char;
                char = null;
                return ((c === null
                    ? isLast
                        ? _this.getSpacesOfLength(_this.treeChar.length)
                        : _this.midChar
                    : c) + s);
            }));
        };
        var this_1 = this;
        for (var i = 0; i < length; i++) {
            _loop_1(i);
        }
        return output;
    };
    DisplayAsTree.prototype.getSpacesOfLength = function (length) {
        var spaces = "";
        for (var i = 0; i < length; i++) {
            spaces += " ";
        }
        return spaces;
    };
    DisplayAsTree.prototype.getAsStringList = function () {
        return this.getData(this.startChar + this.name, this.sections);
    };
    /**
     * Get the tree as an string.
     */
    DisplayAsTree.prototype.getAsString = function () {
        return this.getAsStringList().join("\n");
    };
    /**
     * Console.log() the tree.
     */
    DisplayAsTree.prototype.log = function () {
        return console.log(this.getAsString());
    };
    return DisplayAsTree;
}());
exports.DisplayAsTree = DisplayAsTree;
var TreeSection = /** @class */ (function () {
    /**
     * Make a new tree section.
     *
     * @param name The name of your tree section.
     */
    function TreeSection(name) {
        /**
         * Sections of the tree section.
         */
        this.sections = [];
        this.name = name;
    }
    /**
     * Add more sections to the section.
     *
     * @param sections Sections to add to the section.
     */
    TreeSection.prototype.addSection = function (sections) {
        for (var _i = 0, sections_2 = sections; _i < sections_2.length; _i++) {
            var section = sections_2[_i];
            if (typeof section === "string") {
                this.sections.push(new TreeSection(section));
            }
            else {
                this.sections.push(section);
            }
        }
        return this;
    };
    return TreeSection;
}());
exports.TreeSection = TreeSection;
//# sourceMappingURL=index.js.map