import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: 13rem;
  height: 4rem;
  color: white;
  border: none;
  font-size: 26px;
  font-weight: 600;
  font-family: monospace;
  text-transform: uppercase;
  cursor: pointer;
    :active{
      background: gray;
    }
  `

const P = styled.p`
    width: 12rem;
    margin: 0 0 0 0.5rem;
    padding: 0;
    text-align: left;
    `

const BetButton: React.FC = ({ rate, setRate, bet, setBet, setIsBet, textWin }: boolean | any) => {

  const random = Math.floor(Math.random() * 10);
  const randomNumber = 15 //random ===  1 ? 1.2 : random;

  const []
  const [count, setCount] = useState(0);
  const [x, setX] = useState(1);
  let i = 0;

  useEffect(() => {
    if (rate) {
      i += 0.000025;

      setX((i * 2) + x);
      let roundedCount = +String(bet * x).slice(0, 4);
      setCount(roundedCount);
    } else {
      setX(1);
      setCount(0);
    }
  });

  if(!rate){
    setTimeout(() => setRate(rate ? true : randomNumber), 6000);
  }

  return (
    <React.Fragment>
      <Button
        type="button"
        onClick={()=> {setRate(rate && true); setIsBet(true)}}
        style={{ background: (rate ? "#f2b200" : "green") }}
      >
        {
          rate ? <P>{"cash out " + count}</P> : "bet"
        }
      </Button>
    </React.Fragment>
  )
};

export default BetButton
