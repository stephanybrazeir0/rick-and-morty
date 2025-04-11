import { gql } from "@apollo/client";

const CharactersWithOrigin = gql`
  query ($characterId: ID!) {
    character(id: $characterId) {
      origin {
        residents {
          id
          name
          image
          species
          origin {
            id
          }
        }
      }
    }
  }
`;

export default CharactersWithOrigin;
