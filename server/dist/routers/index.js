"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRouter_1 = __importDefault(require("./userRouter"));
var passwordRouter_1 = __importDefault(require("./passwordRouter"));
var router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.status(200).json({ message: 'Server Connected' });
});
router.use('/users', userRouter_1.default);
router.use('/passwords', passwordRouter_1.default);
exports.default = router;
