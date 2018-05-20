import React from 'react'
import styled from 'styled-components'
import media from './media'

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
  ${media.desktop`
  flex-direction: row;
  width: 100%;
`};
`
