"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandling = function (err, req, res, next) {
    console.log("masuk error");
    console.log(err);
    var key;
    // default error
    var status = err.status || 500;
    var message = err.message || 'Internal Server Error';
    if (err.name === 'ValidationError') {
        // error validation
        var errors = [];
        for (key in err.errors) {
            errors.push(err.errors[key].message);
        }
        res.status(400).json({
            message: 'validation error',
            errors: errors
        });
    }
    else if (err.message.name === 'JsonWebTokenError') {
        res.status(status).json({ message: err.message.message });
    }
    else {
        res.status(status).json({ message: message });
    }
};
exports.default = errorHandling;
