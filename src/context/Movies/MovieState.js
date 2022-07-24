import axios from "axios";
import React, { useReducer } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    selectedMovie: null
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);
  //Method to get all of the movies
  const getMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3416eebbeee3a8c56f4c2d69581980d4"
    );

    dispatch({
      type: "GET_MOVIES",
      payload: res.data.results,
    });
  };
  //Method to get a specif movie
  const getOneMovie = async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3416eebbeee3a8c56f4c2d69581980d4`
    );

    
    dispatch({
      type: "GET_MOVIE",
      payload: res.data,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        getMovies,
        getOneMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
