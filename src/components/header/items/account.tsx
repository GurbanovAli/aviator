import React from 'react'

import { StyledAccount, P3 } from './style'

import { useSelector } from 'react-redux'

const Account: React.FC = () => {
    const counter = useSelector(state => state.check.check);

    return (
        <StyledAccount>
            <P3>{counter}$ </P3>
        </StyledAccount>
    )
}

export default Account
