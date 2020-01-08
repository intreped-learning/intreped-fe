export const badgeProgress = (state = {
  Engagement: [],
  Classroom: [],
  Culturally: [],
  Effective: [],
  Data: []
}, action) => {
  switch (action.type) {
    case 'FINISH_COURSE':
      return action.payload;
    default:
      return state;
  }
}