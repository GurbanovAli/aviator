import React, { useState } from 'react';

import { connect } from 'react-redux'
import {
    addCheck,
    deleteCheck,
    setRate,
    setRate2,
    cleanTimer,
    setWintext,
    setFormState,
    cleanFormState
} from '../../../../../actions/common';
import { IAppState } from 'store'

import { Stage } from '@inlet/react-pixi';
import CountTicker from "../../../canvas/animComponets/countTicker"

import styled from 'styled-components'

const mapStateToProps = (state: IAppState) => ({
    rate: state.rate.rate,
    rate2: state.rate2.rate2,
    toggle: state.toggle,
    time: state.time,
    stateForms: state.stateForms.stateForms
});

const mapDispatchToProps = (dispatch) => ({
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
    toggle: boolean;
    time: number;
    stateForms: any;
    addCheck: (item: number) => void;
    deleteCheck: (item: number) => void;
    setRate: (item: boolean) => void;
    setRate2: (item: boolean) => void;
    cleanTimer: () => void;
    setWintext: () => void;
    setFormState: () => void;
    cleanFormState: () => void;
}

const BetButton: React.FC<TBetButton> = ({ getCash, setGetCash, bet, rates, state, setState, ...props }: TBetButton) => {

    const { rate, rate2, toggle, time, stateForms, addCheck, deleteCheck, setRate, setRate2, cleanTimer, setWintext, setFormState, cleanFormState } = props;

    const [count, setCount] = useState<number>(1);

    const isRate = rates ? rate : rate2;
    const isNeighborRate = !rates ? rate : rate2;
    const getIsStart = isRate && time;
    const roundedCount = bet + +count.toFixed(2);

    const clickOnBet = () => {
        if (!time && !toggle) {
            rates ? setRate(!isRate) : setRate2(!isRate)
        } else if (getIsStart) {
            addCheck(roundedCount)
            setGetCash(isRate);
            setCount(1)
        }
    }

    if (toggle && !time) rates ? setRate(true) : setRate2(true);
    if (getCash) setWintext();


    if (getCash) {
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
            <Button
                type="button"
                onClick={() => clickOnBet()}
                style={{ background: (isRate ? (time ? "#F0E68C" : "#8B0000") : (toggle ? "#8B0000" : "#006400")) }}
            >
                {
                    isRate ? (time ?
                        <>
                            <Stage width={0} height={0}>
                                <CountTicker time={time} lost={true} count={count} setCount={setCount} />
                            </Stage>
                            <P>{"cash out " + roundedCount.toFixed(2)}</P>
                        </>
                        : (toggle ? "autoplay" : "cancel")) : (toggle ? "autoplay" : "bet")
                }
            </Button>
        </React.Fragment>
    )
};

const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 0.5rem -0.5rem;
  width: 10rem;
  height: 6rem;
  color: white;
  border: none;
  font-size: 26px;
  font-weight: 600;
  font-family: monospace;
  text-transform: uppercase;
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 1 / 3;
    :active{
      background: gray;
    }
    :hover {
      opacity: 0.8;
    }
  `

const P = styled.p`
    width: 10rem;
    margin: -3rem 0 0;
    padding: 0;
    text-align: center;
    `

export default connect(mapStateToProps, mapDispatchToProps)(BetButton)
