import React from 'react';

import data from "../../../../../data.json"

import styled from 'styled-components'


const Button = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid #696A66;
  border-radius: 0.6em;
  color: #8B8C89;
  cursor: pointer;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 4px;
  padding: 3px 12px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  :hover {
    color: #fff;
    box-shadow: 0 0 40px 40px #696A66 inset;
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
