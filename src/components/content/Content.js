import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from '../nav/Nav'
import Routes from '../routes/Routes'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex: 1;
`

const Content = () => (
  <Router>
    <Container>
      <Nav />
      <Routes />
    </Container>
  </Router>
)
export default Content
