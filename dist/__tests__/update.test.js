"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const constant_1 = require("./constant");
let movieId = '';
beforeAll(async () => {
    const response = await (0, supertest_1.default)(constant_1.BASE_URL)
        .get('/movies')
        .set('apikey', constant_1.API_KEY);
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.body.data).toBeInstanceOf(Array);
    movieId = response.body.data[0]._id;
    expect(movieId).toBeDefined();
});
describe('GET /movies', () => {
    it('responds with status 200 and updates the movie with valid input', async () => {
        const updatedMovie = {
            title: 'Inception Updated',
            genre: 'Science Fiction',
            rating: 9,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id', movieId);
        expect(response.body.data).toHaveProperty('genre', updatedMovie.genre);
        expect(response.body.data).toHaveProperty('title', updatedMovie.title);
        expect(response.body.data).toHaveProperty('rating', updatedMovie.rating);
    });
    it('responds with status 422 when rating is invalid', async () => {
        const updatedMovie = {
            rating: 15,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Rating should be at most 10');
    });
    it('responds with status 200 and updates the movie with only the title', async () => {
        const updatedMovie = {
            title: 'Inception Title Only Updated',
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id', movieId);
        expect(response.body.data).toHaveProperty('title', updatedMovie.title);
    });
    it('responds with status 200 and updates the movie with only the director', async () => {
        const updatedMovie = {
            director: 'Christopher Nolan Updated',
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id', movieId);
        expect(response.body.data).toHaveProperty('director', updatedMovie.director);
    });
    it('responds with status 200 and updates the movie with only the release date', async () => {
        const updatedMovie = {
            releaseDate: '2010-08-01',
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id', movieId);
    });
    it('responds with status 200 and updates the movie with only the genre', async () => {
        const updatedMovie = {
            genre: 'Drama',
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id', movieId);
        expect(response.body.data).toHaveProperty('genre', updatedMovie.genre);
    });
    it('responds with status 200 and updates the movie with only the rating', async () => {
        const updatedMovie = {
            rating: 8,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id', movieId);
        expect(response.body.data).toHaveProperty('rating', updatedMovie.rating);
    });
});
//# sourceMappingURL=update.test.js.map