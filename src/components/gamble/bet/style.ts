import styled from "styled-components";
import { device } from 'device'

export const StyledContainer = styled.div`
  width: 832px;
  height: 220px;
  margin: 1rem 0.5rem;
  grid-row: 3 / 3;
  display: flex;
  justify-content: space-around;

  @media ${device.laptop} {
    width: 680px;
    height: 200px;
    margin: 0.5rem 0;
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
