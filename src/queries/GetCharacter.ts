import { gql } from "@apollo/client";

const GetCharacter = gql`
query GetCharacter($searchTerm: String!){
  characters( filter: { name: $searchTerm}) {
    info {
      count,
      pages
    }
    results {
    	id
    	name
      image
      species
    }
  }
}
`;

export default GetCharacter;
