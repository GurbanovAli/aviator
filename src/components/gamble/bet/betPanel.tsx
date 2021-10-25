import React, { useState } from 'react';

import styled from 'styled-components'
import { StyledForm } from './style'

import data from "../../../data.json"

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: ${props => props.primary ? "0.5rem 1rem" : "0.5rem"};
  width: ${props => props.primary ? "6rem" : "4rem"};
  height: ${props => props.primary ? "3rem" : "2rem"};
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
    :active{
      background: gray;
    }
  `

const BetPanel: React.FC = ({ rate, setRate, bet, setBet }: boolean | any) => {

  const randomNumber = 16;//Math.floor(Math.random() * 10);
  const filteredBet = data.bet.filter((el, i) => (el >= bet || el >= 10) ? bet : null).slice(0, 4);
  console.log(0)

  return (
    <StyledForm>
      <form onSubmit={() => console.log(bet)}>
        <div>
          <button type="button" onClick={() => setBet(bet > 1 ? bet - 1 : 1)}> - </button>
          <input type="text" name="current_bet" value={bet} onChange={(e) => setBet(+e.target.value)} />
          <button type="button" onClick={() => setBet(bet < 100 ? bet + 1 : 100)}> + </button>
        </div>

        <div>
          {
            filteredBet.map((el, index) => <Button type="button" key={index} onClick={() => setBet(el)}>{el}$</Button>)
          }
        </div>
        <Button type="button" primary onClick={() => setRate(rate ? true : randomNumber)}>
          bet
        </Button>
      </form>
    </StyledForm>
  )
};

export default BetPanel
