export const courses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        courses: action.payload
      };
    case 'REMOVE_COURSE':
      const revisedCourses = state.filter(course => course.id != action.payload)
      return {
        ...state,
        courses: revisedCourses
      }
      default:
        return state;
  }
}