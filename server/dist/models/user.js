"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt_1 = require("../helpers/bcrypt");
var userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: 'Name required'
    },
    email: {
        type: String,
        required: 'Email required'
    },
    password: {
        type: String,
        required: 'Password required'
    }
}, { timestamps: true, versionKey: false });
userSchema.path('email').validate(function (value) {
    return User.findOne({ email: value })
        .then(function (user) {
        if (user)
            return false;
    });
}, 'Email user is already registered!');
userSchema.pre('save', function (next) {
    this.password = (0, bcrypt_1.generateHash)(this.password);
    next();
});
var User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
