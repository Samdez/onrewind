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
    <>
    <NavButtons>
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
    </NavButtons>
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
    </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding: 0 2em;
`

const Card = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: contain;
  }
`

const NavButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  button{
    height: 100%;
    min-width: 3vw;
  }
`

export default Home;
