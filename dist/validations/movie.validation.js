"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieSchema = exports.createMovieSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createMovieSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).max(100).required().messages({
        'string.base': 'Title should be a type of text',
        'string.empty': 'Title cannot be an empty field',
        'string.min': 'Title should have a minimum length of {#limit}',
        'string.max': 'Title should have a maximum length of {#limit}',
        'any.required': 'Title is a required field',
    }),
    director: joi_1.default.string().min(1).max(100).required().messages({
        'string.base': 'Director should be a type of text',
        'string.empty': 'Director cannot be an empty field',
        'string.min': 'Director should have a minimum length of {#limit}',
        'string.max': 'Director should have a maximum length of {#limit}',
        'any.required': 'Director is a required field',
    }),
    releaseDate: joi_1.default.date().iso().required().messages({
        'date.base': 'Release Date should be a valid date',
        'date.iso': 'Release Date should be in ISO 8601 date format',
        'any.required': 'Release Date is a required field',
    }),
    genre: joi_1.default.string().min(1).max(50).required().messages({
        'string.base': 'Genre should be a type of text',
        'string.empty': 'Genre cannot be an empty field',
        'string.min': 'Genre should have a minimum length of {#limit}',
        'string.max': 'Genre should have a maximum length of {#limit}',
        'any.required': 'Genre is a required field',
    }),
    rating: joi_1.default.number().min(1).max(10).required().messages({
        'number.base': 'Rating should be a type of number',
        'number.min': 'Rating should be at least {#limit}',
        'number.max': 'Rating should be at most {#limit}',
        'any.required': 'Rating is a required field',
    }),
});
exports.updateMovieSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).max(100).messages({
        'string.base': 'Title should be a type of text',
        'string.empty': 'Title cannot be an empty field',
        'string.min': 'Title should have a minimum length of {#limit}',
        'string.max': 'Title should have a maximum length of {#limit}',
    }),
    director: joi_1.default.string().min(1).max(100).messages({
        'string.base': 'Director should be a type of text',
        'string.empty': 'Director cannot be an empty field',
        'string.min': 'Director should have a minimum length of {#limit}',
        'string.max': 'Director should have a maximum length of {#limit}',
    }),
    releaseDate: joi_1.default.date().iso().messages({
        'date.base': 'Release Date should be a valid date',
        'date.iso': 'Release Date should be in ISO 8601 date format',
    }),
    genre: joi_1.default.string().min(1).max(50).messages({
        'string.base': 'Genre should be a type of text',
        'string.empty': 'Genre cannot be an empty field',
        'string.min': 'Genre should have a minimum length of {#limit}',
        'string.max': 'Genre should have a maximum length of {#limit}',
    }),
    rating: joi_1.default.number().min(1).max(10).messages({
        'number.base': 'Rating should be a type of number',
        'number.min': 'Rating should be at least {#limit}',
        'number.max': 'Rating should be at most {#limit}',
    }),
}).min(1)
    .messages({
    'object.min': 'At least one field must be updated',
});
