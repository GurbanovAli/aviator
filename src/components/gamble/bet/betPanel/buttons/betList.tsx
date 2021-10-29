import React from 'react';

import data from "../../../../../data.json"

import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  margin: "0";
  width: "3rem";
  height: "1.7rem";
  background: "#090f1f";
  color: white;
  border: 0.5px solid white;
  text-align: center;
  align-items: center;
  font-family: sans-serif;
  font-size: "18px";
  cursor: pointer;
    :active{
      background: gray;
    }
  `

const BetList: React.FC = ({ setBet }: any) => {
    return (
        <>
            {
                data.bet.map((el, index) => <Button type="button" key={index} onClick={() => setBet(el)}>{el}$</Button>)
            }
        </>
    )
}

export default BetList
