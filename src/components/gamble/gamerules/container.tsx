import React from 'react';

import { StyledContainer, P, Button } from './style'

export default ({ closeGrPanel }: any) => (
    <StyledContainer>
        <P>
            I'ts game rules panel, you stupid shit !!!
            <Button onClick={() => closeGrPanel()}>cancel</Button>
        </P>
    </StyledContainer>
);
