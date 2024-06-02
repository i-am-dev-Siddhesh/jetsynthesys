declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    SERVER_ENV: string;
    MONGO_URI: string;
    API_KEY: string;
  }
}
