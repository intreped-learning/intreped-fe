import {currentSearch} from '../currentSearch'

describe('currentSearch reducer', () => {
  it('should return the initial state', () => {
    const expected =  ''
    const result = currentSearch(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return a search term string', () => {
    const initialState = '';
    const action = {
      type: 'SEARCH_COURSES',
      payload: 'Teach Like A Champion'
    }
    const expected = action.payload;
    const results = currentSearch(initialState, action)
    expect(results).toEqual(expected)
  })
})