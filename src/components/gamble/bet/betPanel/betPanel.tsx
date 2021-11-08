import React from 'react';

import { StyledForm, StyledPanel } from './style'
import { Switch } from 'antd';

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


const BetPanel: React.FC<BetPanelProps> = ({ rate, setRate, rate2, getCash, setGetCash, isStart, setIsStart, check, setCheck, bet, setBet, state, setState }: BetPanelProps) => {
    return (
        <StyledPanel>
            <Switch checkedChildren="auto" unCheckedChildren="not auto" defaultChecked />
            <StyledForm onSubmit={() => console.log("SUBMIT")}>
                <BetInput bet={bet} setBet={setBet} />
                <BetButton
                    rate={rate}
                    setRate={setRate}
                    rate2={rate2}
                    getCash={getCash}
                    setGetCash={setGetCash}
                    isStart={isStart}
                    setIsStart={setIsStart}
                    check={check}
                    setCheck={setCheck}
                    bet={bet}
                    state={state}
                    setState={setState}
                />
                <BetList setBet={setBet} />
            </StyledForm>
        </StyledPanel>
    )
};

export default BetPanel
