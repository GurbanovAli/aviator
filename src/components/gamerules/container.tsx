import React from 'react';

import { StyledContainer, P, Button } from './style'

export default ({ lang, closeGrPanel }: any) => (
    <StyledContainer>
        <div style={{ textAlign: 'end' }}>
            <Button onClick={() => closeGrPanel()} > cancel </Button>
        </div>

        <P>{lang.gamerules.one}</P>
        <P>{lang.gamerules.two}</P>
    </StyledContainer>
);
