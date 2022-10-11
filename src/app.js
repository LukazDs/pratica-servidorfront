import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

app.get("*", async (req, res) => {
  const file = req.url; // se o request for GET /index.html req.url será "/index.html", se for GET /banana/1 será "/banana/1"
  const filePath = path.resolve(`public/${file}`);
  res.sendFile(filePath);
});

app.listen(3000);
