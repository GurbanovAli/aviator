import React from 'react'

import styled from 'styled-components'

import Logo from './items/logo'
import Account from './items/account'
import GrButton from './items/button'
import Lang from './items/lang'

export default () => (
    <StyledHeader>
        <Logo />
        <GrButton />
        <Account />
        <Lang />
    </StyledHeader>
)

const StyledHeader = styled.header`
  height:60px;
  background:#001529;
  display:flex;
  padding: 10px;
  align-items:center;
  color:#fff;
  padding: 0 2.5em;
`
