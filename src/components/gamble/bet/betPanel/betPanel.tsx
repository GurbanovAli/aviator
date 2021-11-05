import React from 'react';

import { StyledForm } from './style'

import BetInput from "./buttons/betInput"
import BetList from "./buttons/betList"
import BetButton from "./buttons/betButton"

type BetPanelProps = {
    rate: boolean | any;
    setRate: (item: boolean | any) => void;
    getCash: boolean;
    setGetCash: (item: boolean) => void;
    isStart: number;
    setIsStart: (item: number) : void;
    check: number;
    setCheck: (item: number) => void;
    bet: number;
    setBet: (item: number) => void;
}


const BetPanel: React.FC<BetPanelProps> = ({ rate, setRate, getCash, setGetCash, isStart, setIsStart, check, setCheck, bet, setBet }: BetPanelProps) => {
    return (
        <StyledForm onSubmit={() => console.log("SUBMIT")}>
            <BetInput bet={bet} setBet={setBet} />
            <BetButton
                rate={rate}
                setRate={setRate}
                getCash={getCash}
                setGetCash={setGetCash}
                isStart={isStart}
                setIsStart={setIsStart}
                check={check}
                setCheck={setCheck}
                bet={bet}
            />
            <BetList setBet={setBet} />
        </StyledForm>
    )
};

export default BetPanel
