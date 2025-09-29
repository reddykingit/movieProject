import express from "express";
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

import moviesRouter from "./src/routes/movies.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, Movie World!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/api/movies", moviesRouter);


