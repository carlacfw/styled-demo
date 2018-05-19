import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10%;
  height: 100%;
  background-color: chartreuse;
`

const Ul = styled.ul`
  list-style: none;
  padding: 10px;
`

const Li = styled.li`
  margin: 10px 0;
  border: 1px solid grey;
  background-color: hotpink;
`

const StyledLink = styled(NavLink).attrs({
  activeClassName: 'activeClassName'
})`
  display: block;
  padding: 5px;
  color: #444444;
  background: #ccc;
  text-decoration: none;
  margin: 3px;
  &:hover {
    background-color: lightcyan;
  }
  &.selected {
    background-color: lightblue;
  }
`

const Button = styled.button`
  background-color: hotpink;
  max-width: 40px;
  max-height: 40px;
`
class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  navDisplay() {
    if (this.state.open) {
      return (
        <NavWrapper>
          <Button
            onClick={() => {
              this.setState({ open: false })
            }}
          >
            X
          </Button>
          <Ul>
            <Li>
              <StyledLink to="/" exact activeClassName="selected">
                Home
              </StyledLink>
            </Li>
            <Li>
              <StyledLink to="/form" activeClassName="selected">
                Form
              </StyledLink>
            </Li>
            <Li>
              <StyledLink to="/response" activeClassName="selected">
                Response
              </StyledLink>
            </Li>
          </Ul>
        </NavWrapper>
      )
    } else {
      return (
        <Button
          onClick={() => {
            this.setState({ open: true })
          }}
        >
          ...
        </Button>
      )
    }
  }
  render() {
    return this.navDisplay()
  }
}

export default Nav
