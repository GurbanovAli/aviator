import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer } from './style'

import Client from "./client"
import Bet from "./bet"
import Canvas from "./canvas"

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


const Container: React.FC<TComponentProps> = () => {

    const [isStart, setIsStart] = useState(0);
    const [rate, setRate] = useState(false);
    const [check, setCheck] = useState(400);

    console.log("main")

    return (
        <StyledContainer>
            <Client />
            <Canvas isStart={isStart} />
            <Bet rate={rate} setRate={setRate} isStart={isStart} setIsStart={setIsStart} check={check} setCheck={setCheck} />
        </StyledContainer>
    )
}

export default connector(Container)
