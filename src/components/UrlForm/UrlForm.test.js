import { UrlForm, mapDispatchToProps } from '../UrlForm/UrlForm'
import { shallow } from 'enzyme';
import React from 'react';
import { setUrls } from '../../actions/index'

describe('MapDispatchToProps tests', () => {
  it('should call dispatch with the setUrls action when setUrls is called', () => {
    const mockUrl = {longUrl: 'long url', shortUrl: 'shorter url'}
    const mockDispatch = jest.fn();
    const actionToDispatch = setUrls(mockUrl);
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setUrls(mockUrl)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})