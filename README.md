# Node Movie Finder

This Node.js application allows users to search for movies and fetch similar movies using The Movie Database (TMDb) API. The application serves a web interface where users can input a movie title, view the movie details, and see a list of similar movies.

## Features

- Search for movies by title.
- Display movie details including poster, title, and overview.
- Fetch and display similar movies.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- npm (Node Package Manager) installed.
- A TMDb API key. You can get one by signing up at [The Movie Database API](https://www.themoviedb.org/documentation/api).

## Installation

1. Clone the repository
2. Navigate to project directory
3.install node dependencies: npm install
  -dotenv
	-express
	-path
	-request
	-cors
4. add TMDB API key in .env file
5. Start server : node app.js
6. Open your web browser and navigate to ‘http://localhosthost:3000’
7. Use search form to find movies by entering a movie title and clicking the “search” button
   -results will show movie entered and similar movies based on the movie id
