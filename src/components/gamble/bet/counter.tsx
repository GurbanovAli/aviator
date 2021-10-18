import React, { useState } from 'react';

import styled from 'styled-components'

import { StyledTextBlock } from './style'

const P = styled.p`
  font-size:70px;
  color: white;
  `

const Counter: React.FC = ({ count }: number | any) => {
  return (
    <StyledTextBlock>
      <P> {count}x </P>
    </StyledTextBlock>
  )
};

export default Counter
