import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components'

import { Stage } from '@inlet/react-pixi';
import CountTicker from "../../../canvas/animComponets/countTicker"

import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux'

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching,
    check: state.common.check
})

const MODULE_NAME = 'COMMON'
const SET_CHECK = `${MODULE_NAME}/SET_CHECK`

const setCheck = (bet) => ({
    type: SET_CHECK,
    bet: bet
  })

const mapDispatchToProps = (dispatch, bet) => ({
    setCheck: () => dispatch(setCheck( bet))
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
    rate: boolean | any;
    setRate: (item: boolean | any) => void;
    getCash: boolean;
    setGetCash: (item: boolean) => void;
    isStart: number;
    setIsStart: (item: number) => void;
    bet: number;
    state: any;
    setState: any;
    toggle: boolean;
}

const BetButton: React.FC<BetButtonProps> = ({ rate, setRate, rate2, getCash, setGetCash, isStart, setIsStart, bet, state, setState, toggle, setCheck }: BetButtonProps) => {

    const [count, setCount] = useState(1);
    const getIsStart = rate && isStart;

    const clickOnBet = () => {
        if (!isStart && !toggle) {
            setRate(!rate ? true : false);
        } else if (getIsStart) {

            setCheck(bet + count)
            setGetCash(rate);
            // setCheck(check + count + bet)
            setCount(1)
        }
    }

    if (toggle && !isStart) {
        setRate(true);
    }

    let roundedCount = bet + +count.toFixed(2);

    if (getCash) {
        setGetCash(false);
        setRate(false);
        setState(false);
        if (!rate2) {
            setIsStart(0);
        }

    } else if (isStart === +count.toFixed(2)) {
        setIsStart(0);
        setState(false);
        if (rate) {
            setRate(false);
            // setCheck(check - bet)
            setCount(1)
        }
    } else if (!isStart && !rate2 && state) {
        setGetCash(false);
        setRate(false);
        setState(false)
    } else if (isStart) {
        setState(true)
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
