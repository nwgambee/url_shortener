import { UrlContainer, mapStateToProps } from '../UrlContainer/UrlContainer'
import { shallow } from 'enzyme';
import React from 'react';


describe('UrlContainer', () => {
  let wrapper;
  describe('Method Tests', () => {

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
})