import { useQuery } from '@apollo/react-hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slideUp } from '../animations';
import { GET_VIDEOS_QUERY } from './GraphQL/Queries';
import NavButtons from './NavButtons';
import Loader from './Loader'



const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      limit: 5,
    }
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading || isLoadingMore) return <Loader/>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <NavButtons data={data} isLoadingMore={isLoadingMore} setIsLoadingMore={setIsLoadingMore} fetchMore={fetchMore} data-testid="nav-button"/>
      <HomeContainer
      variants={slideUp}
      initial='hidden'
      animate='show'
      >
        {data.allVideos.items.map(video => (
          <Card key={video.id} to={`/${video.id}`} data-testid='card'>
              <img 
              src={video.poster ? video.poster : 'https://pbs.twimg.com/profile_images/452961105522872320/eFX_I4Nt.jpeg'} 
              alt="card-poster" 
              />
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

export const HomeContainer = styled(motion.div)`
  min-height: 80vh;
  padding: 0 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const Card = styled(Link)`
  height: 50vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  min-width: 300px;
  flex: 1;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
  overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      max-height: 45%;
      transition: all 0.2s;
      &:hover{
        transform: scale(1.2)
      }
    }
`

export default Home;
