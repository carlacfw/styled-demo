import React from 'react'
import { Route } from 'react-router'
import styled from 'styled-components'
import Form from '../form/Form'

const RoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const Home = () => {
  return <div>Home</div>
}

const Responsive = () => {
  return <div>Responsive</div>
}

const Variables = () => {
  return <div>Variables</div>
}

const Routes = () => {
  return (
    <RoteWrapper>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/response" component={Variables} />
    </RoteWrapper>
  )
}

export default Routes
