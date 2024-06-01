import express from 'express';

import {
  createMovie,
  deleteMovie,
  fetchAllMoviews,
  fetchMovieByID,
  updateMovie,
} from '../controllers/movie.controller';
import { validateSchema } from '../middlewares/index';
import {
  createMovieSchema,
  updateMovieSchema,
} from '../validations/movie.validation';

const router = express.Router({ mergeParams: true });

router
  .route('/movies')
  .post(validateSchema(createMovieSchema), createMovie)
  .get(fetchAllMoviews);

router
  .route('/movies/:movieId')
  .get(fetchMovieByID)
  .put(validateSchema(updateMovieSchema), updateMovie)
  .delete(deleteMovie);

export default router;
