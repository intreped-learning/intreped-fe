export const modalOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !state;
      default:
        return state;
  }
}