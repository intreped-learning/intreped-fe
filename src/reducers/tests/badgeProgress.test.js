import {badgeProgress} from '../badgeProgress'

describe('badgeProgress reducer', () => {
  it('should return the initial state', () => {
    const expected =  {
      Engagement: [],
      Classroom: [],
      Culturally: [],
      Effective: [],
      Data: []
    }
    const result = badgeProgress(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an updated list of the user\'s badges', () => {
    const initialState = {
      Engagement: [],
      Classroom: [],
      Culturally: [],
      Effective: [],
      Data: []
    }

    const action = {
      type: 'FINISH_COURSE',
      payload: {
        Engagement: [1],
        Classroom: [],
        Culturally: [],
        Effective: [],
        Data: []
      }
    }

    const expected = action.payload

    const results = badgeProgress(initialState, action)

    expect(results).toEqual(expected)
  })

  it('should reset all badge progress categories to an empty array', () => {
    const initialState = {
      Engagement: [1],
      Classroom: [],
      Culturally: [],
      Effective: [],
      Data: []
    }

    const action = {
      type: 'RESET_PROGRESS',
    }

    const expected = {
      Engagement: [],
      Classroom: [],
      Culturally: [],
      Effective: [],
      Data: []
    }

    const results = badgeProgress(initialState, action)

    expect(results).toEqual(expected)
  })
})