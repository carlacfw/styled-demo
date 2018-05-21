import React from 'react'
import { Route } from 'react-router'
import styled from 'styled-components'
import Form from '../form/Form'
import Props from '../props/Props'
import Home from '../home/Home'

const RoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const Routes = () => {
  return (
    <RoteWrapper>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/props" component={Props} />
    </RoteWrapper>
  )
}

export default Routes
