import data from './data.js';
import searchMovie from './utils/search-movies.js';

//dom
const dom = {
    userInput: document.getElementById('user-input'),
    moviesContainer: document.getElementById('movies-container')
};

//component
const loadMovies = (movies = []) => {
    dom.moviesContainer.innerHTML = '';

    if (movies.length === 0) {
        //if there is no movies
        const noMovies = document.createElement('p');
        noMovies.classList.add('no-movies');
        noMovies.textContent = 'Upppps, no movie found';
        dom.moviesContainer.append(noMovies);
    }

    movies.forEach((movie) => {
        //create a section for a movie
        const movieSection = document.createElement('div');
        movieSection.classList.add('movie-section');

        //add poster
        const poster = document.createElement('img');
        poster.classList.add('movie-poster');
        poster.src = movie.src;

        //add movie title
        const title = document.createElement('p');
        title.classList.add('movie-title');
        title.innerText = movie.title;

        //append title and poster to section
        movieSection.append(poster, title);

        dom.moviesContainer.append(movieSection);
    });
};

//events
dom.userInput.addEventListener('input', (e) => {
    loadMovies(searchMovie(data.movies, e.target.value));
});

window.addEventListener('load', () => {
    loadMovies(searchMovie(data.movies));
});
