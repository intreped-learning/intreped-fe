export const teacher = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        teacher: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        teacher: {}
      }
    default:
      return state;
  }
}