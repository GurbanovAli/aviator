import React from 'react'

import styled from 'styled-components'

import { useSelector } from 'react-redux'

const StyledTextBlock = styled.div`
  width: 7rem;
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
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  color: white;
  margin: 0.2rem auto;
  `

const Account: React.FC = () => {
    const counter = useSelector(state => state.check.check);

    return (
        <StyledTextBlock>
            <P>{counter}$ </P>
        </StyledTextBlock>
    )
}

export default Account
