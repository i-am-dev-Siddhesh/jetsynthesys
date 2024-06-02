"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const constant_1 = require("./constant");
describe('GET /movies', () => {
    it('responds with status 200 and retrieves all movies', async () => {
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .get('/movies')
            .set('apikey', constant_1.API_KEY);
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
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .get('/movies');
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Access to the resource is denied');
    });
    it('responds with status 401 when API key is invalid', async () => {
        const response = await (0, supertest_1.default)(constant_1.BASE_URL)
            .get('/movies')
            .set('apikey', 'invalid_api_key');
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Access to the resource is denied');
    });
});
//# sourceMappingURL=get.test.js.map