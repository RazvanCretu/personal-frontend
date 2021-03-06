import Head from "next/head";
import styled from "styled-components";
import { device } from "../styles/theme";

import client from "../apollo";
import HOME from "../queries/homepage";

import Stack from "../components/homepage/Technologies";
import Jobs from "../components/homepage/Jobs";
import About from "../components/homepage/About";
import Posts from "../components/homepage/Posts";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding-top: 4rem;
  top: 0;
  left: 0;
  transition: 0.5s;

  p {
    font-size: 1.3rem;
  }

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

export default function Home({ homepage, posts }) {
  const { description } = homepage.data.attributes;

  return (
    <>
      <Head>
        <title>{`SoftDev`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About description={description} />
      <Stack techs="" />
      <Posts postList={posts.data} />
      <Jobs jobList="" />
    </>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await client.query({
    query: HOME,
  });

  return {
    props: data,
    revalidate: 1,
  };
}
