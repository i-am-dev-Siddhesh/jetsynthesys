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
describe('Delete /movies/:id', () => {
    it('responds with status 200 and deletes the movie with valid ID', async () => {
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .delete(`/movies/${movieId}`)
            .set('apikey', constant_1.API_KEY);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.message).toBe('Movie deleted successfully');
    });
    it('responds with status 404 when the movie ID does not exist', async () => {
        const invalidId = '60d5ec59f1d2d50015b5a0d5';
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .delete(`/movies/${invalidId}`)
            .set('apikey', constant_1.API_KEY);
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Movie not found');
    });
});
//# sourceMappingURL=delet.test.js.map