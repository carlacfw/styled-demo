import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import media from '../../shared/media'
import colours from '../../shared/colour'
import { ResponsiveWrapper } from '../../shared/components'

const VariableWapper = styled.div`
  display: flex;

  flex-direction: column;
  margin: 0;
  flex: 2;
  ${media.desktop`
    padding: 20px;
    width: 50%;
  `};
`
const SectionLable = styled.label`
  font-weight: bold;
  align-self: center;
`

const ColourButton = styled.button`
  background-color: ${props => props.background};
  color: ${props => props.color};
  margin: 1em;
  padding: 1em;
  border: 2px solid ${colours.secondary};
  border-radius: 6px;
  max-height: 45px;
  &:active {
    background-color: lightcyan;
    color: darkolivegreen;
  }
`

const ThickColourButton = ColourButton.extend`
  border: 10px solid blueviolet;
  max-height: 65px;
`

const BolderBiggerButton = styled.button.attrs()`
  color: ${props => (props.bolder ? 'black' : 'white')};
  font-weight: ${props => (props.bolder ? 'bolder' : 'normal')};
  height: ${props => (props.bigger ? '110' : '55')};
  width: ${props => (props.bigger ? '150px' : '100px')};
  background-color: lightblue;
  margin: 1em;
  padding: 1em;
  border: 2px solid ${colours.secondary};
  border-radius: 6px;
  &:active {
    background-color: lightcyan;
    color: darkolivegreen;
  }
  ${media.desktop`
  height: ${props => (props.bigger ? '200px' : '100px')};
  width: ${props => (props.bigger ? '300px' : '150px')};
  `};
`
const pulse = keyframes`
 0% {
    background-color: #001F5F;
  }
  100% {
    background-color: #FE4136;
  }
`

const PulsingBBB = BolderBiggerButton.extend`
  animation: ${pulse} 2s infinite;
`

export default class extends Component {
  render() {
    return (
      <VariableWapper onSubmit={this.handleSubmit}>
        <SectionLable>Passing props into styles</SectionLable>
        <ResponsiveWrapper>
          <ColourButton background="yellow" color="black">
            Yellow
          </ColourButton>
          <ColourButton background="blue" color="white">
            Blue
          </ColourButton>
          <ColourButton background="red" color="blue">
            Red
          </ColourButton>
        </ResponsiveWrapper>
        <SectionLable>Dynamic response to variables</SectionLable>
        <ResponsiveWrapper>
          <BolderBiggerButton
            bolder={this.props.match.isExact}
            bigger={this.props.match.isExact}
          >
            Exact
          </BolderBiggerButton>
          <BolderBiggerButton
            bolder={!this.props.match.isExact}
            bigger={!this.props.match.isExact}
          >
            Inexact
          </BolderBiggerButton>
        </ResponsiveWrapper>
        <SectionLable>Extending Styled Components</SectionLable>
        <ResponsiveWrapper>
          <ThickColourButton background="red" color="blue">
            Red
          </ThickColourButton>
          <PulsingBBB
            bolder={this.props.match.isExact}
            bigger={this.props.match.isExact}
          >
            Exact
          </PulsingBBB>
        </ResponsiveWrapper>
      </VariableWapper>
    )
  }
}
