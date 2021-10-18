import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer } from './style'

import Client from "./client"
import Bet from "./bet"
import Canvas from "./canvas"
import Counter from "./counter"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>

export type TComponentProps = {
} & TReduxProps

const Container: React.FC<TComponentProps> = (props) => {

  const [rate, setRate] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  return (
      <StyledContainer>
        <Client />
        <Canvas rate={rate} setCount={setCount}/>
        <Bet rate={rate} setRate={setRate} />
        <Counter count={count}/>
      </StyledContainer>
  )
}

export default connector(Container)
