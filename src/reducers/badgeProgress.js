export const badgeProgress = (state = {
  Engagement: [],
  Classroom: [],
  Culturally: [],
  Effective: [],
  Data: []
}, action) => {
  switch (action.type) {
    case 'FINISH_COURSE':
      console.log(action.payload)
      return action.payload
    default:
      return state;
  }
}