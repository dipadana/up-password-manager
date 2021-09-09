"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = require("bcryptjs");
exports.generateHash = function (password) {
    return bcryptjs_1.hashSync(password);
};
exports.decodeHash = function (password, hash) {
    return bcryptjs_1.compareSync(password, hash);
};
