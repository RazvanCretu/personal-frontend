import styled from "styled-components";
import Image from "next/image";

const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
  background-color: ${({ theme }) => theme.stackCircle};
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    padding: 0 0.5rem;
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;
  }

  ${Logo} {
    height: 100px;
    width: 100px;
    margin: 1rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0px 0px 5px aliceblue;
    }
  }
`;

const StackContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
`;

const Stack = ({ techs }) => {
  return (
    <Technologies>
      <p>These are some of the technologies I enjoy working with.</p>
      <StackContainer>
        {techs.map((item) => {
          return (
            <Logo key={item.id}>
              <Image
                src={item.image.url}
                alt="An SVG of React.js"
                height={52}
                width={52}
                key={item.id}
              />
            </Logo>
          );
        })}
      </StackContainer>
    </Technologies>
  );
};

export default Stack;
