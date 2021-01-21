import { useQuery } from "@apollo/react-hooks";
import { GET_VIDEOS_QUERY } from "./GraphQL/Queries";

const Testimonials = () => {
  const { loading, error, data } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      tags: "Testimoniales"
    }
  })


if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
  return ( 
    <> 
    {data.allVideos.items.map(video => (
      <div key={video.id}>
        <img src={video.poster} alt="" />
        <p>{video.name}</p>
      </div>
    )
    )
  }
  </>
   );
}
 
export default Testimonials;