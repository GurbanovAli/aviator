import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import data from "../../../data.json"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})
import { StyledContainer } from './style'

const connector = connect(mapStateToProps, mapActionsToProps)

const P = styled.p`
  font-size:70px;
  color: white;
  `

const Counter: React.FC = () => {
    return (
        <StyledContainer>
            <P> x </P>
        </StyledContainer>
    )
};

export default connector(Counter)
