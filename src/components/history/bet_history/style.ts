import styled from 'styled-components'

export const StyledContainer = styled.div`
  background: #090f1f;
  border-radius:6px;
  width: 28rem;
  height: 41rem;
  margin: auto 1rem auto auto;
  grid-row: 1 / span 3;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
    background: #090f1f;
    border-radius: 0.3rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 0.3rem;
  }
`

export const Div = styled.div`
  margin : 0.5rem 0.5rem;
  padding: 0.2rem;
  display: flex;
  background: linear-gradient(85deg,#434343,#262626);
  border-radius: 0.4rem;
  box-shadow: -2rem 0 3rem -2rem #000;
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
`

export const Div2 = styled.div`
  margin : 0.5rem 0.5rem;
  padding: 0.2rem;
  display: flex;
  background: linear-gradient(85deg,#434343,#262626);
  border-radius: 0.4rem;
  box-shadow: -2rem 0 3rem -2rem #000;
  color: #d4d4d4;
  text-transform: uppercase;
  text-align: center;
  font-family: MD Primer Bold,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
  cursor: pointer;
  > p {
    width: 4rem;
    margin: 0.8rem;
    color: #999;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: .04rem;
  };
  p:nth-of-type(2) {
    width: 10rem;
  }
`

export const P1 = styled.p`
  width: 4rem;
  margin: 0.8rem;
  font-size: 1rem;
  letter-spacing: .03rem;
  font-weight: 800;
  text-align: center;
`

export const P2 = styled.p`
  width: 10rem;
  margin: 0.8rem;
  padding: auto;
  font-size: 0.8rem;
  letter-spacing: .03rem;
  text-align: center;
`

export const P3 = styled.p`
  width: 4rem;
  margin: 0.8rem;
  font-size: 1rem;
  letter-spacing: .03rem;
  font-family: Lucida Sans Unicode;
  font-weight: 800;
  text-align: center;
`
