import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { StyledInfoPanel } from './style'

const P = styled.p`
  font-size:48px;
  color: white;
  margin: auto;
  `

const InfoPanel: React.FC = ({ rate, bet, textWin }: any) => {
  let text;
  if (textWin) {
    text = "you win " + textWin;
  } else {
    text = "flew away, ЛОХ";
  }

  return (
    <StyledInfoPanel style={{ background: (rate ? "green" : textWin ? "#19a83f" : "red") }}>
      <P>
        {
          rate ? "you're playing" : text
        }
      </P>
    </StyledInfoPanel>
  )
};

export default InfoPanel
