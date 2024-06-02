"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.fetchMovieByID = exports.fetchAllMoviews = void 0;
const movie_model_1 = require("../models/movie.model");
const classes_1 = require("../classes");
// @desc    Fetch All Movies from database
// @route   GET /v1/movies
// @access  Public
const fetchAllMoviews = async (req, res, next) => {
    try {
        const movies = await movie_model_1.MovieModel.find();
        res.status(200).json({ status: true, data: movies });
        return;
    }
    catch (error) {
        next(error);
        return;
    }
};
exports.fetchAllMoviews = fetchAllMoviews;
// @desc    Fetch Single Movie from database based on Id
// @route   GET /v1/movies/:movieId
// @access  Public
const fetchMovieByID = async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const movie = await movie_model_1.MovieModel.findById(movieId);
        res.status(200).json({ status: true, data: movie });
        return;
    }
    catch (error) {
        next(error);
        return;
    }
};
exports.fetchMovieByID = fetchMovieByID;
// @desc    Create Movie entry in database
// @route   POST /v1/movies
// @access  Public
const createMovie = async (req, res, next) => {
    try {
        console.log('line 51');
        const body = req.body;
        const movie = await movie_model_1.MovieModel.create(body);
        res.status(201).json({ status: true, data: movie });
        return;
    }
    catch (error) {
        console.log('line 58');
        next(error);
        return;
    }
};
exports.createMovie = createMovie;
// @desc    Update Movie entry in database
// @route   PUT /v1/movies/:movieId
// @access  Public
const updateMovie = async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const updateFields = req.body;
        const updatedMovie = await movie_model_1.MovieModel.findByIdAndUpdate(movieId, updateFields, { new: true });
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
};
exports.updateMovie = updateMovie;
// @desc    Delete a Movie entry from the database
// @route   DELETE /v1/movies/:movieId
// @access  Public
const deleteMovie = async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const deletedMovie = await movie_model_1.MovieModel.findByIdAndDelete(movieId);
        if (!deletedMovie) {
            throw new classes_1.CustomError(404, 'Movie not found');
        }
        res
            .status(204)
            .json({ status: true, message: 'Movie deleted successfully' });
        return;
    }
    catch (error) {
        next(error);
        return;
    }
};
exports.deleteMovie = deleteMovie;
//# sourceMappingURL=movie.controller.js.map