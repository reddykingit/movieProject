import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/search", (req, res) => {
    res.json({ message: "Movie search route placeholder" });
});

router.get("/popular", async (req, res) => {
    try {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
        );
        res.json(data.results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch popular movies" });
    }
});

export default router;