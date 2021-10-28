import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import data from "../../../data.json"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({})
import { StyledContainer } from './style'

const connector = connect(mapStateToProps, mapActionsToProps)


const Client: React.FC = () => {
    return (
        <StyledContainer>
            "clients"
        </StyledContainer>
    )
};

export default connector(Client)
