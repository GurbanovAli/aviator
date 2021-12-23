import React, { useState } from 'react';

import { connect } from 'react-redux'
import { addHistory, setTimer, cleanTimer, outWintext, setFlying } from '../../../actions/common'
import { IAppState } from 'store'

import { Stage } from '@inlet/react-pixi';

import { StyledContainer } from './style';

import BackgroundAnim from "./animComponets/background"
import LoadAnim from "./animComponets/load"
import Airplane from "./animComponets/airPlane"

const mapStateToProps = (state: IAppState) => ({
    lang: state.lang,
    history: state.history,
    rate: state.rate.rate,
    rate2: state.rate2.rate2,
    time: state.time,
    win: state.wintext,
    isFlying: state.isFlying
});

const mapDispatchToProps = (dispatch) => ({
    addHistory: (arr: number[]) => dispatch(addHistory(arr)),
    setTimer: (time: number) => dispatch(setTimer(time)),
    cleanTimer: () => dispatch(cleanTimer()),
    outWintext: () => dispatch(outWintext()),
    setFlying: (value: boolean) => dispatch(setFlying(value))
});

const Canvas: React.FC = ({ ...props }: any) => {

    const { lang, history, rate, rate2, time, win, isFlying, setTimer, addHistory, cleanTimer, outWintext, setFlying } = props;
    const getStart = time || isFlying;

    return (
        <StyledContainer>
            <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0x4D6BC8 }}>
                <BackgroundAnim
                    getStart={getStart}
                    load={<LoadAnim lang={lang}/>}
                    airplane={
                        <Airplane
                            history={history}
                            rate={rate}
                            rate2={rate2}
                            time={time}
                            addHistory={addHistory}
                            setTimer={setTimer}
                            cleanTimer={cleanTimer}
                            isFlying={isFlying}
                            setFlying={setFlying}
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
