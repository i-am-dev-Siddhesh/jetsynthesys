import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './clients/db.client';
import { checkApiKey, errorHandler, rateLimitter } from './middlewares';
import movieRoutes from './routes/movie.routes';

const serverInitializeFn = async () => {
  const app: Express = express();
  const PORT = process.env.PORT || 8000;

  app.set('trust proxy', 1);

  // API key middleware
  app.use(express.json());
  app.use(checkApiKey);
  app.use(rateLimitter);
  app.use(morgan('combined'));
  app.use(helmet());
  
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
    console.log(`⚡️[server]: Server is running at ${PORT}`)
  );
};

const main = async () => {
  dotenv.config();
  await connectDB();
  
  serverInitializeFn().catch((_err) => {
    process.exit(1);
  });
};

main();
