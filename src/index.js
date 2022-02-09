"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var cjs_1 = (0, tslib_1.__importDefault)(require("yawn-yaml/cjs"));
function YamlPatcher(yamlContent, newContent) {
    var yawn = new cjs_1["default"](yamlContent);
    yawn.json = newContent;
    return yawn.yaml;
}
exports["default"] = YamlPatcher;
