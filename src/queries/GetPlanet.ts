import { gql } from "@apollo/client";

const GetPlanet = gql`
  query GetPlanet($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
    }
  }
`;

export default GetPlanet;
