import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Routes from './Routes'
describe('The Home page ', () => {
  it('It renders the routesu correctly', () => {
    const wrapper = shallow(<Routes />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
