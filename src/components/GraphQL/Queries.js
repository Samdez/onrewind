import { gql } from "apollo-boost";


export const GET_VIDEOS_QUERY = gql`
query AllVideosQuery($limit: Int, $tags: String){ 
  allVideos(limit: $limit, tags: $tags) {
   items {
     name
     id
     poster
     Tags{
       name
     }
    }
   }
 }
`