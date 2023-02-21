import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Nav-Styles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../storage/UserContext";
import React, { useContext } from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";

function Nav(props) {
  const context = useContext(UserContext);
  const { username, imgUrl } = context.userData;
  const navigate = useNavigate();

  // cerrar sesion
  const handleLogOut = () => {
    context.logout();
    navigate("/");
  };

  return (
    <>
      <Navbar className="nav-container" >
        <Container >
          <Navbar.Brand className="brand">⚡ Feed</Navbar.Brand>

          {username === "" ? (
            <div></div>
          ) : (

              <DropdownButton variant="dark" title={`Hola, ${username}`}>
                <Dropdown.Item onClick={handleLogOut} className=' justify-content-center d-flex'>
                  Cerrar sesión
                </Dropdown.Item>
              </DropdownButton>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
