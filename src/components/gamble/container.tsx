import React, { useState } from 'react';

import { connect } from 'react-redux'
import { closeGrPanel } from '../../actions/common'
import { IAppState } from 'store'

import { StyledContainer, Modal } from './style'

import Client from "./client"
import Bet from "./bet"
import Canvas from "./canvas"
import GrPanel from './gamerules'

const mapStateToProps = (state: IAppState) => ({
  gamerules: state.gamerules
});

const mapDispatchToProps = (dispatch) => ({
  closeGrPanel: () => dispatch(closeGrPanel())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const Gamble: React.FC = ({ ...props }: any) => {
    const { gamerules, closeGrPanel } = props;

    return (
        <StyledContainer>
            <Client />
            {
                gamerules && (
                    <Modal>
                        <GrPanel closeGrPanel={closeGrPanel} />
                    </Modal>
                )
            }
            <Canvas />
            <Bet />
        </StyledContainer>
    )
}

export default connector(Gamble)
