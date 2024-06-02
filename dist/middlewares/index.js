"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitter = exports.errorHandler = exports.checkApiKey = exports.validateSchema = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const classes_1 = require("../classes");
const errorResponse_1 = require("../utils/errorResponse");
const constants_1 = require("../constants");
const validateSchema = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error?.details[0].message });
    }
    else {
        next();
    }
};
exports.validateSchema = validateSchema;
const checkApiKey = (req, res, next) => {
    try {
        const apiKey = process.env.API_KEY;
        if (!req.headers.apikey || req?.headers?.apikey !== apiKey) {
            return res.status(401).json((0, errorResponse_1.forbiddenError)());
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
    res.status(statusCode).json({ message });
};
exports.errorHandler = errorHandler;
exports.rateLimitter = (0, express_rate_limit_1.default)({
    windowMs: 2 * 60 * 1000,
    max: 40,
    handler: (req, res) => {
        return res.status(429).json({ message: constants_1.TOO_MANY_REQS });
    },
});
//# sourceMappingURL=index.js.map