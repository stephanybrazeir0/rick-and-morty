import { gql } from "@apollo/client";

const AllCharacters = gql`
  query{
    characters(page: 1){
      info {
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

export default AllCharacters;
