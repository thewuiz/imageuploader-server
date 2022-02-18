import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

//Rutas
app.use("/upload", require("./routes/uploader.route"));

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`)
);
