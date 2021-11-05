import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import IsCounter from "../../isCounter/isCounter"

const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 1rem;
  width: 10rem;
  height: 8rem;
  color: white;
  border: none;
  font-size: 26px;
  font-weight: 600;
  font-family: monospace;
  text-transform: uppercase;
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
    grid-row-end: 2;
    :active{
      background: gray;
    }
    :hover {
      opacity: 0.8;
    }
  `

const P = styled.p`
    width: 12rem;
    margin: 0 0 0 0.5rem;
    padding: 0;
    text-align: left;
    `

type BetButtonProps = {
    rate: boolean | any;
    setRate: (item: boolean | any) => void;
    getCash: boolean;
    setGetCash: (item: boolean) => void;
    isStart: number;
    setIsStart: (item: number) => void;
    check?: number;
    setCheck?: (item: number) => void;
    bet: number;
}


const BetButton: React.FC<BetButtonProps> = ({ rate, setRate, getCash, setGetCash, isStart, setIsStart, check, setCheck, bet }: BetButtonProps) => {

    const [count, setCount] = useState(1);
    const getIsStart = rate && isStart;

    const clickOnBet = () => {
        if (!isStart) {
            setRate(!rate ? true : false);
        } else if (getIsStart) {
            setGetCash(rate);
            setCheck(check + count + bet)
        }
    }

    return (
        <React.Fragment>
            <Button
                type="button"
                onClick={() => clickOnBet()}
                style={{ background: (rate ? isStart ? "#F0E68C" : "#8B0000" : "#006400") }}
            >
                {
                    rate ? (isStart ?
                        <P>
                            <IsCounter
                                isStart={getIsStart}
                                count={count + bet}
                                setCount={setCount}
                                text="cash out "
                            />
                        </P> : "cancel") : "bet"
                }
            </Button>
        </React.Fragment>
    )
};

export default BetButton
