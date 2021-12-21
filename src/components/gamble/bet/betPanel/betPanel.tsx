import React, { useState } from 'react';

import { StyledForm, StyledPanel } from './style'

import Switch from "./buttons/switch"
import BetInput from "./buttons/betInput"
import BetList from "./buttons/betList"
import BetButton from "./buttons/betButton"

const BetPanel: React.FC<any> = ({rates, state, setState}: any) => {

    const [bet, setBet] = useState<number>(5);
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
