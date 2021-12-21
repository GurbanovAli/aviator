import React from 'react';

import { useSelector } from 'react-redux'

import data from "../../../../../data.json"

import styled from 'styled-components'

export default ({ setBet, rates }: any) => {
 const getRate = useSelector((state: any) => state.rate.rate);
 const getRate2 = useSelector((state: any) => state.rate2.rate2);
 const rate = rates ? getRate : getRate2;

   return (
       <Div>
           {
               data.bet.map((el, index) => <Button type="button" key={index} onClick={() => !rate && setBet(el)}>{el}$</Button>)
           }
       </Div>
   )
}

const Div = styled.div`
  width: 8rem;
  height: 3.7rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`

const Button = styled.button`
  width: 3.6rem;
  height: 1.4rem;
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid #696A66;
  border-radius: 0.3em;
  color: #8B8C89;
  cursor: pointer;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  margin: auto;
  padding: 2px auto;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 200ms ease-in-out, color 200ms ease-in-out;
  :hover {
    color: #fff;
    box-shadow: 0 0 40px 40px #696A66 inset;
  }
  `
