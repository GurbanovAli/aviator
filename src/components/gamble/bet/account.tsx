import React from 'react'

import styled from 'styled-components'

import { StyledTextBlock } from './style'

const P = styled.p`
  font-size:70px;
  color: white;
  `

const Account: React.FC = ({bet, check}: any) => {
  return(
    <StyledTextBlock>
      <P> {check}$ </P>
    </StyledTextBlock>
  )
}

export default Account
