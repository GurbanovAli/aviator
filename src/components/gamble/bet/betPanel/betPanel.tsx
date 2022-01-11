import React, { useState } from 'react';

import { StyledForm, StyledPanel } from './style'

import Switch from "./buttons/switch"
import BetInput from "./buttons/betInput"
import BetList from "./buttons/betList"
import BetButton from "./buttons/betButton"

type TBetPanel = {
    rates: boolean;
    state: boolean;
    setState: (item: boolean) => void;
}

const BetPanel: React.FC<TBetPanel> = ({ rates, state, setState }: TBetPanel) => {
    const [bet, setBet] = useState<number>(0);
    const [getCash, setGetCash] = useState<boolean>(false);

    return (
        <StyledPanel>
            <Switch rates={rates} />
            <StyledForm onSubmit={() => console.log("SUBMIT")}>
                <BetInput bet={bet} setBet={setBet} rates={rates} />
                <BetButton getCash={getCash} setGetCash={setGetCash} bet={bet} rates={rates} state={state} setState={setState} />
                <BetList setBet={setBet} rates={rates} />
            </StyledForm>
        </StyledPanel>
    )
};

export default BetPanel
