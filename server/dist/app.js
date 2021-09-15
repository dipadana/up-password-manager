"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV === "development")
    require('dotenv').config();
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var routers_1 = __importDefault(require("./routers"));
require("./config/mongoose");
var errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use('/', routers_1.default);
app.use(errorHandler_1.default);
app.listen(port, function () {
    console.log('App listen on port ' + port);
});
exports.default = app;
