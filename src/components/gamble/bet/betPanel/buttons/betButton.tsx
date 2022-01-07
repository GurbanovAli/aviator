import React, { useState } from 'react';

import { connect } from 'react-redux'
import {
    addHistoryOfBet,
    addCheck,
    deleteCheck,
    setRate,
    setRate2,
    cleanTimer,
    setWintext,
    setFormState,
    cleanFormState
} from 'actions';
import { IAppState, IAppDispatch } from 'store'

import { Stage } from '@inlet/react-pixi';

import Counter from '../../../counter'

import { setBetValue } from './items'
import { Button4, P } from './style'

const mapStateToProps = (state: IAppState) => ({
    lang: state.lang,
    historyOfBet: state.historyOfBet,
    rate: state.rate.rate,
    rate2: state.rate2.rate2,
    toggle: state.toggle,
    toggle2: state.toggle2,
    time: state.time,
    stateForms: state.stateForms.stateForms,
    isFlying: state.isFlying
});

const mapDispatchToProps = (dispatch: IAppDispatch) => ({
    addHistoryOfBet: (arr: any[]) => dispatch(addHistoryOfBet(arr)),
    addCheck: (count: number) => dispatch(addCheck(count)),
    deleteCheck: (count: number) => dispatch(deleteCheck(count)),
    setRate: (res: boolean) => dispatch(setRate(res)),
    setRate2: (res: boolean) => dispatch(setRate2(res)),
    cleanTimer: () => dispatch(cleanTimer()),
    setWintext: () => dispatch(setWintext()),
    setFormState: () => dispatch(setFormState()),
    cleanFormState: () => dispatch(cleanFormState())
});

type TBetButton = {
    getCash: boolean;
    setGetCash: (item: boolean) => void;
    bet: number;
    rates: boolean;
    state: boolean;
    setState: (item: boolean) => void;
}

const BetButton: React.FC<TBetButton | IAppState | IAppDispatch> = ({
    getCash,
    setGetCash,
    bet,
    rates,
    state,
    setState,
    ...props }: TBetButton | IAppState | IAppDispatch) => {

    const {
        lang,
        historyOfBet,
        rate,
        rate2,
        toggle,
        toggle2,
        time,
        stateForms,
        isFlying,
        addHistoryOfBet,
        addCheck,
        deleteCheck,
        setRate,
        setRate2,
        cleanTimer,
        setWintext,
        setFormState,
        cleanFormState
    } = props;

    const [count, setCount] = useState<number>(1);

    const isRate = rates ? rate : rate2;
    const getToggle = rates ? toggle : toggle2;
    const isNeighborRate = !rates ? rate : rate2;
    const roundedCount = bet + +count.toFixed(2);

    const clickOnBet = () => {
        if (!time && !getToggle) {
            rates ? setRate(!isRate) : setRate2(!isRate)
        } else if (isRate && time;) {
            setBetValue(bet, count, historyOfBet);
            addCheck(roundedCount)
            setGetCash(isRate);
            setCount(1);
        }
    }

    if (getToggle && !time) {
      rates ? setRate(true) : setRate2(true)
    };


    if (getCash) {
        setWintext();
        setGetCash(false);
        setState(false);
        rates ? setRate(false) : setRate2(false);

        if (!isNeighborRate) {
            cleanTimer();
        }

    } else if (time === +count.toFixed(2)) {
        cleanTimer();
        setState(false);

        if (isRate) {
            setBetValue(bet, count, historyOfBet);

            rates ? setRate(false) : setRate2(false);
            deleteCheck(roundedCount)
            setCount(1);
        }

    } else if (!time && !isNeighborRate && state) {
        setGetCash(false);
        setState(false);
        rates ? setRate(false) : setRate2(false);

    } else if (time) {
        setState(true);
    }

    return (
        <React.Fragment>
            <Button4
                type="button"
                onClick={() => clickOnBet()}
                style={{ background: (isRate ? (time ? "#F0E68C" : "#8B0000") : (getToggle ? "#8B0000" : "#006400")) }}
            >
                {
                    isRate ? (time ?
                        <>
                            <Stage width={0} height={0}>
                                <Counter time={time} lost={true} count={count} setCount={setCount} />
                            </Stage>
                            <P>{"cash out " + roundedCount}</P>
                        </>
                        : (getToggle ? "autoplay" : "cancel")) : (getToggle ? "autoplay" : lang.betButton)
                }
            </Button4>
        </React.Fragment>
    )
};



export default connect(mapStateToProps, mapDispatchToProps)(BetButton)
