import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import styled from 'styled-components';
import { GET_VIDEOS_QUERY } from './GraphQL/Queries';



const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      limit: 5,
    }
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [videos, setVideos] = useState([])

  if (loading || isLoadingMore) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <HomeContainer>
      {data.allVideos.items.map(video => (
        <Card key={video.id}>
          <img src={video.poster} alt="" />
          <p>{video.name}</p>
          {video.Tags.map(tag => <p>{tag.name}</p>
          )}
        </Card>
      )
      )
      }
      <button
        onClick={async () => {
          setIsLoadingMore(true, () => console.log(isLoadingMore));
          const cursor = data.allVideos.cursor.after
          await fetchMore({
            variables: {
              limit: 5,
              after: cursor
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              return fetchMoreResult;
            }
          }
          );
          setIsLoadingMore(false);
        }}
      >Load more</button>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img{
    max-width: 100%;
  }
`

export default Home;
