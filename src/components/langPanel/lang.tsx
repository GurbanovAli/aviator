import React from 'react'

import styled from 'styled-components'

import { useSelector } from 'react-redux'

const Lang: React.FC = () => {
    return (
        <StyledTextBlock>
            <P>En</P>
        </StyledTextBlock>
    )
}

const StyledTextBlock = styled.div`
  width: 5rem;
  background: #444;
  border: 1.5px solid #696A66;
  border-radius: 0.4rem;
  margin: auto;
  margin-left: 0.2rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`
const P = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  color: white;
  margin: 0.35rem auto;
  `

export default Lang
