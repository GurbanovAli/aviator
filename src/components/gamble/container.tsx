import React, {useState} from 'react';
import { connect, ConnectedProps } from 'react-redux'

import Bet from "./bet"
import Canvas from "./canvas"

import { IAppState } from 'store'

import { useTick } from '@inlet/react-pixi';

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

  let i = 0;
    const [x, setX] = useState(100);
    const [y, setY] = useState(340);
    
    const tick = () => rate? useTick(delta => {
      i += 2 * delta;
      console.log(i);
      
      setX(Math.sin(i) * 10);
      setY(Math.sin(i / 1.5) * 10);
  }) : null;

  return (
    <React.Fragment>
      <Canvas rate={rate} x={x} y={y}/>
      <Bet rate={rate} setRate={setRate}/>
    </React.Fragment>
  )
}

export default connector(Container)
