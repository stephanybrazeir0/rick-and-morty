import { gql } from "@apollo/client";

const CharactersWithOrigin = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
        species
        origin {
          id
          name
        }
      }
    }
  }
`;

export default CharactersWithOrigin;
