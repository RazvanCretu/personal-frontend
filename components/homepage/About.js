import styled from "styled-components";
import { device } from "../../styles/theme";

import Typist from "react-typist";

const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 3.5rem;
  text-align: center;
  color: ${({ theme }) => theme.About.headline};

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  line-height: 1.5;
  text-align: center;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.About.paragraph};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 420px;
  width: 100vw;

  @media ${device.tablet} {
    height: 100vh;
    width: 100vw;
    padding: 0;
  }
`;

const AboutContainer = ({ description }) => {
  return (
    <Container>
      <Typist avgTypingDelay={100} cursor={{ show: false }}>
        <Title>Welcome to my personal website.</Title>
        <Description>{description}</Description>
      </Typist>
    </Container>
  );
};

export default AboutContainer;
