import React, {useCallback} from 'react'
import { goTo } from 'route-history'

import styled from 'styled-components'

const StyledTextBlock = styled.div`
  width: 10rem;
  margin: auto;
  margin-left: 0.2rem;
  text-align: center;
`

const P = styled.p`
  font-size: 2.5rem;
  font-family: cursive;
  font-weight: 700;
  font-weight: 500;
  line-height: 1;
  color: white;
  margin: 0.1rem auto;
  `

const Logo: React.FC = () => {
    return (
        <StyledTextBlock onClick={useCallback(() => goTo('/'), [])}>
            <P> Aviator </P>
        </StyledTextBlock>
    )
}

export default Logo
