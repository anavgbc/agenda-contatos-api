import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Contacts } from "./entities/contact.entity";
import { initialMigration1679922949927 } from "./migrations/1679922949927-initialMigration";
import { createTables1679922962557 } from "./migrations/1679922962557-createTables";
import "dotenv/config";

const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [User, Contacts],
      migrations: [initialMigration1679922949927, createTables1679922962557],
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
