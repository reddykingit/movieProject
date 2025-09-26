const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const moviesRouter = require("./src/routes/movies.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, Movie World!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/movies", moviesRouter);
