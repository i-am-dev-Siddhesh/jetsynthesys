import { NextFunction, Request, Response } from 'express';
import { MovieModel } from '../models/movie.model';
import { CustomError } from '../classes';

// @desc    Fetch All Movies from database
// @route   GET /v1/movies
// @access  Public
export const fetchAllMoviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json({ status: true, data: movies });
    return;
  } catch (error: any) {
    next(error);
    return;
  }
};

// @desc    Create Movie entry in database
// @route   POST /v1/movies
// @access  Public
export const createMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const movie = await MovieModel.create(body);
    res.status(200).json({ status: true, data: movie });
    return;
  } catch (error) {
    next(error);
    return;
  }
};

// @desc    Update Movie entry in database
// @route   PUT /v1/movies/:movieId
// @access  Public
export const updateMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieId = req.params.movieId;
    const updateFields = req.body;

    const updatedMovie = await MovieModel.findByIdAndUpdate(
      movieId,
      updateFields,
      { new: true }
    );

    if (!updatedMovie) {
      throw new CustomError(404, 'Movie not found');
    }

    res.status(200).json({ status: true, data: updatedMovie });
    return;
  } catch (error: any) {
    next(error);
    return;
  }
};

// @desc    Delete a Movie entry from the database
// @route   DELETE /v1/movies/:movieId
// @access  Public
export const deleteMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieId = req.params.movieId;
    const deletedMovie = await MovieModel.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      throw new CustomError(404, 'Movie not found');
    }
    res
      .status(200)
      .json({ status: true, message: 'Movie deleted successfully' });
    return;
  } catch (error: any) {
    next(error);
    return;
  }
};
