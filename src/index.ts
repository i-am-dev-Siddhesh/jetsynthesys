import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import movieRoutes from './routes/movie.routes';
import { checkApiKey, errorHandler, rateLimitter } from './middlewares';
import connectDB from './clients/db.client';
import helmet from 'helmet';

const main = async () => {
  dotenv.config();
  const app: Express = express();
  const PORT = process.env.PORT || 8000;

  app.set('trust proxy', 1);

  app.use((req, res, next) => {
    bodyParser.json()(req, res, next);
  });

  app.use(checkApiKey);
  app.use(rateLimitter);
  app.use(morgan('combined'));

  connectDB();
  app.use(
    cors({
      origin: [process.env.CLIENT_URL!],
      methods: ['POST', 'PATCH', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
      credentials: true,
    })
  );

  app.use('/v1', movieRoutes);
  app.use(errorHandler);
  app.listen(PORT, () =>
    console.log(`⚡️[server]: Server is running at :${PORT}`)
  );
};

main().catch((err) => {
  console.log('Error Occurred:', err);
  process.exit(1);
});
