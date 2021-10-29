import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, StyledBlock, StyledTextBlock } from './style'

import styled from 'styled-components'

import { IAppState } from 'store'

import BetPanel from "./betPanel/betPanel"
import InfoPanel from "./infoPanel/infoPanel"
import Account from "./accountPanel/account"
import Counter from "./counterPanel/counter"

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
    isStart: number;
    setIsStart: (item: number) => void;
    check: number;
    setCheck: (item: number) => void;
}

const Bet: React.FC<BetProps> = ({ rate, setRate, isStart, setIsStart, check, setCheck }: BetProps) => {

    const [getCash, setGetCash] = useState(false);
    const [bet, setBet] = useState<number>(5);

    return (
        <StyledContainer>
            <BetPanel
                rate={rate}
                setRate={setRate}
                getCash={getCash}
                setGetCash={setGetCash}
                isStart={isStart}
                setIsStart={setIsStart}
                check={check}
                setCheck={setCheck}
                bet={bet}
                setBet={setBet}
            />
            <StyledBlock>
                <InfoPanel rate={rate} />
                <Account check={check} />
                <Counter
                    rate={rate}
                    setRate={setRate}
                    getCash={getCash}
                    setGetCash={setGetCash}
                    isStart={isStart}
                    setIsStart={setIsStart}
                    check={check}
                    setCheck={setCheck}
                    bet={bet}
                />
            </StyledBlock>
        </StyledContainer>
    )
};

export default connector(Bet)
