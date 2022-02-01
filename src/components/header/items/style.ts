import styled from "styled-components";
import { device } from 'device'

export const StyledLogo = styled.div`
  width: 10em;
  margin: auto;
  margin-left: 0.2em;
  text-align: center;
`;

export const P = styled.p`
  font-size: 38px;
  font-family: cursive;
  font-weight: 700;
  font-weight: 500;
  line-height: 1;
  color: white;
  margin: 0.1em auto;
`;

export const StyledButton = styled.div`
  width: 12em;
  height: 2.4em;
  background-color: #29539b;
  background-image: linear-gradient(315deg, #29539b 0%, #1e3b70 74%);
  border: 1.5px solid #696a66;
  border-radius: 0.5em;
  margin-right: 2%;
  margin-left: 52%;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  cursor: pointer;

  @media ${device.laptop} {
    height: 2.2em;
  }
`;

export const P2 = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: Lucida Sans Unicode;
  letter-spacing: 0.05em;
  font-weight: 700;
  text-align: center;
  line-height: 1.6;

  @media ${device.laptop} {
    font-size: 18px;
  }

  @media ${device.tablet} {

  }

  @media ${device.mobileL} {

  }

  @media ${device.mobileS} {

  }

  @media ${device.mobileM} {

  }
`;

export const StyledAccount = styled.div`
  width: 7em;
  height: 2.4em;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  border: 1.5px solid #696a66;
  border-radius: 0.3em;
  margin-right: 2%;
  margin-left: 1px;
  text-align: center;

  @media ${device.laptop} {
    height: 2.2em;
  }
`;

export const P3 = styled.p`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.02em;
  font-weight: 500;
  line-height: 1;
  color: white;
  margin: 0.2em auto;

  @media ${device.laptop} {
    font-size: 20px;
  }

  @media ${device.tablet} {

  }

  @media ${device.mobileL} {

  }

  @media ${device.mobileS} {

  }

  @media ${device.mobileM} {

  }
`;

export const Select = styled.select`
  width: 4em;
  height: 2em;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: white;
  padding-left: 5px;
  font-size: 16px;
  font-family: MD Primer Bold, Rubik, Lato, Lucida Grande, Lucida Sans Unicode,
    Tahoma, Sans-Serif;
  letter-spacing: 0.02em;
  border: 1.5px solid #696a66;
  border-radius: 0.3em;
  margin-left: 1px;
  cursor: pointer;
  option {
    color: white;
    background: #444;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 0px 1px 3px;
  }

  @media ${device.laptop} {
    height: 2.1em;
    font-size: 14px;
  }

  @media ${device.tablet} {

  }

  @media ${device.mobileL} {

  }

  @media ${device.mobileS} {

  }

  @media ${device.mobileM} {

  }
`;
