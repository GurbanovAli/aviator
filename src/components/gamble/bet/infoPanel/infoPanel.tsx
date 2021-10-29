import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { StyledInfoPanel } from '../style'

const P = styled.p`
  font-size:48px;
  color: white;
  margin: auto;
  `

const InfoPanel: React.FC = ({ rate }: any) => {


    return (
        <StyledInfoPanel style={{ background: (rate ? "green" : "red") }}>
            <P>
                {
                    rate ? "you're playing" : "flew away"
                }
            </P>
        </StyledInfoPanel>
    )
};

export default InfoPanel
