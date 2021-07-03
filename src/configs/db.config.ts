import { Dialect } from "sequelize/types";

export default {
    HOST: process.env.DATABASE_HOST || "localhost",
    USER: process.env.DATABASE_USER || "postgres",
    PASSWORD: process.env.DATABASE_PASSWORD || "123",
    DB_NAME: process.env.DATABASE_NAME || "tisot",
    dialect: process.env.DATABASE_DIALECT || "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}