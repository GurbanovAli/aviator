import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, StyledBlock, StyledTextBlock } from './style'

import styled from 'styled-components'

import { IAppState } from 'store'

import BetPanel from "./betPanel"
import InfoPanel from "./infoPanel"
import Account from "./account"
import Counter from "./counter"

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})
const connector = connect(mapStateToProps, mapActionsToProps)

const P = styled.p`
  font-size:70px;
  color: white;
  margin:0;
  background: red;
  `

const Bet: React.FC = ({ rate, setRate, check, setCheck }: boolean | any) => {

  const [bet, setBet] = useState(5);
  const [res, setRes] = useState<boolean>(false);
  const [textWin, setTextWin] = useState(0);

  return (
    <StyledContainer>
      <BetPanel rate={rate} setRate={setRate} bet={bet} setBet={setBet} />
      <StyledBlock>
        <InfoPanel rate={rate} bet={bet} textWin={textWin}/>
        <Account check={check} />
        {
          rate ?
          <Counter rate={rate} setRate={setRate} bet={bet} check={check} setCheck={setCheck} setTextWin={setTextWin} />
          : <StyledTextBlock> <P>0</P></StyledTextBlock>
        }
      </StyledBlock>
    </StyledContainer>
  )
};

export default connector(Bet)
