"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../controllers/movie.controller");
const index_1 = require("../middlewares/index");
const movie_validation_1 = require("../validations/movie.validation");
const router = express_1.default.Router({ mergeParams: true });
router
    .route('/movies')
    .post((0, index_1.validateSchema)(movie_validation_1.createMovieSchema), movie_controller_1.createMovie)
    .get(movie_controller_1.fetchAllMoviews);
router
    .route('/movies/:movieId')
    .get(movie_controller_1.fetchMovieByID)
    .put((0, index_1.validateSchema)(movie_validation_1.updateMovieSchema), movie_controller_1.updateMovie)
    .delete(movie_controller_1.deleteMovie);
exports.default = router;
