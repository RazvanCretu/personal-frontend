import { gql } from "@apollo/client";

const POSTS = gql`
  query Posts {
    posts(sort: "createdAt:desc") {
      data {
        attributes {
          title
          slug
          publishedAt
        }
      }
    }
  }
`;

export default POSTS;
