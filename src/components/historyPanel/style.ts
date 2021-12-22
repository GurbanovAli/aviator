import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 50rem;
  height: ${ props => ( props.toggle ? '4rem': '2rem')};
  margin-left:27rem;
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  border-radius:6px;
  grid-row: 1 / 2;
`;
export const P = styled.p`
  width: 3rem;
  height: 1.4rem;
  box-sizing: border-box;
  background-color: #738bd9;
  border: none;
  border-radius: 0.6em;
  color: #fff;
  cursor: pointer;
  align-self: center;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: auto;
  padding: 2px auto;
  text-decoration: none;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: box-shadow 200ms ease-in-out, color 200ms ease-in-out;
  :hover {
    color: #fff;
    box-shadow: 0 0 40px 40px #696A66 inset;
  }
`

export const Button = styled.button`
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
