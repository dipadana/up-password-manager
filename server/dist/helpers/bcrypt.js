"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHash = exports.generateHash = void 0;
var bcryptjs_1 = require("bcryptjs");
var generateHash = function (password) {
    return (0, bcryptjs_1.hashSync)(password);
};
exports.generateHash = generateHash;
var decodeHash = function (password, hash) {
    return (0, bcryptjs_1.compareSync)(password, hash);
};
exports.decodeHash = decodeHash;
