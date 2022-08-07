import { GET_MOVIES } from "../Types";
import { GET_MOVIE } from "../Types";
import { SET_PAGE } from "../Types";
import { SET_TOKEN } from "../Types";

export default (state, action) => {
  let { payload, type } = action;

  //Conditional to avoid a bug because of page limits
  if (payload == 0) {
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
        selectedMovie: payload,
      };
    case SET_PAGE:
      return {
        page: payload,
      };
      case SET_TOKEN:
      return {
       token: payload,
      };
  }
};
