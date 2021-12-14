import React, {useState} from 'react';

import styled from 'styled-components'
import { StyledForm, StyledPanel } from './style'

import Switch from "./buttons/switch"
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

const BetPanel: React.FC<BetPanelProps> = ({ rate, setRate, rate2, getCash, setGetCash, isStart, setIsStart, check, setCheck, bet, setBet, state, setState, toggle, setToggle }: BetPanelProps) => {
    return (
        <StyledPanel>
            <Switch color="blue" toggle={toggle} setToggle={setToggle} />
            <StyledForm onSubmit={() => console.log("SUBMIT")}>
                <BetInput rate={rate} bet={bet} setBet={setBet} />
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
                    toggle={toggle}
                />
                <BetList rate={rate} setBet={setBet} />
            </StyledForm>
        </StyledPanel>
    )
};

export default BetPanel
