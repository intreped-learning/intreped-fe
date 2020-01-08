export const currentSearch = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_COURSES':
      return action.payload;
      default:
        return state;
  }
}