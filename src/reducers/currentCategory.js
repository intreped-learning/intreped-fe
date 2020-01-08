export const currentCategory = (state = 'All Categories', action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return action.payload;
      default:
        return state;
  }
}