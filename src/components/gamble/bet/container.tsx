import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, StyledBlock, StyledTextBlock } from './style'

import styled from 'styled-components'

import { IAppState } from 'store'

import BetPanel from "./betPanel/betPanel"

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})
const connector = connect(mapStateToProps, mapActionsToProps)

const P = styled.p`
  font-size:50px;
  font-weight: 600;
  color: white;
  margin:0;
  background: red;
  border-radius: 5px;
  `

type BetProps = {
    rate: boolean;
    setRate: (item: boolean) => void;
    rate2: boolean;
    setRate2: (item: boolean) => void;
    isStart: number;
    setIsStart: (item: number) => void;
    check: number;
    setCheck: (item: number) => void;
}

const Bet: React.FC<BetProps> = ({ rate, setRate, rate2, setRate2, isStart, setIsStart, check, setCheck }: BetProps) => {

    const [getCash, setGetCash] = useState(false);
    const [getCash2, setGetCash2] = useState(false);
    const [state, setState] = useState(false);
    const [bet, setBet] = useState<number>(5);
    const [bet2, setBet2] = useState<number>(5);
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    return (
        <StyledContainer>
            <BetPanel
                rate={rate}
                setRate={setRate}
                rate2={rate2}
                getCash={getCash}
                setGetCash={setGetCash}
                isStart={isStart}
                setIsStart={setIsStart}
                check={check}
                setCheck={setCheck}
                bet={bet}
                setBet={setBet}
                state={state}
                setState={setState}
                toggle={toggle}
                setToggle={setToggle}
            />
            <BetPanel
                rate={rate2}
                setRate={setRate2}
                rate2={rate}
                getCash={getCash2}
                setGetCash={setGetCash2}
                isStart={isStart}
                setIsStart={setIsStart}
                check={check}
                setCheck={setCheck}
                bet={bet2}
                setBet={setBet2}
                state={state}
                setState={setState}
                toggle={toggle2}
                setToggle={setToggle2}
            />
        </StyledContainer>
    )
};

export default connector(Bet)
