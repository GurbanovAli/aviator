import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { StyledTextBlock } from '../style'

import Loader from "./loader"

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


const Counter: React.FC = ({ rate, setRate, getCash, setGetCash, isStart, setIsStart, check, setCheck, bet }: any) => {

    let i = 0;
    const [x, setX] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isStart) {
            i += 0.000025;

            setX((i * 2) + x);
            let roundedCount = +String(x).slice(0, 4);
            setCount(roundedCount);
        } else {
            setX(1);
            setCount(1);
        }
    });

    if (getCash) {
        setGetCash(false);
        setRate(false);
        setIsStart(0);

    } else if (isStart === count) {
        setIsStart(0);
        if (rate) {
            setRate(false);
            setCheck(check - bet)
        }
    }

    return (
        <StyledTextBlock>
            {
                isStart ? <P>{count + "x"}</P> : <Loader isStart={isStart} setIsStart={setIsStart} />
            }
        </StyledTextBlock>
    )
};

export default Counter
