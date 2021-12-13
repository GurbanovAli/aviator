import React, {useCallback} from 'react'
import { goTo } from 'route-history'

import styled from 'styled-components'

const StyledTextBlock = styled.div`
  width: 10rem;
  height: 1.9rem;
  background: #555;
  border: 1.5px solid #696A66;
  border-radius: 0.4rem;
  margin: auto;
  margin-left: 52%;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  cursor: pointer;
`

const P = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1;
  color: white;
  margin: 0.3rem auto;
  `

const GrButton: React.FC = ({isGr, setIsGr}: any) => {

    return (
        <StyledTextBlock onClick={ () => setIsGr(isGr ? false: true)}>
            <P> How to play ? </P>
        </StyledTextBlock>
    )
}

export default GrButton
