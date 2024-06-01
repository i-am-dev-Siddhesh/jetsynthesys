"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.checkApiKey = exports.validateSchema = void 0;
const errorResponse_1 = require("../utils/errorResponse");
const classes_1 = require("../classes");
const validateSchema = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error === null || error === void 0 ? void 0 : error.details[0].message });
    }
    else {
        next();
    }
};
exports.validateSchema = validateSchema;
const checkApiKey = (req, res, next) => {
    var _a;
    try {
        const apiKey = process.env.API_KEY;
        if (!req.headers.apikey || ((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.apikey) !== apiKey) {
            return res.status(403).json((0, errorResponse_1.forbiddenError)());
        }
        return next();
    }
    catch (error) {
        return res.status(500).json((0, errorResponse_1.generalError)(error));
    }
};
exports.checkApiKey = checkApiKey;
const errorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = 'Internal Server Error';
    if (error instanceof classes_1.CustomError) {
        statusCode = error.status_code;
        message = error.message;
    }
    res.status(statusCode).json({ error: message });
};
exports.errorHandler = errorHandler;
