import styled from "styled-components";
import LoadingImg from "../assets/puff.svg";

const Loading = () => {
    return (
        <Container>
            <img src={LoadingImg} alt="loader" />
        </Container>
    );
};

const Container = styled.div`
  margin-top: -10vh;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  img{
    width: 12.5rem;
  }
`

export default Loading;