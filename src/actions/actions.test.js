import * as actions from './index'

describe('Actions Tests', () => {
  it('should have a type of SET_URLS', () => {
    const mockUrlObject = {longUrl: 'longerurl.com', shortUrl: 'shorturl.com', title: 'mock url title'}
    const expectedAction = {
      type: 'SET_URLS',
      url: mockUrlObject
    }
    const result = actions.setUrls(mockUrlObject)
    expect(result).toEqual(expectedAction)
  })
})