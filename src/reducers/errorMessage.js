export const errorMessage = (state = '', action) => {
  switch (action.type) {
    case 'CREATE_ERROR_MESSAGE':
      return action.payload;
      default:
        return state;
  }
}