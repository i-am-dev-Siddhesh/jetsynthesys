import request from 'supertest';
import { API_KEY, BASE_URL } from './constant';

let movieId = '';
beforeAll(async () => {
  const response = await request(BASE_URL)
    .get('/movies')
    .set('apikey', API_KEY);

  expect(response.status).toBe(200);
  expect(response.body.status).toBe(true);
  expect(response.body.data).toBeInstanceOf(Array);

  movieId = response.body.data[0]._id;
  expect(movieId).toBeDefined();
});

describe('GET /movies/:id', () => {
  it('responds with status 200 and retrieves the movie with valid ID', async () => {
    const response = await request(BASE_URL)
      .get(`/movies/${movieId}`)
      .set('apikey', API_KEY);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.body.data).toHaveProperty('_id', movieId);
    expect(response.body.data).toHaveProperty('title');
    expect(response.body.data).toHaveProperty('director');
    expect(response.body.data).toHaveProperty('releaseDate');
    expect(response.body.data).toHaveProperty('genre');
    expect(response.body.data).toHaveProperty('rating');
  });

  it('responds with status 404 when the movie ID does not exist', async () => {
    const invalidId = '60d5ec59f1d2d50015b5a0d5';

    const response = await request(BASE_URL)
      .get(`/movies/${invalidId}`)
      .set('apikey', API_KEY);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Movie not found');
  });

  it('responds with status 400 when the movie ID is invalid', async () => {
    const invalidId = 'invalid_movie_id';

    const response = await request(BASE_URL)
      .get(`/movies/${invalidId}`)
      .set('apikey', API_KEY);

    expect(response.status).toBe(500);
  });
});
