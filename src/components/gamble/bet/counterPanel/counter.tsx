import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { StyledTextBlock } from '../style'

import IsCounter from "../isCounter/isCounter"
import loader from "./loader"
import useDebounce from "./debounce"

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
    const [count, setCount] = useState(1);

    // if(!isStart){
    //   setTimeout(() => setIsStart(3), 3000);
    //   clearTimeout();
    // }

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
                isStart ?
                    <P>
                      0
                    </P>
                    : <P> 0 </P>
            }
        </StyledTextBlock>
    )
};

// <IsCounter
//     isStart={isStart}
//     count={count}
//     setCount={setCount}
//     text="x"
// />

export default Counter
