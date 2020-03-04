import { UrlForm, mapDispatchToProps } from '../UrlForm/UrlForm'
import { shallow } from 'enzyme';
import React from 'react';
import { setUrls } from '../../actions/index'



describe('UrlForm', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<UrlForm />)
    expect(wrapper).toMatchSnapshot();
  })
  describe('Method Tests', () => {
    it('should clear state when clearInputs is called', () => {
      wrapper = shallow(<UrlForm />)
      const initialState = {
        title: 'some title',
        urlToShorten: 'some url'
      };
      const expected = {
        title: '',
        urlToShorten: ''
      }
      wrapper.setState(initialState)
      wrapper.instance().clearInputs()
      expect(wrapper.state()).toEqual(expected)
    })
    it('should update state.title when handleNameChange is called', () => {
      wrapper = shallow(<UrlForm />)
      const initialState = {
        title: '',
        urlToShorten: ''
      };
      const expected = 'new shortened url'
      const mockEvent = {
        target: {name: 'title', value: 'new shortened url'}
      }
      wrapper.setState(initialState)
      wrapper.instance().handleNameChange(mockEvent)
      expect(wrapper.state('title')).toEqual(expected)
    })
    it('should update state.urlToShorten when handleNameChange is called', () => {
      wrapper = shallow(<UrlForm />)
      const initialState = {
        title: '',
        urlToShorten: ''
      };
      const expected = 'longerurl.com'
      const mockEvent = {
        target: {name: 'urlToShorten', value: 'longerurl.com'}
      }
      wrapper.setState(initialState)
      wrapper.instance().handleNameChange(mockEvent)
      expect(wrapper.state('urlToShorten')).toEqual(expected)
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