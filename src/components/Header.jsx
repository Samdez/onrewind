import styled  from 'styled-components';
import {VscLibrary} from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInSlide } from '../animations';

const Header = () => {
  return ( 
    <HeaderContainer
      variants={fadeInSlide}
      initial='hidden'
      animate='show'
    >
      <Logo>
        <Link to='/'>
        <VscLibrary/>
        </Link>
      </Logo>
      <MenuItems>
          <Link to='/funzone' style={{ color: 'white'}}>Funzone</Link>
          <Link to='/testimonials' style={{ color: 'white'}}>Testimoniales</Link>
      </MenuItems>
    </HeaderContainer>
   );
}
 
const HeaderContainer = styled(motion.div)`
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
  svg{
  color: white;
  }
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