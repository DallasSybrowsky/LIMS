import express, { urlencoded, json } from "express";
import { once } from "./config/connection";
import routes from "./routes";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(routes);
once("open", () => {
  app.listen(PORT, () => {
    console.log("Server currently running on port${PORT}!");
  });
});
