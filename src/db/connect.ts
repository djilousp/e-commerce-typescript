import mongoose from "mongoose";
import config from "config";
import log from "../logger";

export function connect() {
  const DBUri = `mongodb://${config.get("mongo.host")}:${config.get(
    "mongo.port"
  )}` as string;
  return mongoose
    .connect(DBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}
