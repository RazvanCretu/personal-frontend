import { gql } from "@apollo/client";

const HOME = gql`
  query Homepage {
    homepage {
      data {
        attributes {
          first_name
          last_name
          description
          holdings {
            name
            address
          }
        }
      }
    }
    posts(sort: "createdAt:desc", pagination: { limit: 3 }) {
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

export default HOME;
