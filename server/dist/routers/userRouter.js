"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userControllers_1 = __importDefault(require("../controllers/userControllers"));
var router = (0, express_1.Router)();
router.post('/login', userControllers_1.default.login);
router.post('/register', userControllers_1.default.register);
exports.default = router;
