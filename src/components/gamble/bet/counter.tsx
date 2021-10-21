import React, { useState, useEffect } from 'react';

import { useTick } from '@inlet/react-pixi';

import styled from 'styled-components'

import { StyledTextBlock } from './style'
import { setTextRange } from 'typescript';

const P = styled.p`
  font-size:70px;
  color: white;
  margin:0;
  background: red;
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

  if (rate === count) {
    setRate(false);
    setCheck((bet * rate) + check);
    setTextWin(rate);
  }

  return (
    <StyledTextBlock>
      <P> {count}x </P>
    </StyledTextBlock>
  )
};

export default Counter
