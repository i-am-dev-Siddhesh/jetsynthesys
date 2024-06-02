"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const supertest_1 = __importDefault(require("supertest"));
const constant_1 = require("./constant");
dotenv_1.default.config();
describe('PUT /movies/:id', () => {
    it('responds with status 200 and updates the movie with valid input', async () => {
        const updatedMovie = {
            title: 'Inception Updated',
            director: 'Christopher Nolan',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 9,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put('/movies/665aac34bc117f3477c360af')
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data).toHaveProperty('_id', '665aac34bc117f3477c360af');
    });
    it('responds with status 422 when title is missing', async () => {
        const updatedMovie = {
            director: 'Christopher Nolan',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 9,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put('/movies/665aac34bc117f3477c360af')
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Title is a required field');
    });
    it('responds with status 422 when director is missing', async () => {
        const updatedMovie = {
            title: 'Inception Updated',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 9,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put('/movies/665aac34bc117f3477c360af')
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Director is a required field');
    });
    it('responds with status 422 when rating is invalid', async () => {
        const updatedMovie = {
            title: 'Inception Updated',
            director: 'Christopher Nolan',
            releaseDate: '2010-07-16',
            genre: 'Science Fiction',
            rating: 15,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put('/movies/665aac34bc117f3477c360af')
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Rating should be at most 10');
    });
    it('responds with status 200 and updates the movie with minimum rating', async () => {
        const updatedMovie = {
            title: 'Memento Updated',
            director: 'Christopher Nolan',
            releaseDate: '2000-10-11',
            genre: 'Thriller',
            rating: 1,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put('/movies/665aac34bc117f3477c360af')
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
    });
    it('responds with status 200 and updates the movie with maximum rating', async () => {
        const updatedMovie = {
            title: 'The Dark Knight Updated',
            director: 'Christopher Nolan',
            releaseDate: '2008-07-18',
            genre: 'Action',
            rating: 10,
        };
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .put('/movies/665aac34bc117f3477c360af')
            .set('apikey', constant_1.API_KEY)
            .send(updatedMovie);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
    });
});
//# sourceMappingURL=update.moview.test.js.map