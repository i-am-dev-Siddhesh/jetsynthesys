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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.fetchAllMoviews = void 0;
const movie_model_1 = require("../models/movie.model");
const classes_1 = require("../classes");
// @desc    Fetch All Movies from database
// @route   GET /v1/movies
// @access  Public
const fetchAllMoviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movie_model_1.MovieModel.find();
        res.status(200).json({ status: true, data: movies });
        return;
    }
    catch (error) {
        next(error);
        return;
    }
});
exports.fetchAllMoviews = fetchAllMoviews;
// @desc    Create Movie entry in database
// @route   POST /v1/movies
// @access  Public
const createMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const movie = yield movie_model_1.MovieModel.create(body);
        res.status(200).json({ status: true, data: movie });
        return;
    }
    catch (error) {
        next(error);
        return;
    }
});
exports.createMovie = createMovie;
// @desc    Update Movie entry in database
// @route   PUT /v1/movies/:movieId
// @access  Public
const updateMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.movieId;
        const updateFields = req.body;
        const updatedMovie = yield movie_model_1.MovieModel.findByIdAndUpdate(movieId, updateFields, { new: true });
        if (!updatedMovie) {
            throw new classes_1.CustomError(404, 'Movie not found');
        }
        res.status(200).json({ status: true, data: updatedMovie });
        return;
    }
    catch (error) {
        next(error);
        return;
    }
});
exports.updateMovie = updateMovie;
// @desc    Delete a Movie entry from the database
// @route   DELETE /v1/movies/:movieId
// @access  Public
const deleteMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.movieId;
        const deletedMovie = yield movie_model_1.MovieModel.findByIdAndDelete(movieId);
        if (!deletedMovie) {
            throw new classes_1.CustomError(404, 'Movie not found');
        }
        res
            .status(200)
            .json({ status: true, message: 'Movie deleted successfully' });
        return;
    }
    catch (error) {
        next(error);
        return;
    }
});
exports.deleteMovie = deleteMovie;
