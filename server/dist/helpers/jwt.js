"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = process.env.JWTSECRET || '123456';
var generateToken = function (payload) {
    return jsonwebtoken_1.default.sign(payload, secret);
};
exports.generateToken = generateToken;
var decodeToken = function (token) {
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.decodeToken = decodeToken;
