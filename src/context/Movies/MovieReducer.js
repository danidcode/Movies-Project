import { GET_MOVIES } from "../Types";
import { GET_MOVIE } from "../Types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIE:
      return {
        movies: [...state.movies, payload],
      };
  }
};
