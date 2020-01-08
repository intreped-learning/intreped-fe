import {modalOpen} from '../modalOpen'

describe('modalOpen reducer', () => {
  it('should return the initial state', () => {
    const expected = false
    const result = modalOpen(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return the state of modalOpen', () => {
    const initialState = false;
    const action = {
      type: 'TOGGLE_MODAL',
    }
    const expected = true;

    const result = modalOpen(initialState, action)

    expect(result).toEqual(expected)
  })
})