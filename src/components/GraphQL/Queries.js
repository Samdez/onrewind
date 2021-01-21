import { gql } from "apollo-boost";


export const GET_VIDEOS_QUERY = gql`
query AllVideosQuery($limit: Int, $tags: String, $after: String){ 
  allVideos(limit: $limit, tags: $tags, after: $after) {
    cursor{
      after
      before
    }
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