import styled from "styled-components";

export const Div = styled.div`
  width: 8.4rem;
  height: 1.8rem;
  margin-top: 0.4rem;
  display: flex;
  padding: auto;
  background: #333;
  border: 2px solid #696a66;
  border-radius: 0.3em;
`;

export const Button = styled.button`
  width: 4.2rem;
  height: 1.6rem;
  box-sizing: border-box;
  background-color: ${({ getToggle, auto }) => auto ? ( getToggle ? "#696A66" : "transparent" ) : ( !getToggle ? "#696A66" : "transparent" )};
  border: none;
  border-radius: 0.3em;
  color: ${({ getToggle, auto }) => auto ? ( getToggle ? "#fff" : "#8B8C89" ) : ( !getToggle ? "#fff" : "#8B8C89" ) };
  cursor: pointer;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: auto;
  padding: 2px auto;
  text-decoration: none;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const Div2 = styled.div`
  width: 8rem;
  height: 1.8rem;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;

export const Button2 = styled.button`
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
`;

export const Input = styled.input`
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
`;

export const Div3 = styled.div`
  width: 8rem;
  height: 3.7rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Button3 = styled.button`
  width: 3.6rem;
  height: 1.4rem;
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid #696a66;
  border-radius: 0.3em;
  color: #8b8c89;
  cursor: pointer;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  margin: auto;
  padding: 2px auto;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  transition: box-shadow 200ms ease-in-out, color 200ms ease-in-out;
  :hover {
    color: #fff;
    box-shadow: 0 0 40px 40px #696a66 inset;
  }
`;

export const Button4 = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 0.5rem -0.5rem;
  width: 10rem;
  height: 6rem;
  color: white;
  border: none;
  font-size: 26px;
  font-weight: 600;
  font-family: monospace;
  text-transform: uppercase;
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 1 / 3;
  :active {
    background: gray;
  }
  :hover {
    opacity: 0.8;
  }
  @media only screen and(max - width: 960px) {
    width: 8rem;
    height: 4rem;
  }
  @media only screen and(max - width: 600px) {
    width: 5rem;
    height: 4rem;
  } ;
`;

export const P = styled.p`
  width: 10rem;
  margin: -3rem 0 0;
  padding: 0;
  text-align: center;
`;
