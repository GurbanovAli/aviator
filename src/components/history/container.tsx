import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import data from "../../data.json"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({})
import { StyledContainer, P } from './style'

const connector = connect(mapStateToProps, mapActionsToProps)


const History: React.FC = () => {
    return (
        <StyledContainer>
            {
              data.history.slice(0, 14).map(item => (<P>{item + "x"}</P>)
            }
        </StyledContainer>
    )
};

export default connector(History)
