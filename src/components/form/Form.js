import React, { Component } from 'react'
import styled from 'styled-components'
import media from '../../util/media'

const FormWapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3em;
`

const Input = styled.input`
  color: black;
  margin: 0 10px;
  float: left;
`

const ResponsiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  justify-content: space-between;
  ${media.desktop`
    flex-direction: row;
  `};
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
`

const Label = styled.label`
  margin: 10px;
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
