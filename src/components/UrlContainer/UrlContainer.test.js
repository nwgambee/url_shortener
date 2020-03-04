import { UrlContainer, mapStateToProps, mapDispatchToProps } from '../UrlContainer/UrlContainer'
import { shallow } from 'enzyme';
import React from 'react';
import { setUrls, updateUrls } from '../../actions/index'

describe('UrlContainer', () => {
  let wrapper;
  describe('Method Tests', () => {
    it('should match the snapshot', () => {
      wrapper = shallow(<UrlContainer />)
      expect(wrapper).toMatchSnapshot();
    })
    it('deleteUrl should be called when the delete Button is clicked', () => {
      wrapper = shallow(<UrlContainer urls={[{obj1: 'value', id: 8}, {obj2: 'value', id: 10}]}/>)
      wrapper.instance().deleteUrl = jest.fn()
      wrapper.find('.delete-btn').at(0).simulate('click', 8)

      expect(wrapper.instance().deleteUrl).toHaveBeenCalledWith(8)
    })
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

    it('should call dispatch with the updateUrls action when updateUrls is called', () => {
      const mockId = 8
      const mockDispatch = jest.fn();
      const actionToDispatch = updateUrls(mockId);
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updateUrls(mockId)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})