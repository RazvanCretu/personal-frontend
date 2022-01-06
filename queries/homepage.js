import { gql } from "@apollo/client";

const HOME = gql`
  query Home {
    homepage {
      data {
        attributes {
          About {
            description
          }
        }
      }
    }
  }
`;
export default HOME;
