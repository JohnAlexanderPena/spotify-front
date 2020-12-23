export const setBrowse = (state = {}, action) => {
  const { cats } = action;
  console.log(cats);
  return {
    ...state,
    isActive: true,
    catergories: cats,
  };
};

export const setPage = (state = {}, action) => {
  console.log(action);
  return {
    ...state,
    currentPage: action.payload,
  };
};
