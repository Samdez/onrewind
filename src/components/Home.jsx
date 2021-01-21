import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GET_VIDEOS_QUERY } from './GraphQL/Queries';
import NavButtons from './NavButtons';



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
      <NavButtons data={data} isLoadingMore={isLoadingMore} setIsLoadingMore={setIsLoadingMore} fetchMore={fetchMore} />
      <HomeContainer>
        {data.allVideos.items.map(video => (
          <Card key={video.id}>
            <Link to={`/${video.id}`}>
              <img 
              src={video.poster ? video.poster : 'https://i.pinimg.com/474x/6b/83/6d/6b836dacee3c7de8b21cf8d30ac7f675.jpg'} 
              alt="" 
              />
              <p>{video.name}</p>
              {video.Tags.map(tag => <p key={tag.name}>{tag.name}</p>
              )}
            </Link>
          </Card>
        )
        )
        }
      </HomeContainer>
    </>
  );
}

export const HomeContainer = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 5rem;
  padding: 0 1em;
`

export const Card = styled.div`
  height: 60vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  max-width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: contain;
  }
`

export default Home;
