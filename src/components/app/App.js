import React from 'react'
import Header from '../header/Headder'
import Content from '../content/Content'
import styled from 'styled-components'

const AppWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr;
`

export default function() {
  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  )
}
