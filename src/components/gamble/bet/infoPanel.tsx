import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { StyledInfoPanel } from './style'

const P = styled.p`
  font-size:60px;
  color: white;
  margin:0;
  
  `

const InfoPanel: React.FC = ({ rate, bet, textWin, setTextWin }: any) => {

  let text = "please bet";

  if (textWin) {
    text = "you win " + (bet * textWin);
    //setTextWin(0);
  }

  let color = rate ? "rate" : ""

  return (
    <StyledInfoPanel>
      <P style={{background:(rate ? "yellow" : textWin ? "green" : "red")}}>
        {
          rate ? ("your bet " + bet) : text
        }
      </P>
    </StyledInfoPanel>
  )
};

export default InfoPanel