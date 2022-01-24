import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const List = styled.ul`
  display: flex;
  flex-flow: column;
  margin-top: 5rem;

  li {
    list-style: none;
    // width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
                <h4>
                  {new Date(item.attributes.publishedAt).toLocaleString()}
                </h4>
              </li>
            );
          })}
      </List>
    </Container>
  );
};

export default Posts;
