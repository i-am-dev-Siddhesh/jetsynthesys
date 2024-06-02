"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const supertest_1 = __importDefault(require("supertest"));
const constant_1 = require("./constant");
dotenv_1.default.config();
describe('POST /movies', () => {
    it('responds with status 201 and creates a new movie with valid input', async () => {
        const newMovie = {
            title: 'Inception',
            director: 'Christopher Nolan',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 9,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .post('/movies')
            .set('apikey', constant_1.API_KEY)
            .send(newMovie);
        expect(response.status).toBe(201);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id');
    });
    it('responds with status 422 when title is missing', async () => {
        const newMovie = {
            director: 'Christopher Nolan',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 9,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .post('/movies')
            .set('apikey', constant_1.API_KEY)
            .send(newMovie);
        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Title is a required field');
    });
    it('responds with status 422 when director is missing', async () => {
        const newMovie = {
            title: 'Inception',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 9,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .post('/movies')
            .set('apikey', constant_1.API_KEY)
            .send(newMovie);
        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Director is a required field');
    });
    it('responds with status 422 when rating is invalid', async () => {
        const newMovie = {
            title: 'Inception',
            director: 'Christopher Nolan',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 15,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .post('/movies')
            .set('apikey', constant_1.API_KEY)
            .send(newMovie);
        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Rating should be at most 10');
    });
    it('responds with status 201 and creates a new movie with minimum rating', async () => {
        const newMovie = {
            title: 'Memento',
            director: 'Christopher Nolan',
            releaseDate: '2000-10-11',
            genre: 'Thriller',
            rating: 1,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .post('/movies')
            .set('apikey', constant_1.API_KEY)
            .send(newMovie);
        expect(response.status).toBe(201);
        expect(response.body.status).toBe(true);
    });
    it('responds with status 201 and creates a new movie with maximum rating', async () => {
        const newMovie = {
            title: 'The Dark Knight',
            director: 'Christopher Nolan',
            releaseDate: '2008-07-18',
            genre: 'Action',
            rating: 10,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .post('/movies')
            .set('apikey', constant_1.API_KEY)
            .send(newMovie);
        expect(response.status).toBe(201);
        expect(response.body.status).toBe(true);
    });
});
//# sourceMappingURL=create.test.js.map