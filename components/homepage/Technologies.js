import styled from "styled-components";
import Image from "next/image";

import { IconContext } from "react-icons";
import { DiNodejsSmall, DiPython, DiReact, DiRust } from "react-icons/di";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2rem;

  p {
    padding: 0 0.5rem;
    line-height: 1.5;
    text-align: center;
  }
`;

const Technologies = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Circle = styled.span`
  background-color: ${({ theme }) => theme.stackCircle};
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    box-shadow: inset 0px 0px 20px rgba(255, 255, 255, 0.3);
    height: 6rem;
    width: 6rem;
  }
`;

const ImageContainer = styled.span`
  position: relative;
  height: 42px;
  width: 42px;
`;

const StyledImage = styled(Image)`
  div {
    position: relative;
    width: 52px;
    height: 52px;
  }
`;

const Stack = ({ techs }) => {
  return (
    <Container>
      <h2>Technologies</h2>
      <p>These are some of the technologies I enjoy working with.</p>
      <Technologies>
        <IconContext.Provider value={{ size: "100%", color: "white" }}>
          <Circle>
            <DiNodejsSmall />
          </Circle>
          <Circle>
            <DiPython />
          </Circle>
          <Circle>
            <DiReact />
          </Circle>
          <Circle>
            <DiRust />
          </Circle>
        </IconContext.Provider>
      </Technologies>
    </Container>
  );
};

export default Stack;
