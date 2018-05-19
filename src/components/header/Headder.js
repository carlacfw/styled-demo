import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: chartreuse;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid hotpink 5px;
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
