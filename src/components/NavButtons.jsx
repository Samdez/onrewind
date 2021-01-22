import styled from "styled-components";

const NavButtons = ({ data, isLoadingMore, setIsLoadingMore, fetchMore }) => {
  return (
    <NavButtonsContainer>
      {data.allVideos.cursor.before &&
        <Button
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
        >Back</Button>
      }
      {data.allVideos.cursor.after &&
        <Button
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
        >Next</Button>
      }
    </NavButtonsContainer>
  );
}

const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  margin: 1em;
  button{
    height: 100%;
    min-width: 3vw;
  }
`

const Button = styled.button`
  border-radius: 30%;
  border: 1px solid white;
  background-color: #8306FF;
  color: white;
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;
  &:hover{
    background-color: white;
    color: #8306FF;
    transform: scale(1.2);
  }
`

export default NavButtons;