import { gql } from "@apollo/client";

const DetailingCharacter = gql`
  query DetailingCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      image
      species
      gender
      origin {
        id
        name
      }
    }
  }
`;

export default DetailingCharacter;
