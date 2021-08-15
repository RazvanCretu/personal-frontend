import Head from "next/head";
import Image from "next/image";
import client from "../apollo";
import HOME from "../queries/homepage";
import styled from "styled-components";
import { Container, Footer } from "../components/homepage/General";
import About from "../components/homepage/About";

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

export default function Home({ home }) {
  return (
    <Container>
      <Head>
        <title>{`${home.About.firstName}'s website.`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Main> */}
      <About description={home.About.description} />

      <Technologies>
        <p>These are some of the technologies I enjoy working with.</p>
        <StackContainer>
          {home.Body.Stack.map((item) => {
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
      {/* </Main> */}
    </Container>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await client.query({
    query: HOME,
  });

  return {
    props: {
      home: data.homepage,
    },
    revalidate: 1,
  };
}
