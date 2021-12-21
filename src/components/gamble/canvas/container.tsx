import React, { useState } from 'react';

import { connect } from 'react-redux'
import { setTimer, cleanTimer, outWintext } from '../../../actions/common'
import { IAppState } from 'store'

import { Stage } from '@inlet/react-pixi';

import { StyledContainer } from './style';

import BackgroundAnim from "./animComponets/background"
import LoadAnim from "./animComponets/load"
import Airplane from "./animComponets/airPlane"

const mapStateToProps = (state: IAppState) => ({
    rate: state.rate.rate,
    rate2: state.rate2.rate2,
    time: state.time,
    win: state.wintext
});

const mapDispatchToProps = (dispatch) => ({
    setTimer: (time: number) => dispatch(setTimer(time)),
    cleanTimer: () => dispatch(cleanTimer()),
    outWintext: () => dispatch(outWintext())
});

const Canvas: React.FC = ({ ...props }: any) => {

    const { rate, rate2, time, win, setTimer, cleanTimer, outWintext } = props;

    const [isFlying, setIsFlying] = useState<boolean>(false);
    const getStart = time || isFlying;

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
                            time={time}
                            setTimer={setTimer}
                            cleanTimer={cleanTimer}
                            isFlying={isFlying}
                            setIsFlying={setIsFlying}
                            win={win}
                            outWintext={outWintext}
                        />
                    }
                />
            </Stage>
        </StyledContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
