import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 3.5rem;
  text-align: center;

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
  font-size: 1.5rem;
  text-align: center;
  padding: 0 0.5rem;
`;

const AboutContainer = styled.div`
  // padding-top: 4rem;
`;

const About = ({ description }) => {
  return (
    <AboutContainer>
      <Title>
        Welcome to my personal website built with{" "}
        <a href="https://nextjs.org">Next.js!</a>
      </Title>
      <Description>{description}</Description>
    </AboutContainer>
  );
};

export default About;
