import { AppDataSource } from "./data-source";
import app from "./app";

(async () => {
  await AppDataSource.initialize()
    .then(() => console.log("Data Source initialized"))
    .catch((err) =>
      console.error("Error during Data Source initialization", err)
    );

  app.listen(3000, () => console.log("servidor executado"));
})();
