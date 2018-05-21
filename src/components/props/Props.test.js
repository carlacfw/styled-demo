import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Props from './Props'
describe('The Props ', () => {
  it('It renders the Props correctly', () => {
    const wrapper = shallow(<Props match={{ isExact: true }} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
