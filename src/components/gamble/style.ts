import styled from "styled-components";
import { device } from 'device';

export const StyledContainer = styled.main`
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
`;

export const Modal = styled.div`
  width: auto;
  z-index: 100;
  position: fixed;
  padding: auto;
  width: 1500px
  height: 820px;
  background: rgba(0, 0, 0, 0.5);
`;
