export const setBrowse = (state = {}, action) => {
  const { categories } = action.cats;
  return {
    ...state,
    isActive: true,
    categories,
  };
};
