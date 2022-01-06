import styled from "styled-components";
import Image from "next/image";

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

const Circle = styled.div`
  background-color: ${({ theme }) => theme.stackCircle};
  height: 6.5rem;
  width: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  border-radius: 50%;

  &:hover {
    box-shadow: inset 0px 0px 20px rgba(255, 255, 255, 0.3);

    span {
      height: 56px;
      width: 56px;
    }
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
        {/* {techs.map((item) => {
          return (
            <Circle key={item.id}>
              <ImageContainer>
                <StyledImage
                  src={item.image.url}
                  layout="fill"
                  alt="An SVG of React.js"
                  key={item.id}
                />
              </ImageContainer>
            </Circle>
          );
        })} */}
      </Technologies>
    </Container>
  );
};

export default Stack;
