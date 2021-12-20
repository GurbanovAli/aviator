import React, { useState } from 'react';

import { Stage } from '@inlet/react-pixi';
import { connect, ConnectedProps, useSelector } from 'react-redux'

import { StyledContainer } from './style';

import BackgroundAnim from "./animComponets/background"
import LoadAnim from "./animComponets/load"
import Airplane from "./animComponets/airPlane"

import { IAppState } from 'store'

const mapStateToProps = (state: boolean) => ({
    rate: state.rate,
    rate2: state.rate2
})

const connector = connect(mapStateToProps)


const Canvas: React.FC = ({ isStart, setIsStart, win, setWin}: number | any) => {

    const rate = useSelector(state => state.rate.rate);
    const rate2 = useSelector(state => state.rate2.rate2);
    const [isFlying, setIsFlying] = useState<boolean>(false);
    const getStart = isStart || isFlying;

    return (
        <StyledContainer>
            <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0x4D6BC8 }}>
                <BackgroundAnim
                    getStart={getStart}
                    load={<LoadAnim />}
                    airplane={
                        <Airplane
                            rate={rate}
                            rate2={rate2}
                            isStart={isStart}
                            setIsStart={setIsStart}
                            isFlying={isFlying}
                            setIsFlying={setIsFlying}
                            win={win}
                            setWin={setWin}
                        />
                    }
                />
            </Stage>
        </StyledContainer>
    );
}

export default connector(Canvas)
