import React from 'react'

import styled from 'styled-components'

const StyledTextBlock = styled.div`
  width: 7rem;
  background: #696A66;
  border: 3px solid #555;
  border-radius: 0.4rem;
  margin: auto;
  font-family: 'Montserrat', sans-serif;
  margin-left: 70%;
  text-align: center;
`

const P = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
  color: white;
  margin: 0.2rem auto;
  `

const Account: React.FC = ({ check }: number) => {
    return (
        <StyledTextBlock>
            <P> {check.toFixed(2)}$ </P>
        </StyledTextBlock>
    )
}

export default Account
