import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  margin-top: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const List = styled.ul`
  display: flex;
  flex-flow: column;
  margin-top: 3rem;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h4 {
      letter-spacing: 0.05rem;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Posts = ({ postList }) => {
  return (
    <Container>
      <h2>Latest Posts</h2>
      <p>
        Are you interested in what I am writing about? Make sure to read the
        below posts to stay updated.
      </p>
      <List>
        {postList &&
          postList.map((item) => {
            return (
              <li key={item.attributes.slug}>
                <h4 style={{ paddingRight: "5rem" }}>
                  <Link href={`/blog/${item.attributes.slug}`}>
                    {item.attributes.title}
                  </Link>
                </h4>
                <h4>{new Date(item.attributes.publishedAt).toDateString()}</h4>
              </li>
            );
          })}
      </List>
    </Container>
  );
};

export default Posts;
