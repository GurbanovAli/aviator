import React, { useState, useEffect } from 'react';

import { useTick } from '@inlet/react-pixi';

import styled from 'styled-components'

import { StyledTextBlock } from './style'

const P = styled.p`
  font-size:70px;
  color: white;
  margin:0;
  `

const Counter: React.FC = ({ rate, setRes }: any) => {

  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  let i = 0;

  useEffect(() => {
    i += 0.0000025;

    setX((i * 2) + x);
    setCount(x);
  });

  if(rate === 200){
    setRes(true);
  }

  return (
    <StyledTextBlock>
      <P> {count}x </P>
    </StyledTextBlock>
  )
};

export default Counter
