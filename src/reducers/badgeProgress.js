export const badgeProgress = (state = {
  Engagement: [],
  Classroom: [],
  Culturally: [],
  Effective: [],
  Data: []
}, action) => {
  switch (action.type) {
    case 'FINISH_COURSE':
      return action.payload
    case 'RESET_PROGRESS':
      return {
        Engagement: [],
        Classroom: [],
        Culturally: [],
        Effective: [],
        Data: []
      }
    default:
      return state;
  }
}