import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 50rem;
  height: 2rem;

  margin-left:27rem;
  display: flex;
  background: transparent;
  border-radius:6px;
  grid-row: 1 / 2;
`
export const P = styled.p`
  width: 3rem;
  height: 1.4rem;
  box-sizing: border-box;
  background-color: #738bd9;
  border: none;
  border-radius: 0.6em;
  color: #444;
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
