import mongoose from 'mongoose';

export interface IMovie extends mongoose.Document {
  title: string;
  director: string;
  releaseDate: Date;
  genre: string;
  rating: number;
}

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 1, maxlength: 100 },
    director: { type: String, required: true, minlength: 1, maxlength: 100 },
    releaseDate: { type: Date, required: true },
    genre: { type: String, required: true, minlength: 1, maxlength: 50 },
    rating: { type: Number, required: true, min: 1, max: 10 },
  },
  { timestamps: true }
);

export const MovieModel = mongoose.model<IMovie>('Movie', movieSchema);
