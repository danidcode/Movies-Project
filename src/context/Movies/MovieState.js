import axios from "axios";
import React, { useReducer } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
const API_KEY = "3416eebbeee3a8c56f4c2d69581980d4";
const MovieState = (props) => {
  //initializing global state
  const initialState = {
    movies: [],
    selectedMovie: null,
    page: 1, //by default the first page will be 1
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);
  //Method to get all of the movies
  const getMovies = async () => {
    const res = await axios.get(
      //Calling the api to get the movies by a determinate page
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${state.page}`
    );

    dispatch({
      type: "GET_MOVIES",
      payload: res.data.results,
    });
  };
  //Method to get a specif movie
  const getOneMovie = async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    dispatch({
      type: "GET_MOVIE",
      payload: res.data,
    });
  };

  const setPage = (page) => {
    dispatch({
      type: "SET_PAGE",
      payload: page,
    });
  };

  return (
    <MovieContext.Provider //Provider which provides all of the global states and methods
      value={{
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        page: state.page,
        setPage,
        getMovies,
        getOneMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
