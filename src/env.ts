export const ENV = {
  PORT: process.env.RUN_PORT || '5000',
  POSTGRES_DATABASE_URL:
    process.env.POSTGRES_DATABASE_URL ||
    'postgres://postgres:passw0rd@localhost:5432/postgres',
};
