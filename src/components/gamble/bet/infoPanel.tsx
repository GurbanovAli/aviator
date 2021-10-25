import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { StyledInfoPanel } from './style'

const P = styled.p`
  font-size:60px;
  color: white;
  margin:0;
  `

const InfoPanel: React.FC = ({ rate, bet, textWin }: any) => {

  const [count, setCount] = useState(0);
  const [x, setX] = useState(1);
  const [winCount, setWinCount] = useState(0);
  let i = 0;
  let text = "please bet";
  let playingCount;

  useEffect(() => {
    if (rate) {
      i += 0.000025;

      setX((i * 2) + x);
      let roundedCount = +String(x).slice(0, 4);
      setCount(bet * roundedCount);
      setWinCount(bet * roundedCount);
    } else {
      setX(1);
      setCount(0);
    }
  });
  console.log(rate)

  let color = rate ? "rate" : ""

  if (textWin) {
    text = "you win " + winCount;
  }

  return (
    <StyledInfoPanel>
      <P style={{ background: (rate ? "yellow" : textWin ? "green" : "red") }}>
        {
          rate ?  ("your bet " + count): text
        }
      </P>
    </StyledInfoPanel>
  )
};

export default InfoPanel
