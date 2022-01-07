import React from 'react';

import { useSelector } from 'react-redux'

import { Div3, Button3 } from './style'

type TBetList = {
    setBet: (item: number) => void;
    rates: boolean;
}

export default ({ setBet, rates }: TBetList) => {
    const getData = useSelector((state: any) => state.data);
    const getRate = useSelector((state: boolean) => state.rate.rate);
    const getRate2 = useSelector((state: boolean) => state.rate2.rate2);
    const rate = rates ? getRate : getRate2;

    return (
        <Div3>
            {
                getData.bet.map((el, index) => <Button3 type="button" key={index} onClick={() => !rate && setBet(el)}>{el}$</Button3>)
            }
        </Div3>
    )
}
