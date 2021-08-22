import { gql } from "@apollo/client";

const HOME = gql`
  query Homepage {
    homepage {
      cv {
        url
      }
      About {
        firstName
        lastName
        description
      }
      Body {
        Stack {
          id
          name
          image {
            id
            url
            width
            height
          }
        }
        Job {
          role
          employer
          description
          startDate
          endDate
        }
      }
    }
  }
`;
export default HOME;
