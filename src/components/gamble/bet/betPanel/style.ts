import styled from "styled-components";
import { device } from 'device'

export const StyledPanel = styled.div`
  width: 400px;
  height: 190px;
  align-content: center;
  text-align: -webkit-center;
  justify-content: space-between;
  padding: 10px;
  background: #090f1f;
  border-radius: 6px;

  @media ${device.laptop} {
    width: 322px;
    height: 180px;
    padding: 5px;
  }

  @media ${device.tablet} {
    width: 200px;
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

export const StyledForm = styled.form`
  width: 20rem;
  height: 6rem;
  margin: 1.4rem auto auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-content: center;
`;
