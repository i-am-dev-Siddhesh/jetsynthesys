"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_URL = exports.API_KEY = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.API_KEY = process.env.API_KEY, exports.BASE_URL = 'http://localhost:8000/v1';
//# sourceMappingURL=constant.js.map