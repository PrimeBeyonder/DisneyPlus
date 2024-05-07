import axios from "axios";
const api_key = 'cf8651048ec60fd028b4726cfad3b2b6';
const movieBaseUrl = "https://api.themoviedb.org/3";

const movieByGenreBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const getTreandingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) => {
    return axios.get(movieByGenreBaseUrl + "&with_genres=" + id);
}
export default {
    getTreandingVideos,
    getMovieByGenreId,
}