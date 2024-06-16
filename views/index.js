document.getElementById('search-form').addEventListener('submit', function(event) {
    console.log("hola")
    event.preventDefault(); // Prevent the default form submission behavior

    const searchInput = document.getElementById('search-input').value;
    fetch(`http://localhost:3000/search?title=${encodeURIComponent(searchInput)}`)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
            fetchSimilarMovies(data.id);
        })
        .catch(error => console.error('Error fetching movie:', error));
});

function displayMovieDetails(movie) {
    const searchResultsDiv = document.getElementById('search-results');
    searchResultsDiv.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p id="search-overview">${movie.overview}</p>
    `;
}

function fetchSimilarMovies(movieId) {
    fetch(`http://localhost:3000/movies/similar?id=${movieId}`)
      .then(response => response.json())
      .then(similarMovies => {
            const otherMoviesDiv = document.getElementById('other-movies');
            otherMoviesDiv.innerHTML = '';
            similarMovies.forEach(movie => {
                otherMoviesDiv.innerHTML += `
                    <div class="movie-card">
                        <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="${movie.title}">
                        <h3>${movie.title}</h3>
                        <p>${movie.overview}</p>
                    </div>
                `;
            });
        })
      .catch(error => console.error('Error fetching similar movies:', error));
}