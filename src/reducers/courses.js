export const courses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return [...state, ...action.payload];
    case 'REMOVE_COURSE':
      const revisedCourses = state.filter(course => course.id != action.payload)
      return revisedCourses
      default:
        return state;
  }
}