export const setUser = (state = {}, action) => {
  const { userInfo, type } = action;
  return {
    ...state,
    type,
    user: userInfo,
  };
};
