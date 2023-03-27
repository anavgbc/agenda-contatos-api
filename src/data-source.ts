import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";

const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: ["src/entities/*.ts"],
      migrations: ["src/migrations/*.ts"],
    };
  }
  return {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,

    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
  };
};

const configDb = setDataSourceConfig();

export const AppDataSource = new DataSource(configDb);
