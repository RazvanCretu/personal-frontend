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
  transition: 0.5s;

  @media ${device.tablet} {
    padding: 2rem 1rem 3rem 1rem;

    && p {
      font-size: 1.2rem;
    }

    && h1 {
      font-size: 3rem;
    }
  }
}
`;
