import {teacher} from '../teacher'

describe('courses reducer', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = teacher(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return the action payload on Log In', () => {
    const initialState = {};
    const action = {
      type: 'LOGIN',
      payload: {
        username: 'feeny_meets_world',
        password: 'classdismissed'
      }
    }
    const expected = {
      username: 'feeny_meets_world',
      password: 'classdismissed'
    };

    const result = teacher(initialState, action)

    expect(result).toEqual(expected)
  })

  it('should return an empty object on Log Out', () => {
    const initialState = {
      teacher: {
        username: 'feeny_meets_world',
        password: 'classdismissed'
      }
    };
    const action = {
      type: 'LOGOUT',
    }
    const expected = {};

    const result = teacher(initialState, action)

    expect(result).toEqual(expected)
  })
})