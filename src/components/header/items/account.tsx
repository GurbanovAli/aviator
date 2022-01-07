import React from 'react'

import { StyledAccount, P2 } from './style'

import { useSelector } from 'react-redux'

const Account: React.FC = () => {
    const counter = useSelector(state => state.check.check);

    return (
        <StyledAccount>
            <P2>{counter}$ </P2>
        </StyledAccount>
    )
}

export default Account
