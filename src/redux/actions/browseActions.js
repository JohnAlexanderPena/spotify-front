export const setBrowse = (state = {}, action) => {
  const { categories } = action;
  return {
    ...state,
    isActive: true,
    categories,
  };
};
