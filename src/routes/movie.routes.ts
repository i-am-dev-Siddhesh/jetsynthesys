import express from 'express';

import { validateSchema } from '../middlewares/index';
import {
  createMovieSchema,
  updateMovieSchema,
} from '../validations/movie.validation';
import {
  createMovie,
  deleteMovie,
  fetchAllMoviews,
  updateMovie,
} from '../controllers/movie.controller';

const router = express.Router({ mergeParams: true });

router
  .route('/movies')
  .post(validateSchema(createMovieSchema), createMovie)
  .get(fetchAllMoviews);

router
  .route('/movies/:movieId')
  .put(validateSchema(updateMovieSchema), updateMovie)
  .delete(deleteMovie);

export default router;
