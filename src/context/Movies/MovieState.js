import axios from "axios";
import React, { useReducer } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";

const MovieState = (props) => {
  const initialState = {
    movies: [],
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);
  const getMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3416eebbeee3a8c56f4c2d69581980d4");
    console.log(res.data.results);

    dispatch({
      type: "GET_MOVIES",
      payload: res.data.results,
    });
  };
  
  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        getMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
