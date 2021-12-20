import React, { useState } from 'react';

import styled from 'styled-components'
import { StyledForm, StyledPanel } from './style'

import Switch from "./buttons/switch"
import BetInput from "./buttons/betInput"
import BetList from "./buttons/betList"
import BetButton from "./buttons/betButton"

type BetPanelProps = {
    getCash: boolean;
    setGetCash: (item: boolean) => void;
    isStart: number;
    setIsStart: (item: number) : void;
    bet: number;
    setBet: (item: number) => void;
}

const BetPanel: React.FC<BetPanelProps> = ({ getCash, setGetCash, isStart, setIsStart, bet, setBet, state, setState, toggle, setToggle, rates }: BetPanelProps) => {
    return (
        <StyledPanel>
            <Switch toggle={toggle} setToggle={setToggle} />
            <StyledForm onSubmit={() => console.log("SUBMIT")}>
                <BetInput bet={bet} setBet={setBet} rates={rates} />
                <BetButton
                    getCash={getCash}
                    setGetCash={setGetCash}
                    isStart={isStart}
                    setIsStart={setIsStart}
                    bet={bet}
                    state={state}
                    setState={setState}
                    toggle={toggle}
                    rates={rates}
                />
                <BetList setBet={setBet} rates={rates} />
            </StyledForm>
        </StyledPanel>
    )
};

export default BetPanel
