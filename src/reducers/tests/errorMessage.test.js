import {errorMessage} from '../errorMessage'

describe('errorMessage reducer', () => {
  it('should return the initial state', () => {
    const expected =  ''
    const result = errorMessage(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an error message', () => {
    const initialState = '';
    const action = {
      type: 'CREATE_ERROR_MESSAGE',
      payload: 'You made a boo-boo'
    }
    const expected = action.payload;
    const results = errorMessage(initialState, action)
    expect(results).toEqual(expected)
  })
})