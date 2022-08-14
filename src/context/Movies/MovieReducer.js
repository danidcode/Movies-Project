import { GET_MOVIES } from "../Types";
import { GET_MOVIE } from "../Types";
import { SET_PAGE } from "../Types";
import { SET_TOKEN } from "../Types";
import { SET_LOADING } from "../Types";

export default (state, action) => {
  let { payload, type } = action;
  //Conditional to avoid a bug because of page limits
  if (payload === 0) {
    payload = 20;
  } else if (payload == 21) {
    payload = 1;
  }

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        selectedMovie: payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };
      case SET_TOKEN:
      return {
        ...state,
       token: payload,
      };
      case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
  }
};
