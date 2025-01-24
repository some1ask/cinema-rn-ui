import axios from "axios";
import { API_KEY } from "@env";
const api = API_KEY;

const apiBaseUrl = "https://api.themoviedb.org/3";


//endpoints
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${api}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${api}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${api}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${api}`;

//images
export const image500 = path => path? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342 = path => path? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const image185 = path => path? `https://image.tmdb.org/t/p/w185/${path}` : null;



//movie

const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?api_key=${api}`;
const movieCreditsEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${api}`;
const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${api}`;



//person
const personDetailsEndpoint = id => `${apiBaseUrl}/person/${id}?api_key=${api}`;
const personMoviesEndpoint = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${api}`;

//search




const apiCall = async (endpoint,params) => {
const options = {
    method: "GET",
    url: endpoint,
    params: params? params : {},
}

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return{error: error.message};
  }
}

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export const fetchMovieDetails = id => {
  return apiCall(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = id => {
  return apiCall(movieCreditsEndpoint(id));
};

export const fetchSimilarMovies = id => {
  return apiCall(similarMoviesEndpoint(id));
};

export const fetchPersonDetails = id => {
  return apiCall(personDetailsEndpoint(id));
};

export const fetchPersonMovies = id => {
  return apiCall(personMoviesEndpoint(id));
};

export const searchMovies = params => {
  return apiCall(searchMoviesEndpoint,params);
};
