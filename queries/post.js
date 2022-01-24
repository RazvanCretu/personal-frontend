import { gql } from "@apollo/client";

const POST = gql`
  query Post($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          publishedAt
          content
        }
      }
    }
  }
`;

export default POST;
