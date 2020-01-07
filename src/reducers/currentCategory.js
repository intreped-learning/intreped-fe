export const currentCategory = (state = 'all', action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return action.payload;
      default:
        return state;
  }
}