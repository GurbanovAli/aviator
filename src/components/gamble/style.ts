import styled from 'styled-components'

export const StyledContainer = styled.main`
  max-width: 1280px;
  display:grid;
  grid-template-columns: auto auto;
  font-family: math;
`

export const Modal = styled.div`
  z-index: 100;
  position: fixed;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.5);
`;
