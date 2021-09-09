"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = __importDefault(require("../models/password"));
var passwordController = /** @class */ (function () {
    function passwordController() {
    }
    passwordController.myPassword = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = req.loggedUser._id;
                        return [4 /*yield*/, password_1.default.find({ UserId: _id }).populate('UserId')];
                    case 1:
                        data = _a.sent();
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        next(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    passwordController.findOnePassword = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = req.params // password Id
                        ._id;
                        return [4 /*yield*/, password_1.default.findOne({ _id: _id }).populate('UserId')];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            res.status(200).json(data);
                        }
                        else {
                            next({ status: 404, message: 'Password data not found' });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        next(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    passwordController.createPassword = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, _a, passwordData, nameData, urlData, data, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _id = req.loggedUser._id;
                        console.log(req.loggedUser, "<<<<<<<<<<<<<<<<");
                        _a = req.body, passwordData = _a.passwordData, nameData = _a.nameData, urlData = _a.urlData;
                        return [4 /*yield*/, password_1.default.create({ UserId: _id, passwordData: passwordData, nameData: nameData, urlData: urlData })];
                    case 1:
                        data = _b.sent();
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _b.sent();
                        next(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    passwordController.updatePassword = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var UserId, _id, _a, passwordData, nameData, urlData, data, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        UserId = req.loggedUser._id;
                        _id = req.params // password id
                        ._id;
                        _a = req.body, passwordData = _a.passwordData, nameData = _a.nameData, urlData = _a.urlData;
                        return [4 /*yield*/, password_1.default.findOneAndUpdate({ _id: _id }, { passwordData: passwordData, nameData: nameData, urlData: urlData }, { new: true })];
                    case 1:
                        data = _b.sent();
                        if (data) {
                            res.status(200).json(data);
                        }
                        else {
                            next({ status: 404, message: 'User not found' });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _b.sent();
                        next(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    passwordController.deletePassword = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, data, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = req.params // password id
                        ._id;
                        return [4 /*yield*/, password_1.default.deleteOne({ _id: _id })];
                    case 1:
                        data = _a.sent();
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        next(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return passwordController;
}());
exports.default = passwordController;
