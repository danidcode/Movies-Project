import { GET_MOVIES } from "../Types";
import { GET_MOVIE } from "../Types";
import { SET_PAGE } from "../Types";

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
        selectedMovie: payload,
      };
    case SET_PAGE:
      return {
        page: payload,
      };
  }
};
