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

const Container: React.FC<TComponentProps> = (props) => {

    const [rate, setRate] = useState<any>(false);
    const [check, setCheck] = useState<number>(400);

    return (
        <StyledContainer>
            <Client />
            <Canvas rate={rate} />
            <Bet rate={rate} setRate={setRate} check={check} setCheck={setCheck} />
        </StyledContainer>
    )
}

export default connector(Container)
