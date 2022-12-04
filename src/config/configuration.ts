export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
