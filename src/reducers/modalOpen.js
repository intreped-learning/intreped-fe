export const modalOpen = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !state;
      default:
        return state;
  }
}