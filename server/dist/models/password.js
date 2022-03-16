"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var passwordSchema = new mongoose_1.Schema({
    UserId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: 'UserId required'
    },
    passwordData: {
        type: String,
        required: 'Password required'
    },
    nameData: {
        type: String,
        required: 'Name/Username/Email required'
    },
    urlData: {
        type: String,
        match: [/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, 'Invalid URL format'],
        required: 'URL required'
    }
}, { timestamps: true, versionKey: false });
var Password = (0, mongoose_1.model)('Password', passwordSchema);
exports.default = Password;
