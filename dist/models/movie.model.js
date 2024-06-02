"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, minlength: 1, maxlength: 100 },
    director: { type: String, required: true, minlength: 1, maxlength: 100 },
    releaseDate: { type: Date, required: true },
    genre: { type: String, required: true, minlength: 1, maxlength: 50 },
    rating: { type: Number, required: true, min: 1, max: 10 },
}, { timestamps: true });
exports.MovieModel = mongoose_1.default.model('Movie', movieSchema);
//# sourceMappingURL=movie.model.js.map