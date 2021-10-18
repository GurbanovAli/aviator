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


const Bet: React.FC = ({ rate, setRate, count }: boolean | any) => {

  const [bet, setBet] = useState(5);
  console.log(rate);

  let counter = Math.round(count, 2) / 100;
  let exe = counter === rate ?  setBet(bet * count) : false;
  let result = counter === rate ?  setRate(0) : counter;


  return (
    <StyledContainer>
      <BetPanel rate={rate} setRate={setRate} bet={bet} setBet={setBet} />
      <StyledBlock>
        <Account bet={bet} />
        <Counter count={counter} />
      </StyledBlock>
    </StyledContainer>
  )
};

export default connector(Bet)
