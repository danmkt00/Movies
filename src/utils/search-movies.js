/**
 * Check matching to the input films in array
*
 * @param {Array} [movies = []] - The array of movies
 * @param {string} [titleSearch = ''] - The title that we search in movies
 * @returns {Array} - A shallow copy of the array with filtered objects
 */

const searchMovies = (movies = [], titleSearch = '') =>
    movies.filter((movie) =>
        movie.title.toLowerCase().includes(titleSearch.toLowerCase())
    );

export default searchMovies;
