import {currentCategory} from '../currentCategory'

describe('currentCategory reducer', () => {
  it('should return the initial state', () => {
    const expected =  'All Categories'
    const result = currentCategory(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return a category', () => {
    const initialState = 'All Categories';
    const action = {
      type: 'CHANGE_CATEGORY',
      payload: 'Engagement Strategies'
    }
    const expected = action.payload;
    const results = currentCategory(initialState, action)
    expect(results).toEqual(expected)
  })
})