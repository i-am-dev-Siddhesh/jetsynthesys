declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    SERVER_ENV: string;
    MONGO_URI: string;
    API_KEY: string;
  }
}
