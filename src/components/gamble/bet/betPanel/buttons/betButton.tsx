import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components'

import { Stage } from '@inlet/react-pixi';
import CountTicker from "../../../canvas/animComponets/countTicker"

import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux'

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching,
    check: state.check.check,
    rate: state.rate.rate,
    rate2: state.rate2.rate2
})

const ADD_CHECK = `ADD_CHECK`
const DELETE_CHECK = `DELETE_CHECK`
const RATE_ONE = `RATE_ONE`
const RATE_TWO = `RATE_TWO`

const addCheck = ({ count, bet }: number) => ({
    type: ADD_CHECK,
    bet: bet,
    count: count
})

const deleteCheck = ({ count, bet }: number) => ({
    type: DELETE_CHECK,
    bet: bet,
    count: count
})

const setRate = (bool) => ({ type: RATE_ONE, rate: bool })
const setRate2 = (bool) => ({ type: RATE_TWO, rate2: bool })


const mapDispatchToProps = (dispatch, bet) => ({
    addCheck: () => dispatch(addCheck(bet)),
    deleteCheck: () => dispatch(deleteCheck(bet)),
    setRate: (bool) => dispatch(setRate(bool)),
    setRate2: (bool) => dispatch(setRate2(bool))
})


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

type BetButtonProps = {
    getCash: boolean;
    setGetCash: (item: boolean) => void;
    isStart: number;
    setIsStart: (item: number) => void;
    bet: number;
    state: any;
    setState: any;
    toggle: boolean;
    rates: boolean;
}

const BetButton: React.FC<BetButtonProps> = ({ getCash, setGetCash, isStart, setIsStart, bet, state, setState, toggle, rates, addCheck, deleteCheck, setRate, setRate2 }: BetButtonProps) => {

    const getRate = useSelector(state => state.rate.rate );
    const getRate2 = useSelector(state => state.rate2.rate2);
    const rate = rates ? getRate : getRate2;
    const rate2 = !rates ? getRate : getRate2;
    console.log(rate, rate2);


    const [count, setCount] = useState(1);
    const getIsStart = rate && isStart;

    const clickOnBet = () => {
        if (!isStart && !toggle) {
            rates ? setRate(true) : setRate2(true);
        } else if (getIsStart) {
            addCheck()
            setGetCash(rate);
            setCount(1)
        }
    }

    if (toggle && !isStart) rates ? setRate(true) : setRate2(true);

    let roundedCount = bet + +count.toFixed(2);

    if (getCash) {
        setGetCash(false);
        rates ? setRate(false) : setRate2(false));
        setState(false);
        if (!rate2) {
            setIsStart(0);
        }

    } else if (isStart === +count.toFixed(2)) {
        setIsStart(0);
        setState(false);
        if (rate) {
            rates ? setRate(false) : setRate2(false));
            deleteCheck()
            setCount(1);
        }
    } else if (!isStart && !rate2 && state) {
        setGetCash(false);
        rates ? setRate(false) : setRate2(false));
        setState(false)
    } else if (isStart) {
        setState(true);
    }

    return (
        <React.Fragment>
            <Button
                type="button"
                onClick={() => clickOnBet()}
                style={{ background: (rate ? (isStart ? "#F0E68C" : "#8B0000") : (toggle ? "#8B0000" : "#006400")) }}
            >
                {
                    rate ? (isStart ?
                        <>
                            <Stage width={0} height={0}>
                                <CountTicker isStart={isStart} lost={true} count={count} setCount={setCount} />
                            </Stage>
                            <P>{"cash out " + roundedCount.toFixed(2)}</P>
                        </>
                        : (toggle ? "autoplay" : "cancel")) : (toggle ? "autoplay" : "bet")
                }
            </Button>
        </React.Fragment>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(BetButton)
