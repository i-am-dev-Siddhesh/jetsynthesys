"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
const middlewares_1 = require("./middlewares");
const db_client_1 = __importDefault(require("./clients/db.client"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 8000;
    app.set('trust proxy', 1);
    app.use((req, res, next) => {
        body_parser_1.default.json()(req, res, next);
    });
    app.use(middlewares_1.checkApiKey);
    app.use(middlewares_1.rateLimitter);
    app.use((0, morgan_1.default)('combined'));
    (0, db_client_1.default)();
    app.use((0, cors_1.default)({
        origin: [process.env.CLIENT_URL],
        methods: ['POST', 'PATCH', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
        credentials: true,
    }));
    app.use('/v1', movie_routes_1.default);
    app.use(middlewares_1.errorHandler);
    app.listen(PORT, () => console.log(`⚡️[server]: Server is running at :${PORT}`));
});
main().catch((err) => {
    console.log('Error Occurred:', err);
    process.exit(1);
});
