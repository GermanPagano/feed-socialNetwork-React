import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav-Styles.css'

import { UserContext } from "../../storage/UserContext";
import React ,{ useContext } from 'react'

function Nav(props) {
   
  const context = useContext(UserContext);
  const { username , imgUrl} = context.userData

  console.log(username)
  return (
    <>
      <Navbar className='nav-container'>
        <Container>
          <Navbar.Brand className='brand'>
          ⚡ Feed
          </Navbar.Brand>

          {username === '' ? (
            <div></div>
          ):(          <div className='d-flex'>
            <p>Hola, {username} </p>
            <div className='mx-3'>
            <img src={imgUrl} alt="foto" style={{maxHeight:'30px' , borderRadius:'50%'}}/>
            </div>
          </div>)}

        </Container>
      </Navbar>
    </>
  );
}

export default Nav;