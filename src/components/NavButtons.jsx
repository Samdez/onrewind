import styled from "styled-components";

const NavButtons = ({ data, isLoadingMore, setIsLoadingMore, fetchMore }) => {
  return (
    <NavButtonsContainer>
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

export default NavButtons;