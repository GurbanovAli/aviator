import React from 'react'

import styled from 'styled-components'

import { StyledTextBlock } from './style'

const P = styled.p`
  font-size:50px;
  color: white;
  margin:0;
  `

const Account: React.FC = ({ check }: any) => {
    return (
        <StyledTextBlock>
            <P> {check}$ </P>
        </StyledTextBlock>
    )
}

export default Account
