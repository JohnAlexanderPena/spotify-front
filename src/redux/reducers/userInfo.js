import { setUser } from "../actions/userInfo";

export default (
  state = {
    user: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_USER":
      return setUser(state, action);
    default:
      return state;
  }
};
