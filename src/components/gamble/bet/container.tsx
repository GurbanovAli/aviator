import React, { useState } from 'react';

import { StyledContainer  } from './style'

import BetPanel from "./betPanel/betPanel"

const Bet: React.FC = () => {
  const [state, setState] = useState<boolean>(false);

    return (
        <StyledContainer>
            <BetPanel rates={true} state={state} setState={setState} />
            <BetPanel rates={false} state={state} setState={setState} />
        </StyledContainer>
    )
};

export default Bet
