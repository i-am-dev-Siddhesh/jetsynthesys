import Joi from 'joi';

export const createMovieSchema = Joi.object({
  title: Joi.string().min(1).max(100).required().messages({
    'string.base': 'Title should be a type of text',
    'string.empty': 'Title cannot be an empty field',
    'string.min': 'Title should have a minimum length of {#limit}',
    'string.max': 'Title should have a maximum length of {#limit}',
    'any.required': 'Title is a required field',
  }),
  director: Joi.string().min(1).max(100).required().messages({
    'string.base': 'Director should be a type of text',
    'string.empty': 'Director cannot be an empty field',
    'string.min': 'Director should have a minimum length of {#limit}',
    'string.max': 'Director should have a maximum length of {#limit}',
    'any.required': 'Director is a required field',
  }),
  releaseDate: Joi.date().iso().required().messages({
    'date.base': 'Release Date should be a valid date',
    'date.iso': 'Release Date should be in ISO 8601 date format',
    'any.required': 'Release Date is a required field',
  }),
  genre: Joi.string().min(1).max(50).required().messages({
    'string.base': 'Genre should be a type of text',
    'string.empty': 'Genre cannot be an empty field',
    'string.min': 'Genre should have a minimum length of {#limit}',
    'string.max': 'Genre should have a maximum length of {#limit}',
    'any.required': 'Genre is a required field',
  }),
  rating: Joi.number().min(1).max(10).required().messages({
    'number.base': 'Rating should be a type of number',
    'number.min': 'Rating should be at least {#limit}',
    'number.max': 'Rating should be at most {#limit}',
    'any.required': 'Rating is a required field',
  }),
});

export const updateMovieSchema = Joi.object({
  title: Joi.string().min(1).max(100).messages({
    'string.base': 'Title should be a type of text',
    'string.empty': 'Title cannot be an empty field',
    'string.min': 'Title should have a minimum length of {#limit}',
    'string.max': 'Title should have a maximum length of {#limit}',
  }),
  director: Joi.string().min(1).max(100).messages({
    'string.base': 'Director should be a type of text',
    'string.empty': 'Director cannot be an empty field',
    'string.min': 'Director should have a minimum length of {#limit}',
    'string.max': 'Director should have a maximum length of {#limit}',
  }),
  releaseDate: Joi.date().iso().messages({
    'date.base': 'Release Date should be a valid date',
    'date.iso': 'Release Date should be in ISO 8601 date format',
  }),
  genre: Joi.string().min(1).max(50).messages({
    'string.base': 'Genre should be a type of text',
    'string.empty': 'Genre cannot be an empty field',
    'string.min': 'Genre should have a minimum length of {#limit}',
    'string.max': 'Genre should have a maximum length of {#limit}',
  }),
  rating: Joi.number().min(1).max(10).messages({
    'number.base': 'Rating should be a type of number',
    'number.min': 'Rating should be at least {#limit}',
    'number.max': 'Rating should be at most {#limit}',
  }),
}).min(1)
  .messages({
    'object.min': 'At least one field must be updated',
  });
