import React, { useState } from 'react';

import styled from 'styled-components'
import { StyledForm } from './style'
import BetButton from "./betButton"

import data from "../../../../data.json"

const Button = styled.button`
  border-radius: 5px;
  margin: ${props => props.primary ? "0" : "0.5rem 0.2rem"};
  width: ${props => props.primary ? "3rem" : "4rem"};
  height: ${props => props.primary ? "1.7rem" : "1.8rem"};
  background: ${props => props.primary ? "#090f1f" : "#363636"};
  color: white;
  border: 0.5px solid white;
  text-align: center;
  align-items: center;
  font-family: sans-serif;
  font-size: ${props => props.primary ? "18px" : "16px"};
  cursor: pointer;
    :active{
      background: gray;
    }
  `
const Div = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`
const Input = styled.input`
  width: 4rem;
  height: 1.6rem;
  margin: 0;
  text-align: center;
  box-shadow: none;
  outline: none;
  border: none;
  position: relative;
  font-size: 20px;
  font-weight: 700;
  font-family: sans-serif;
  line-height: 100px;
  -webkit-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  `

type BetPanelProps = {
  rate: boolean | any;
  setRate: (item: boolean | any) => void;
  bet: number;
  setBet: (item: number) => void;
  textWin: number | any;
}

const BetPanel: React.FC<BetPanelProps> = ({ rate, setRate, bet, setBet, textWin }: BetPanelProps) => {

  const filteredBet = data.bet.filter((el, i) => (bet >= 5 || el >= 10) ? el : null).slice(0, 4);
  const [isBet, setIsBet] = useState<boolean>(false);

  return (
    <StyledForm onSubmit={() => console.log(bet)}>
      <Div>
        <Button type="button" primary onClick={() => setBet(bet > 1 ? bet - 1 : 1)}> - </Button >
        <Input type="text" name="current_bet" value={bet ? bet : 5} onChange={(e) => setBet(+e.target.value)} />
        <Button type="button" primary onClick={() => setBet(bet < 100 ? (bet === 0 ? 5 + 1 : bet + 1): 100)}> + </Button >
      </Div>

      <div>
        {
          filteredBet.map((el, index) => <Button type="button" key={index} onClick={() => setBet(el)}>{el}$</Button>)
        }
      </div>

      <BetButton
        rate={rate}
        setRate={setRate}
        bet={bet}
        setBet={setBet}
        setIsBet={setIsBet}
        textWin={textWin}
      />
    </StyledForm>
  )
};

export default BetPanel
