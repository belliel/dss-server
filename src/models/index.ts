import dbConfig from "../configs/db.config"
import { Dialect, ModelCtor, Sequelize, Model } from "sequelize";
import { Client } from "pg"


if (['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql'].indexOf(dbConfig.dialect.toLowerCase()) === -1) {
    console.error(`dialect not found: ${dbConfig.dialect}`)
    process.exit()
}

const createTableIfNotExists = async () => {
    try {
        switch (dbConfig.dialect.toLocaleLowerCase()) {
            case "postgres":
                const client = new Client({
                    host: dbConfig.HOST,
                    user: dbConfig.USER,
                    password: dbConfig.PASSWORD,
                    database: "postgres"
                })
                await client.connect()
                const result = await client.query(`select 1 from pg_catalog.pg_database where datname = '${dbConfig.DB_NAME}'`)
                if (result.rowCount === 0) {
                    console.log(`database not exists creating...`)
                    await client.query(`create database ${dbConfig.DB_NAME}`)
                }
                console.log(`database ${dbConfig.DB_NAME} ${result.rowCount === 0 ? "created!" : "exists"}`)
                break;
            default:
                console.log(`no default create table for dialect ${dbConfig.dialect.toLocaleLowerCase()}`)
        }
    } catch (e) {
        console.error(e)
    }
}

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect.toLowerCase() as Dialect,

    pool: {
        ...dbConfig.pool
    },
})

export default { 
    createDatabaseIfNotExists: createTableIfNotExists,
    sequelize
}

export {
    sequelize
}