import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { Stage } from '@inlet/react-pixi';

import { IAppState } from 'store'

import { StyledContainer } from './style';

import BackgroundAnim from "./animComponets/background"
import LoadAnim from "./animComponets/load"
import Airplane from "./animComponets/airPlane"
// import LoadText from "./animComponets/texts"

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})
const connector = connect(mapStateToProps, mapActionsToProps)


const Canvas = ({ isStart }: number) => {

    const [isFlying, setIsFlying] = useState<boolean>(false);
    const getStart = isStart || isFlying;

    console.log("canvas")

    return (
        <StyledContainer>
            <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0x4D6BC8 }}>
                <BackgroundAnim
                    getStart={getStart}
                    load={<LoadAnim />}
                    airplane={<Airplane isStart={isStart} isFlying={isFlying} setIsFlying={setIsFlying} />}
                />
            </Stage>
        </StyledContainer>
    );
}

export default connector(Canvas)
