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
    token: null,
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

  const generateToken = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    );
    dispatch({
      type: "SET_TOKEN",
      payload: res.data.request_token,
    });
  };

  const sendLogin = async (name, password) => {
    let loginRequest = {
      username: name,
      password: password,
      request_token: state.token,
    };
    try {
      let res = await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
        loginRequest
      );
      if (res.status === 200) {
        return "logged";
      }
    } catch (err) {
      return err.response.status;
    }
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
        generateToken,
        sendLogin,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
