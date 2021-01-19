import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useEffect } from 'react';

const GET_VIDEOS_QUERY = gql`
query AllVideosQuery($limit: Int){ 
  allVideos(limit: $limit) {
   items {
     name
     id
     poster
   }
 }
}
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      offset: 0,
      limit: 5
    }
  })
  useEffect(() => {
    console.log(data);
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.allVideos.items.map(video => (
        <>
          <img src={video.poster} alt="" />
          <p>{video.name}</p>
        </>
      )
      )
    }
    </div>
  );
}

export default Home;