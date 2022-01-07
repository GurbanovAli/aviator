import styled from "styled-components";

export const StyledContainer = styled.main`
  font-family: math;
  width: 60rem;
  height: 40rem;
  margin: 1rem auto;
  background: background-color: #e9bcb7;
  background-image: linear-gradient(315deg, #e9bcb7 0%, #29524a 74%);
  color: #fff;
  border-radius:6px;
  text-align: justify;
`;

export const P = styled.p`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.2;
  color: white;
  margin: 1rem 2rem;
`;

export const Button = styled.button`
  display: inline-block;
  font: bold 13px/18px Arial;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.5);
  margin: 1px 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);

  color: #8b8b8b;
  padding: 8px 20px;
  background: #e8e8e8;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  cursor: pointer;

  background: #e5e5e5;
  background: -moz-linear-gradient(top, #e5e5e5 51%, #d7d7d7 51%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(51%, #e5e5e5),
    color-stop(51%, #d7d7d7)
  );
  background: -webkit-linear-gradient(top, #e5e5e5 51%, #d7d7d7 51%);
  background: -o-linear-gradient(top, #e5e5e5 51%, #d7d7d7 51%);
  background: -ms-linear-gradient(top, #e5e5e5 51%, #d7d7d7 51%);
  background: linear-gradient(top, #e5e5e5 51%, #d7d7d7 51%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5e5e5', endColorstr='#d7d7d7',GradientType=0 );
`;
