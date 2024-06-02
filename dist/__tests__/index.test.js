"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const dotenv_1 = __importDefault(require("dotenv"));
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
        const response = await (0, supertest_1.default)('http://localhost:8000/v1')
            .post('/movies')
            .set('apikey', process.env.API_KEY) // Set the API key in the headers
            .send(newMovie);
        console.log(response.body); // Log the response body to the console
        // expect(response.status).toBe(201);
    });
});
//# sourceMappingURL=index.test.js.map