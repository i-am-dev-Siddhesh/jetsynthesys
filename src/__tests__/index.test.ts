import dotenv from 'dotenv';
import request from 'supertest';
import { API_KEY, BASE_URL } from './constant'; // Import the constant from constants.ts

dotenv.config();

describe('POST /movies', () => {
  it('responds with status 201 and creates a new movie with valid input', async () => {
    const newMovie = {
      title: 'Inception',
      director: 'Christopher Nolan',
      releaseDate: '2010-07-16',
      genre: 'Science Fiction',
      rating: 9,
    };

    const response = await request(BASE_URL)
      .post('/movies')
      .set('apikey', API_KEY)
      .send(newMovie);

    expect(response.body.status).toBe(true);
  });
});
