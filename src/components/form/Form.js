import React, { Component } from 'react'
import styled from 'styled-components'
import media from '../../shared/media'
import { ResponsiveWrapper } from '../../shared/components'

const FormWapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
  ${media.desktop`
    margin: 3em;
    width: 50%;
  `};
`

const FormTitle = styled.h4`
  color: darkblue;
`

const Input = styled.input`
  color: black;
  margin: 10px 0;
  float: left;
  padding: 10px;
  border: solid pink 2px;
`

const SubmitInput = styled.input`
  background-color: darkblue;
  border-radius: 10px;
  color: white;
  width: 150px;
  height: 30px;
  margin: 10px;
  &:disabled {
    background: lightgray;
  }
  ${media.desktop`
    align-self: center;
  `};
`

const Label = styled.label`
  font-weight: bold;
  margin: 10px 0;
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      name: '',
      hair: '',
      eye: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(change) {
    this.setState(change)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ loading: true })
  }

  render() {
    return (
      <FormWapper onSubmit={this.handleSubmit}>
        <FormTitle> Person form </FormTitle>
        <ResponsiveWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={event => this.handleChange({ name: event.target.value })}
          />
        </ResponsiveWrapper>
        <ResponsiveWrapper>
          <Label htmlFor="hair">Hair colour</Label>
          <Input
            id="hair"
            onChange={event => this.handleChange({ hair: event.target.value })}
          />
        </ResponsiveWrapper>
        <ResponsiveWrapper>
          <Label htmlFor="eye">Eye Colour</Label>
          <Input
            id="eye"
            onChange={event => this.handleChange({ eye: event.target.value })}
          />
        </ResponsiveWrapper>
        <SubmitInput type="submit" disabled={this.state.loading} />
      </FormWapper>
    )
  }
}
