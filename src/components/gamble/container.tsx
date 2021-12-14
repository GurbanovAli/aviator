import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import { StyledContainer } from './style'

import Client from "./client"
import Bet from "./bet"
import Canvas from "./canvas"
import GrPanel from './gamerules'

import { IAppState } from 'store'


const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>

export type TComponentProps = {
} & TReduxProps


const Gamble: React.FC<TComponentProps> = ({ check, setCheck, isGr, setIsGr }: any) => {

    const [isStart, setIsStart] = useState(0);
    const [rate, setRate] = useState(false);
    const [rate2, setRate2] = useState(false);

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
            { isGr &&
                (
                    <Modal>
                        <GrPanel setIsGr={setIsGr}/>
                    </Modal>
                )
            }
            <Canvas rate={rate} rate2={rate2} isStart={isStart} setIsStart={setIsStart}/>
            <Bet rate={rate} setRate={setRate} rate2={rate2} setRate2={setRate2} isStart={isStart} setIsStart={setIsStart} check={check} setCheck={setCheck} />
        </StyledContainer>
    )
}

export default connector(Gamble)
