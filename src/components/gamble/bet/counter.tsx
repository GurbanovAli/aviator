import React, { useState, useEffect } from 'react';

import { useTick } from '@inlet/react-pixi';

import styled from 'styled-components'

import { StyledTextBlock } from './style'
import { setTextRange } from 'typescript';

const P = styled.p`
  font-size:50px;
  font-weight: 600;
  color: white;
  background: red;
  border-radius: 3px;
  margin: 0;
  padding: 0 0 0 1rem;
  text-align: left;
  `

const Counter: React.FC = ({ rate, setRate, bet, check, setCheck, setTextWin }: any) => {

    const [count, setCount] = useState(0);
    const [x, setX] = useState(1);
    let i = 0;

    useEffect(() => {
        i += 0.000025;

        setX((i * 2) + x);
        let roundedCount = +String(x).slice(0, 4);
        setCount(roundedCount);
    });

    if (rate !== count && rate === true) {
        setRate(false);

        let getCheck = +String((bet * count) + check).slice(0, 6);
        let getText = +String(bet * count).slice(0, 4);
        setCheck(getCheck);
        setTextWin(getText);
    } else if (rate === count) {
        setCheck(check - bet);
        setRate(false);
        setTextWin(false);
    }

    return (
        <StyledTextBlock>
            <P>{count + "x"}</P>
        </StyledTextBlock>
    )
};

export default Counter
