"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const db_config_1 = __importDefault(require("../configs/db.config"));
const sequelize_1 = require("sequelize");
const pg_1 = require("pg");
if (['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql'].indexOf(db_config_1.default.dialect.toLowerCase()) === -1) {
    console.error(`dialect not found: ${db_config_1.default.dialect}`);
    process.exit();
}
const createTableIfNotExists = async () => {
    try {
        switch (db_config_1.default.dialect.toLocaleLowerCase()) {
            case "postgres":
                const client = new pg_1.Client({
                    host: db_config_1.default.HOST,
                    user: db_config_1.default.USER,
                    password: db_config_1.default.PASSWORD,
                    database: "postgres"
                });
                await client.connect();
                const result = await client.query(`select 1 from pg_catalog.pg_database where datname = '${db_config_1.default.DB_NAME}'`);
                if (result.rowCount === 0) {
                    console.log(`database not exists creating...`);
                    await client.query(`create database ${db_config_1.default.DB_NAME}`);
                }
                console.log(`database ${db_config_1.default.DB_NAME} ${result.rowCount === 0 ? "created!" : "exists"}`);
                break;
            default:
                console.log(`no default create table for dialect ${db_config_1.default.dialect.toLocaleLowerCase()}`);
        }
    }
    catch (e) {
        console.error(e);
    }
};
const sequelize = new sequelize_1.Sequelize(db_config_1.default.DB_NAME, db_config_1.default.USER, db_config_1.default.PASSWORD, {
    host: db_config_1.default.HOST,
    dialect: db_config_1.default.dialect.toLowerCase(),
    pool: {
        ...db_config_1.default.pool
    },
});
exports.sequelize = sequelize;
exports.default = {
    createDatabaseIfNotExists: createTableIfNotExists,
    sequelize
};
//# sourceMappingURL=index.js.map