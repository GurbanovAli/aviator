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


const Canvas = ({ rate, rate2 isStart, setIsStart, win, setWin }: number | any) => {

    const [isFlying, setIsFlying] = useState<boolean>(false);
    const getStart = isStart || isFlying;

    return (
        <StyledContainer>
            <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0x4D6BC8 }}>
                <BackgroundAnim
                    getStart={getStart}
                    load={<LoadAnim />}
                    airplane={<Airplane
                        rate={rate}
                        rate2={rate2}
                        isStart={isStart} 
                        setIsStart={setIsStart}
                        isFlying={isFlying}
                        setIsFlying={setIsFlying}
                        win={win}
                        setWin={setWin}
                      />}
                />
            </Stage>
        </StyledContainer>
    );
}

export default connector(Canvas)
