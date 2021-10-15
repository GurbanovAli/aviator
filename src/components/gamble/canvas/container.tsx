import React,{ useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import data from "../../../data.json"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})
import { StyledContainer} from './style'

const connector = connect(mapStateToProps, mapActionsToProps)

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
