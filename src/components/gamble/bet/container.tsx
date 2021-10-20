import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, StyledBlock } from './style'

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


const Bet: React.FC = ({ rate, setRate, check, setCheck }: boolean | any) => {

  console.log(0);

  const [bet, setBet] = useState(5);
  const [res, setRes] = useState<boolean>(false);
  // let counter = Math.round(count) / 100;
  // let finished = false; 
  
  // if(rate === false){
  //   setCount(0);
  // }

  if(res){
    setRate(false);
    setCheck((bet * 2) + check);

    // finished = true;
  }

  return (
    <StyledContainer>
      <BetPanel rate={rate} setRate={setRate} bet={bet} setBet={setBet} />
      <StyledBlock>
        <InfoPanel rate={rate} />
        <Account check={check} />
        {
          rate && <Counter rate={rate} setRes={setRes}  />
        }
        
      </StyledBlock>
    </StyledContainer>
  )
};

export default connector(Bet)
