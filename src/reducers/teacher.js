export const teacher = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return {
        ...state,
        teacher: {}
      }
    default:
      return state;
  }
}