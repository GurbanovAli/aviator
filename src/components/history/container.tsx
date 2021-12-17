import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, P } from './style'

import data from "../../data.json"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({})

const connector = connect(mapStateToProps, mapActionsToProps)


const History: React.FC = () => {
    return (
        <StyledContainer>
            {
                data.history.slice(0, 14).map((item, index) => (<P key={index}>{item + "x"}</P>)
            }
        </StyledContainer>
    )
};

export default connector(History)
