import React, { useState } from 'react';

import { connect } from 'react-redux'
import { addHistory, setTimer, cleanTimer, outWintext, setFlying } from 'actions'
import { IAppState, IAppDispatch } from 'store'

import { Stage } from '@inlet/react-pixi';

import { StyledContainer } from './style';
import { device, size } from "device"

import BackgroundAnim from "./animComponets/background"
import LoadAnim from "./animComponets/load"
import Airplane from "./animComponets/airplane"

const mapStateToProps = (state: IAppState) => ({
    lang: state.lang,
    history: state.history,
    rate: state.rate.rate,
    rate2: state.rate2.rate2,
    time: state.time,
    win: state.wintext,
    isFlying: state.isFlying,
    bet: state.bet
});

const mapDispatchToProps = (dispatch: IAppDispatch) => ({
    addHistory: (arr: number[]) => dispatch(addHistory(arr)),
    setTimer: (time: number) => dispatch(setTimer(time)),
    cleanTimer: () => dispatch(cleanTimer()),
    outWintext: () => dispatch(outWintext()),
    setFlying: (value: boolean) => dispatch(setFlying(value))
});

const Canvas: React.FC<IAppState | IAppDispatch> = ({ ...props }: IAppState | IAppDispatch) => {

    const {
        lang,
        history,
        rate,
        rate2,
        time,
        win,
        isFlying,
        bet,
        setTimer,
        addHistory,
        cleanTimer,
        outWintext,
        setFlying } = props;

    const getStart = time || isFlying;

    const { innerWidth: width, innerHeight: height } = window;
    const isSize = Object.values(size);
    const setSize = isSize.find(item => item >= window.innerWidth);

    const setWidth = (size, boolean) => {
        switch (size) {
            case '1024':
                return boolean ? 664: 340;
            case '700':
                return 420;
            default:
                return boolean ? 800: 400;
        }
    }

    return (
        <StyledContainer>
            <Stage width={setWidth(setSize, true)} height={setWidth(setSize)} options={{ autoDensity: true, backgroundColor: 0x4D6BC8 }}>
                <BackgroundAnim
                    getStart={getStart}
                    load={<LoadAnim lang={lang} />}
                    airplane={
                        <Airplane
                            history={history}
                            rate={rate}
                            rate2={rate2}
                            time={time}
                            win={win}
                            isFlying={isFlying}
                            bet={bet}
                            addHistory={addHistory}
                            setTimer={setTimer}
                            cleanTimer={cleanTimer}
                            setFlying={setFlying}
                            outWintext={outWintext}
                        />
                    }
                />
            </Stage>
        </StyledContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
