import styled from 'styled-components'

import { device } from "device"

export const StyledContainer = styled.div`
  width: 832px;
  margin: 5px;
  padding: 5px;
  grid-row: 3 / 2;
  background: #52639B;
  border-radius:6px;

  @media ${device.laptop} {
    width: 670px;
    margin: 1px;
    padding: 3px;
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
`
