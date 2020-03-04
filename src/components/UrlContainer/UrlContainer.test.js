import { UrlContainer, mapStateToProps, mapDispatchToProps } from '../UrlContainer/UrlContainer'
import { shallow } from 'enzyme';
import React from 'react';
import { setUrls } from '../../actions/index'


describe('UrlContainer', () => {
  let wrapper;
  describe('Method Tests', () => {
    wrapper = shallow(<UrlContainer />)
    expect(wrapper).toMatchSnapshot();
  })

  describe('MapStateToProps tests', () => {
    it('should return an object with a urls property', () => {
      wrapper = shallow(<UrlContainer />)
      const mockState = {
        urls: [{longUrl: 'some url'}],
        testProp: 'this is a fake property'
      }
      const expected = {
        urls: [{longUrl: 'some url'}]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)

    })
  })

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
})