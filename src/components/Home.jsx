import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { GET_VIDEOS_QUERY } from './GraphQL/Queries';



const Home = () => {
  const { loading, error, data } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      limit: 5
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

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Card = styled.div`
  /* max-width: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  img{
    max-width: 100%;
  }
`

export default Home;