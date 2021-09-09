"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../app"));
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(app_1.default);
var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log("HTTP listen on port " + 3000);
});
