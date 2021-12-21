import React from 'react';

import { useSelector } from 'react-redux'

import styled from 'styled-components'

export default ({ bet, setBet, rates}: any) => {
  const getRate = useSelector((state: any) => state.rate.rate);
  const getRate2 = useSelector((state: any) => state.rate2.rate2);
  const rate = rates ? getRate : getRate2;

    return (
        <Div>
            <Button type="button" onClick={() => !rate && setBet(bet > 0.5 ? bet - 0.5 : 0.5)}> - </Button >
            <Input type="text" name="current_bet" value={bet} onChange={(e) => setBet(+e.target.value)} />
            <Button type="button" onClick={() => !rate && setBet(bet <= 10 ? bet + 0.5 : 10)}> + </Button >
        </Div>
    )
}

const Div = styled.div`
  width: 8rem;
  height: 1.8rem;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`

const Button = styled.button`
  border-radius: 5px;
  margin: 0;
  width: 2.5rem;
  height: 1.8rem;
  background: #090f1f;
  color: white;
  border: 0.5px solid white;
  text-align: center;
  align-items: center;
  font-family: sans-serif;
  font-size: "18px";
  cursor: pointer;
    :active {
      background: gray;
    }
  `

const Input = styled.input`
  width: 3rem;
  height: 1.6rem;
  margin: 0;
  text-align: center;
  box-shadow: none;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: 700;
  font-family: sans-serif;
  line-height: 100px;
  -webkit-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  `
