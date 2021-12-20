import React, { useState } from 'react';

import { StyledContainer, StyledBlock, StyledTextBlock } from './style'

import styled from 'styled-components'

import BetPanel from "./betPanel/betPanel"

const P = styled.p`
  font-size:50px;
  font-weight: 600;
  color: white;
  margin:0;
  background: red;
  border-radius: 5px;
  `

type BetProps = {
    isStart: number;
    setIsStart: (item: number) => void;
    setWin: (item: boolean) => void;
}

const Bet: React.FC<BetProps> = ({ isStart, setIsStart, setWin }: BetProps) => {

    const [getCash, setGetCash] = useState(false);
    const [getCash2, setGetCash2] = useState(false);
    const [state, setState] = useState(false);
    const [bet, setBet] = useState<number>(5);
    const [bet2, setBet2] = useState<number>(5);
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    if (getCash || getCash2) setWin(true);

    return (
        <StyledContainer>
            <BetPanel
                getCash={getCash}
                setGetCash={setGetCash} t
                isStart={isStart}
                setIsStart={setIsStart}
                bet={bet}
                setBet={setBet}
                state={state}
                setState={setState}
                toggle={toggle}
                setToggle={setToggle}
                rates={true}
            />
            <BetPanel
                getCash={getCash2}
                setGetCash={setGetCash2}
                isStart={isStart}
                setIsStart={setIsStart}
                bet={bet2}
                setBet={setBet2}
                state={state}
                setState={setState}
                toggle={toggle2}
                setToggle={setToggle2}
                rates={false}
            />
        </StyledContainer>
    )
};

export default Bet
