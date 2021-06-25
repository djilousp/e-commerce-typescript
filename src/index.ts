import express from "express";
import log from "./logger";
import user from "./routes/user.routes";
import { connect } from "./db/connect";

const app: any = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", user);
app.listen(3000, () => {
  log.info("The application is listening on port 3000!");
  connect();
});
