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

  if (loading || isLoadingMore) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <HomeContainer>
      {data.allVideos.items.map(video => (
        <Card key={video.id}>
          <img src={video.poster} alt="" />
          <p>{video.name}</p>
          {video.Tags.map(tag => <p key={tag.name}>{tag.name}</p>
          )}
        </Card>
      )
      )
      }
      {data.allVideos.cursor.after &&
      <button
      onClick={async () => {
        setIsLoadingMore(true);
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
      >Next</button>
    }
      {data.allVideos.cursor.before &&
      <button
      onClick={async () => {
        setIsLoadingMore(true);
        const cursor = data.allVideos.cursor.before
        await fetchMore({
          variables: {
            limit: 5,
            before: cursor
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            return fetchMoreResult;
          }
        }
        );
        setIsLoadingMore(false);
      }}
      >Back</button>
    }
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
