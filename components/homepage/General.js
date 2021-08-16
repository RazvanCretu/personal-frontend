import styled from "styled-components";
import { device } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 4rem;
  top: 0;
  left: 0;

  @media ${device.tablet} {
    padding-top:2rem;
    padding-bottom:3rem;
  }
}
`;
