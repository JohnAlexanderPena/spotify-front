import { setBrowse } from "../actions/browseActions";

export default (state = {}, action) => {
  switch (action.type) {
    case "SET_BROWSE":
      return setBrowse(state, action);
    default:
      return state;
  }
};
