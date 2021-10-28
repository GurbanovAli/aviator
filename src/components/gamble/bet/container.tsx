import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, StyledBlock, StyledTextBlock } from './style'

import styled from 'styled-components'

import { IAppState } from 'store'

import BetPanel from "./betPanel/betPanel"
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
  font-size:50px;
  font-weight: 600;
  color: white;
  margin:0;
  background: red;
  border-radius: 5px;
  `

type BetProps = {
    rate: boolean | any;
    setRate: (item: boolean | any) => void;
    check: number;
    setCheck: (item: number) => void;
}

const Bet: React.FC<BetProps> = ({ rate, setRate, check, setCheck }: BetProps) => {

    const [bet, setBet] = useState<number>(0);
    const [res, setRes] = useState<boolean>(false);
    const [textWin, setTextWin] = useState(0);

    return (
        <StyledContainer>
            <BetPanel rate={rate} setRate={setRate} bet={bet} setBet={setBet} textWin={textWin} />
            <StyledBlock>
                <InfoPanel rate={rate} bet={bet} textWin={textWin} />
                <Account check={check} />
                {
                    rate ?
                        <Counter rate={rate} setRate={setRate} bet={bet} check={check} setCheck={setCheck} setTextWin={setTextWin} />
                        : <StyledTextBlock>
                            <P>0</P>
                        </StyledTextBlock>
                }
            </StyledBlock>
        </StyledContainer>
    )
};

export default connector(Bet)
