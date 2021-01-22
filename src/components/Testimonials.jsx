import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GET_VIDEOS_QUERY } from "./GraphQL/Queries";
import { Card, HomeContainer } from "./Home";
import NavButtons from "./NavButtons";

const Testimonials = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      tags: "Testimoniales",
      limit: 5
    }
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
  return ( 
    <>
    <NavButtons data={data} isLoadingMore={isLoadingMore} setIsLoadingMore={setIsLoadingMore} fetchMore={fetchMore}/>
    <HomeContainer> 
    {data.allVideos.items.map(video => (
      <Card key={video.id} to={`/${video.id}`}>
        <img src={video.poster} alt="" />
        <p>{video.name}</p>
        {video.Tags.map(tag => <p key={tag.name}>#{tag.name}</p>
          )}
      </Card>
    )
    )
  }
  </HomeContainer>
  </>
   );
}
 
export default Testimonials;