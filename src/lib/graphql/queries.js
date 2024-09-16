import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  query Publication {
    publication(host: "agungpraz.hashnode.dev") {
      posts(first: 10) {
        edges {
          node {
            title
            brief
            url
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
