import styled  from 'styled-components';
import {VscLibrary} from 'react-icons/vsc'

const Header = () => {
  return ( 
    <HeaderContainer>
      <Logo>
        <VscLibrary/>
      </Logo>
      <MenuItems>
          <li>Funzone</li>
          <li>Testimonials</li>
      </MenuItems>
    </HeaderContainer>
   );
}
 
const HeaderContainer = styled.div`
  background-color: blue;
  height: 10vh;
  max-width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: 2rem;
  padding: 5%;
`

const MenuItems = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.2em;
  @media(max-width: 768px){
    width: 50%;
  }
`

export default Header;