import styled from 'styled-components'
import { device } from 'device'

export const StyledContainer = styled.div`
  width: 400px;
  height: 640px;
  margin: auto 5px auto auto;
  grid-row: 1 / span 3;
  background: #090f1f;
  border-radius:6px;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
    background: #090f1f;
    border-radius: 0.3em;
  }
  ::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 0.3em;
  }

  @media ${device.laptop} {
    width: 322px;
    height: 570px;
    margin: 12px 5px;
  }

  @media ${device.tablet} {
    width: 200px;
  }

  @media ${device.mobileL} {
    width: 10px;
    visibility: hidden;
  }

  @media ${device.mobileS} {
    width: 10px;
  }

  @media ${device.mobileM} {
    width: 10px;
  }
`

export const Div = styled.div`
  margin : 0.5em 0.5em;
  padding: 0.2em;
  display: flex;
  background: linear-gradient(85deg,#434343,#262626);
  border-radius: 0.4em;
  box-shadow: -2em 0 3em -2em #000;
  color: #d4d4d4;
  font-family: MD Primer Bold,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
  cursor: pointer;
  p:nth-of-type(2) {
    color: #777;
  };
  p:nth-of-type(4) {
    color: #999;
    font-weight: 600;
    letter-spacing: 0;
  };
  transition: background margin 0.4s ease-out 50ms;
  :hover {
    background: linear-gradient(85deg, #696969 0%, #444444 74%);
    transform: scale(1.03);
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  @media ${device.laptop} {
    margin : 0.35em 0.5em;
    padding: 0.15em;
  }
`

export const Div2 = styled.div`
  margin : 0.5em;
  padding: 0.2em;
  display: flex;
  background: linear-gradient(85deg,#434343,#262626);
  border-radius: 0.4em;
  box-shadow: -2em 0 3em -2em #000;
  color: #d4d4d4;
  text-transform: uppercase;
  text-align: center;
  font-family: MD Primer Bold,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
  cursor: pointer;
  p {
    width: 4em;
    margin: 0.8em;
    color: #999;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .04em;
  };
  p:nth-of-type(2) {
    width: 10.5em;
  }

  @media ${device.laptop} {
    margin : 0.35em 0.5em;
    p {
      margin: 0.6em 0.8em;
    }
  }
`

export const P1 = styled.p`
  width: 4em;
  margin: 0.8em;
  font-size: 1em;
  letter-spacing: .03em;
  font-weight: 800;
  text-align: center;
`

export const P2 = styled.p`
  width: 10em;
  margin: 0.8em;
  padding: auto;
  font-size: 12px;
  letter-spacing: .03em;
  text-align: center;
`

export const P3 = styled.p`
  width: 4em;
  margin: 0.8em;
  font-size: 14px;
  letter-spacing: .03em;
  font-family: Lucida Sans Unicode;
  font-weight: 800;
  text-align: center;
`
