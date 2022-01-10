import styled from "styled-components";
import Image from "next/image";

import { IconContext } from "react-icons";
import {
  DiNodejsSmall,
  DiPython,
  DiReact,
  DiRust,
  DiMysql,
} from "react-icons/di";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 420px;

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
  height: 138px;
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

  transition: 0.69s;

  &:hover {
    box-shadow: inset 0px 0px 20px rgba(255, 255, 255, 0.3);
    height: 6rem;
    width: 6rem;
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
            <DiPython />
          </Circle>
          <Circle>
            <DiReact />
          </Circle>
          <Circle>
            <DiNodejsSmall />
          </Circle>
          <Circle>
            <DiMysql />
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
