const express = require("express");
const app = express();
const PORT = 3000;
const moviesRouter = require(".src/routes/movies");

app.get("/", (req, res) => {
    res.send("Hello, Movie World!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/movies", moviesRouter);
