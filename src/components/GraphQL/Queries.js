import { gql } from "apollo-boost";


export const GET_VIDEOS_QUERY = gql`
query AllVideosQuery($limit: Int, $tags: String, $after: String, $before: String){ 
  allVideos(limit: $limit, tags: $tags, after: $after, before: $before) {
    cursor{
      after
      before
    }
    items{
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

export const GET_SINGLE_VIDEO_QUERY = gql`
query GetSingleVideo($id: ID!){
  video(id: $id){
    id
    name
    poster
    Tags{
      name
    }
  }
}
`