import styled from 'styled-components'
import { device } from 'device'

export const StyledContainer = styled.div`
  width: 832px;
  /* height: 2rem; */
  margin: 0.2rem 0 0;
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  border-radius:6px;
  grid-row: 2 / 1;
  transition:  200ms ease-in-out, color 200ms ease-in-out;
  p:nth-child(2n) {
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  }

  @media ${device.laptop} {
    width: 680px;
    margin: 0;
  }

  @media ${device.tablet} {
    /* width: 200px; */
  }

  @media ${device.mobileL} {
    /* width: 10px;
    visibility: hidden; */
  }

  @media ${device.mobileS} {
    /* width: 10px; */
  }

  @media ${device.mobileM} {
    /* width: 10px; */
  }
`;

export const P = styled.p`
  width: 4.4em;
  height: 1.8em;
  background-color: #1b2845;
  background-image: linear-gradient(315deg, #1b2845 0%, #274060 74%);
  border: none;
  border-radius: 1.5rem;
  color: #fff;
  opacity: 0.7;
  text-align: center;
  margin: auto;
  padding: 2px auto;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  font-family: MD Primer Bold,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
  letter-spacing: .03em;
  line-height: 1.9;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out, color 200ms ease-in-out;
  :hover {
    color: #fff;
    box-shadow: 0 0 40px 40px #696A66 inset;
  }

  @media ${device.laptop} {
    font-size: 11px;
    width: 4em;
  }
`

export const Button = styled.button`
  width: 2.5rem;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
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
