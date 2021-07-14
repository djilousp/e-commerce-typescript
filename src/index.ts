import express from "express";
import log from "./logger";
import user from "./routes/user.routes";
import session from "./routes/session.routes";
import shop from "./routes/shop.routes";
import { connect } from "./db/connect";
import deserializeUser from "./helpers/deserializeUser";
const app: any = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);
app.use("/api/user", user);
app.use("/api/session", session);
app.use("/api/shop", shop);
app.listen(3000, () => {
  log.info("The application is listening on port 3000!");
  connect();
});
