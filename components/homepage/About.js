import styled from "styled-components";
import { device } from "../../styles/theme";

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
  padding-top: 2rem;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
    padding: 0;
  }
`;

const AboutContainer = ({ description }) => {
  return (
    <Container>
      <Title>Welcome to my personal website.</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default AboutContainer;
