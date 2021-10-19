import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, StyledBlock } from './style'

import { IAppState } from 'store'

import BetPanel from "./betPanel"
import Account from "./account"
import Counter from "./counter"

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})
const connector = connect(mapStateToProps, mapActionsToProps)


const Bet: React.FC = ({ rate, setRate, count, setCount check, setCheck }: boolean | any) => {

  const [bet, setBet] = useState(5);
  let counter = Math.round(count) / 100;
  
  if(rate === false){
    setCount(0);
  }
  if(counter === rate){
    setRate(false);
    setCheck((bet * counter) + check);
  }


  return (
    <StyledContainer>
      <BetPanel rate={rate} setRate={setRate} bet={bet} setBet={setBet} />
      <StyledBlock>
        <Account bet={bet} check={check} />
        <Counter rate={rate} setRate={setRate} count={counter} />
      </StyledBlock>
    </StyledContainer>
  )
};

export default connector(Bet)
