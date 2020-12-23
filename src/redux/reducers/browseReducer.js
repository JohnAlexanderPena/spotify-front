import { setBrowse, setPage } from "../actions/browseActions";

export default (
  state = {
    currentPage: "Home",
  },
  action
) => {
  switch (action.type) {
    case "SET_BROWSE":
      return setBrowse(state, action);
    case "SET_PAGE":
      return setPage(state, action);
    default:
      return state;
  }
};
