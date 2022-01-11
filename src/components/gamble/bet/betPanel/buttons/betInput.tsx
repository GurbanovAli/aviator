import React from 'react';

import { useSelector } from 'react-redux'

import { Div2, Input, Button2 } from './style'

type TBetInput = {
  bet: number;
  setBet: (item: number) => void;
  rates: boolean;
}

export default ({ bet, setBet, rates }: TBetInput) => {
    const getRate = useSelector((state: boolean) => state.rate.rate);
    const getRate2 = useSelector((state: boolean) => state.rate2.rate2);
    const rate = rates ? getRate : getRate2;

    return (
        <Div2>
            <Button2
                type="button"
                onClick={() => !rate && setBet(bet > 0.5 ? bet - 0.5 : 0.5)}
            >
                -
            </Button2>
            <Input
                type="text"
                name="current_bet"
                value={bet != 0 ? bet : 1}
                onChange={(e) => setBet(+e.target.value)}
            />
            <Button2
                type="button"
                onClick={() => !rate && setBet(bet <= 10 && bet != 10 ? bet + 0.5 : 10)}
            >
                +
            </Button2>
        </Div2>
    )
}
