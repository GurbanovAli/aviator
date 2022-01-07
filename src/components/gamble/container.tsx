import React, { useState } from 'react';

import { connect } from 'react-redux'
import { closeGrPanel } from 'actions'
import { IAppState, IAppDispatch } from 'store'

import { StyledContainer, Modal } from './style'

import HBets from "../history/bet_history"
import HCounts from "../history/count_history"
import Bet from "./bet"
import Canvas from "./canvas"
import GrPanel from '../gamerules'

const mapStateToProps = (state: IAppState) => ({
    lang: state.lang,
    gamerules: state.gamerules
});

const mapDispatchToProps = (dispatch) => ({
    closeGrPanel: () => dispatch(closeGrPanel())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const Gamble: React.FC = ({ ...props }: IAppState | any) => {
    const { lang, gamerules, closeGrPanel } = props;

    return (
        <>
            {
                gamerules && (
                    <Modal>
                        <GrPanel lang={lang} closeGrPanel={closeGrPanel} />
                    </Modal>
                )
            }
            <StyledContainer>
                <HBets />
                <HCounts />
                <Canvas />
                <Bet />
            </StyledContainer>
        </>
    )
}

export default connector(Gamble)
