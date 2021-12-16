import React from "react";
import styled from "styled-components";

export default ({ toggle, setToggle }: any) => {
    const auto = true;
    return (
        <Div>
            <Button {...{ toggle }} onClick={() => setToggle(false)}>{"bet"}</Button>
            <Button {...{ toggle, auto }} onClick={() => setToggle(true)}>{"auto"}</Button>
        </Div>
    );
};

const Div = styled.div`
  width: 8.4rem;
  height: 1.8rem;
  margin-top: 0.4rem;
  display: flex;
  padding: auto;
  background: #333;
  border: 2px solid #696A66;
  border-radius: 0.3em;
`;

const Button = styled.button`
    width: 4.2rem;
    height: 1.6rem;
    box-sizing: border-box;
    background-color: ${({ toggle, auto }) => (auto ? (toggle ? "#696A66" : "transparent") : (!toggle ? "#696A66" : "transparent"))};
    border: none;
    border-radius: 0.3em;
    color: ${({ toggle, auto }) => (auto ? (toggle ? "#fff" : "#8B8C89") : (!toggle ? "#fff" : "#8B8C89"))};
    cursor: pointer;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: auto;
    padding: 2px auto;
    text-decoration: none;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`;
