import { gql } from "@apollo/client";

const AllCharacters = gql`
  query($currentPage: Int!){
    characters(page: $currentPage){
      info {
        pages
        count
        prev
        next
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
