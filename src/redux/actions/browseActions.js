export const setBrowse = (state = {}, action) => {
  const { cats } = action;
  return {
    ...state,
    isActive: true,
    categories: cats?.categories,
  };
};

export const setPage = (state = {}, action) => {
  return {
    ...state,
    currentPage: action.payload,
  };
};
