import mongoose from "mongoose";
import config from "config";
import log from "../logger";

export function connect() {
  const DBUri = `mongodb://${config.get("mongo.host")}:${config.get(
    "mongo.port"
  )}/${config.get("mongo.db")}` as string;
  return mongoose
    .connect(DBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info(`Database connected to ${DBUri}`);
    })
    .catch((error) => {
      log.error("Database error", error);
      process.exit(1);
    });
}
