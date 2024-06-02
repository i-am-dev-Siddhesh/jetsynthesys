import request from 'supertest';
import { API_KEY, BASE_URL } from './constant'; 


describe('GET /movies', () => {
  it('responds with status 200 and retrieves all movies', async () => {
    const response = await request(BASE_URL)
      .get('/movies')
      .set('apikey', API_KEY);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.body.data).toBeInstanceOf(Array);

    if (response.body.data.length > 0) {
      const movie = response.body.data[0];
      expect(movie).toHaveProperty('_id');
      expect(movie).toHaveProperty('title');
      expect(movie).toHaveProperty('director');
      expect(movie).toHaveProperty('releaseDate');
      expect(movie).toHaveProperty('genre');
      expect(movie).toHaveProperty('rating');
    }
  });

  it('responds with status 401 when API key is missing', async () => {
    const response = await request(BASE_URL)
      .get('/movies');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Access to the resource is denied');
  });

  it('responds with status 401 when API key is invalid', async () => {
    const response = await request(BASE_URL)
      .get('/movies')
      .set('apikey', 'invalid_api_key');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Access to the resource is denied');
  });
});
