import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
`
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0;
  width: 60%;
`

const Home = () => {
  return (
    <HomeWrapper>
      <P>
        This is a demo app designed to demonstrate a few of the fantastic
        features of{' '}
        <a
          href="https://www.styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Styled Components
        </a>{' '}
        library to WellingtonJS. The goal is to demonstrate the power of writing
        CSS in JS to solve comon web development problems such as building
        froms, and using variabled and composition to asist in code reuse.
      </P>
      <P>
        What this is not is a design or CSS masterclass. This was produced
        quickly to demonstrate library features, production code will need
        thought out design and more refined styling.
      </P>
      <P>
        I hope that this encourages to try using CSS in JS using librarys like
        styled components.
      </P>
    </HomeWrapper>
  )
}

export default Home
