const request = require('request');
const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const APIKey = process.env.API_KEY;

//serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views')));

app.use(cors()); // Enable CORS for all routes

app.get('/search', (req, res) => {
    console.log("im here");
    const { title } = req.query;
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + APIKey + '&query=' + `${encodeURIComponent(title)}`;

    request(url, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            res.status(500).json({ message: 'Failed to fetch movie details.' });
            return;
        }

        const movie = JSON.parse(body).results[0];
        res.json(movie);
    });
});

// route to fetch similar movies
app.get('/movies/similar', (req, res) => {
    const { id } = req.query;
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${APIKey}`;

    request(url, (error, response, body) => {
        if (error || response.statusCode!== 200) {
            res.status(500).json({ message: 'Failed to fetch similar movies.'});
            return;
        }

        const similarMovies = JSON.parse(body).results;
        res.json(similarMovies);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});