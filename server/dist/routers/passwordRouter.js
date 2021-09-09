"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passwordController_1 = __importDefault(require("../controllers/passwordController"));
var auth_1 = require("../middleware/auth");
var router = express_1.Router();
router.use(auth_1.authentication);
router.get('/', passwordController_1.default.myPassword);
router.get('/onepass/:_id', auth_1.authorization, passwordController_1.default.findOnePassword);
router.post('/', passwordController_1.default.createPassword);
router.put('/:_id', auth_1.authorization, passwordController_1.default.updatePassword);
router.delete('/:_id', auth_1.authorization, passwordController_1.default.deletePassword);
exports.default = router;
