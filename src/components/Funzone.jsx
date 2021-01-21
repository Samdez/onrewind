import { useQuery } from "@apollo/react-hooks";
import { GET_VIDEOS_QUERY } from "./GraphQL/Queries";
import { Card, HomeContainer } from "./Home";

const Funzone = () => {
  const { loading, error, data } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      tags: "Funzone"
    }
  })


if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
  return (
    <HomeContainer> 
    {data.allVideos.items.map(video => (
      <Card key={video.id}>
        <img src={video.poster} alt="" />
        <p>{video.name}</p>
      </Card>
    )
    )
  }
  </HomeContainer>
   );
}
 
export default Funzone;