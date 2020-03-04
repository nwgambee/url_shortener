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

  it('should have a type of UPDATE_URL', () => {
    const mockId = 93;
    const expectedAction = {
      type: 'UPDATE_URL',
      id: mockId
    }
    const result = actions.updateUrls(mockId)
    expect(result).toEqual(expectedAction)
  })
})