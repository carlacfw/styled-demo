import React from 'react'
import styled from 'styled-components'
import colours from '../../shared/colour'

const Wrapper = styled.div`
  background-color: ${colours.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid ${colours.secondary} 5px;
`
const Title = styled.h2`
  color: #444444;
`

const Header = props => {
  return (
    <Wrapper>
      <Title>Styled Components Demo</Title>
    </Wrapper>
  )
}

export default Header
