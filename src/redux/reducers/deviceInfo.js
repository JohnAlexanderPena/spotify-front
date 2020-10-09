import { setDevice } from "../actions/deviceInfo";

export default (
  state = {
    device: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_DEVICE":
      return setDevice(state, action);
    default:
      return state;
  }
};
