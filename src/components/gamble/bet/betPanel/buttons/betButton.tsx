import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: 13rem;
  height: 4rem;
  color: white;
  border: none;
  font-size: 26px;
  font-weight: 600;
  font-family: monospace;
  text-transform: uppercase;
  cursor: pointer;
    :active{
      background: gray;
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

    let i = 0;
    const [count, setCount] = useState(0);
    const [x, setX] = useState(1);

    useEffect(() => {
        if (rate && isStart) {
            i += 0.000025;

            setX((i * 2) + x);
            let roundedCount = +String(bet * x).slice(0, 4);
            setCount(roundedCount);
        } else {
            setX(1);
            setCount(0);
        }
    });

    const clickOnBet = () => {
        if (!isStart) {
            setRate(!rate ? true : false);
        } else if (isStart) {
            setGetCash(rate && true);
            setCheck(check + count)
        }
    }

    return (
        <React.Fragment>
            <Button
                type="button"
                onClick={() => clickOnBet()}
                style={{ background: (rate ? isStart ? "#f2b200" : "red" : "green") }}
            >
                {
                    rate ? (isStart ? <P>{"cash out " + count}</P> : "cancel") : "bet"
                }
            </Button>
        </React.Fragment>
    )
};

export default BetButton
