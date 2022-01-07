import React, { useCallback } from 'react'

import { goTo } from 'route-history'
import { StyledLogo, P } from './style'

const Logo: React.FC = () => {
    return (
        <StyledLogo onClick={useCallback(() => goTo('/'), [])}>
            <P> Aviator </P>
        </StyledLogo>
    )
}

export default Logo
