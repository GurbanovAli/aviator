import React, { useState } from 'react';
// import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import { StyledContainer } from './style'

import Client from "./client"
import Bet from "./bet"
import Canvas from "./canvas"
import GrPanel from './gamerules'

// import { IAppState } from 'store'

// const mapStateToProps = (state: IAppState) => ({
//   fetching: state.common.fetching,
//   check: state.check,
//   rate: state.rate,
//   rate2: state.rate2
// })
// const mapActionsToProps = (dispatch) => ({
// })
//
// const connector = connect(mapStateToProps, mapActionsToProps)
// export type TReduxProps = ConnectedProps<typeof connector>
//
// export type TComponentProps = {
// } & TReduxProps


const Gamble: React.FC = ({ isGr, setIsGr }: any) => {

    const [isStart, setIsStart] = useState(0);
    const [win, setWin] = useState(false);

    const Modal = styled.div`
    	z-index: 100;
    	position: fixed;
    	height: 100vh;
    	width:100vw;
    	background: rgba(0,0,0,0.5);
    `;

    return (
        <StyledContainer>
            <Client />
            {isGr &&
                (
                    <Modal>
                        <GrPanel setIsGr={setIsGr} />
                    </Modal>
                )
            }
            <Canvas isStart={isStart} setIsStart={setIsStart} win={win} setWin={setWin} />
            <Bet
                isStart={isStart}
                setIsStart={setIsStart}
                setWin={setWin}
            />
        </StyledContainer>
    )
}

export default Gamble
