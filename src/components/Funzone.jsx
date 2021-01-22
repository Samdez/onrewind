import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { GET_VIDEOS_QUERY } from "./GraphQL/Queries";
import { Card, HomeContainer } from "./Home";
import Loader from './Loader';
import NavButtons from "./NavButtons";

const Funzone = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      tags: "Funzone",
      limit: 5
    }
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false);

if (loading) return <Loader />;
if (error) return <p>Error :(</p>;
  return (
    <>
    <NavButtons data={data} isLoadingMore={isLoadingMore} setIsLoadingMore={setIsLoadingMore} fetchMore={fetchMore}/>
    <HomeContainer> 
    {data.allVideos.items.map(video => (
      <Card key={video.id} to={`/${video.id}`}>
        <img src={video.poster} alt="video-poster" />
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
 
export default Funzone;