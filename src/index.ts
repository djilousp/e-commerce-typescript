import express from "express";
import log from "./logger";
import user from "./routes/user.routes";
import session from "./routes/session.routes";
import shop from "./routes/shop.routes";
import product from "./routes/product.routes";
import { connect } from "./db/connect";
import deserializeUser from "./helpers/deserializeUser";
const app: any = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);
app.use("/api/users", user);
app.use("/api/sessions", session);
app.use("/api/shops", shop);
app.use("/api/products", product);
app.listen(3000, () => {
  log.info("The application is listening on port 3000!");
  connect();
});
