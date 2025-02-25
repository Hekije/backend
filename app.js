const express = require("express");
console.log("Loading Song model from:", __dirname + '/models/song');
const Song = require("./models/song"); 

const app = express();

app.use(express.json());

const router = express.Router();

// Define the GET route to fetch all songs
router.get("/songs", async (req, res) => {
    try {
        const songs = await Song.find({})
        res.status(200).send(songs)
        console.log(songs)
    } catch (err) {
        console.error(err)
        res.status(500).send("Server error");
    }
})

app.use("/api", router)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})
