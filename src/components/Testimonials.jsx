import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import Loader from './Loader';
import { GET_VIDEOS_QUERY } from "./GraphQL/Queries";
import { Card, HomeContainer } from "./Home";
import NavButtons from "./NavButtons";
import { slideUp } from "../animations";

const Testimonials = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      tags: "Testimoniales",
      limit: 5
    }
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false);

if (loading || isLoadingMore) return <Loader />;
if (error) return <p>Error :(</p>;
  return ( 
    <>
    <NavButtons data={data} isLoadingMore={isLoadingMore} setIsLoadingMore={setIsLoadingMore} fetchMore={fetchMore}/>
    <HomeContainer
    variants={slideUp}
    initial='hidden'
    animate='show'
    > 
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