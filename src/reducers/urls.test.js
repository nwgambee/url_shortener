import { urls } from './urls'

describe('urls reducer tests', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = urls(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return the correct state if the action.type is SET_URLS', () => {
    const mockState = [{longUrl: 'some url #1'}, {longUrl: 'some url #2'} ]
    const mockAction = {
      type: 'SET_URLS',
      url: {longUrl: 'new url #3'}
    }
    const expected = [{longUrl: 'some url #1'}, {longUrl: 'some url #2'}, {longUrl: 'new url #3'}]
    const result = urls(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it('should return the correct state if the action.type is UPDATE_URLS', () => {
    const mockState = [{longUrl: 'some url #1', id: 9}, {longUrl: 'some url #2', id: 5} ]
    const mockAction = {
      type: 'UPDATE_URLS',
      id: 9
    }
    const expected = [{longUrl: 'some url #2', id: 5}]
    const result = urls(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})