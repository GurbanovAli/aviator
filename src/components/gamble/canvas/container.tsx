import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import { StyledContainer} from './style'

import { IAppState } from 'store'

//import ReactPixi from '@inlet/react-pixi'

import data from "../../../data.json"

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)




const { useState, useEffect, useMemo, useCallback, useRef, forwardRef } = React;
// const { Stage, Container, Sprite, PixiComponent, useApp, useTick } = ReactPixi;
// const { Texture } = PIXI;


const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: ${props => props.primary ? "0.5rem 1rem" : "0.5rem"};
  width: ${props => props.primary ? "6rem" : "4rem"};
  height: ${props => props.primary ? "3rem" : "2rem"};
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
    :active{
      background: gray;
    }
  `

const Canvas: React.FC = () => {

  const [bet, setBet] = useState(5);
  const filteredBet = data.bet.filter((el, i) => (+el >= bet || +el >= 10) ? bet : null).slice(0, 4);

  return (
      <canvas>
      h
      </canvas>
  )
};

export default connector(Canvas)
