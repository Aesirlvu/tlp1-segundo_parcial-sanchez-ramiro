import express from "express";
import morgan from "morgan";
import router from "./src/routes/books.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const PORT = 3000;
const URL = "http://localhost";

app.get("/", (req, res) => {
  res.send("Hola mundo!💖");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor en: ${URL}:${PORT}`);
});
