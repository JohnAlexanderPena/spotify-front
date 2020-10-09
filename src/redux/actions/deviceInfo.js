export const setDevice = (state = {}, action) => {
  const { device } = action;
  return {
    ...state,
    device,
  };
};
