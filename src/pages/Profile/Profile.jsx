import React, { useContext } from "react";import './ProfileStyles.css'
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { UserContext } from "../../storage/UserContext";
import {  useNavigate } from "react-router-dom";
// import { authentication } from "../../services/firebase";

function Profile() {

  // const auth = authentication
  // const user = auth.currentUser;

    const context = useContext(UserContext);
    const { username, imgUrl, email, age, country, city , description, postCreated } = context.userData;
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(`/feed/:${username}`)
    }
      return (
        <Container className="mt-5 profile-container p-5 rounded ">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Image
              src={imgUrl}
              alt={username}
              roundedCircle
              className="mb-3"
              style={{ width: "80px", height: "80px" }}
            />
            <h2>{username}</h2>
            <p>{email}</p>
            <button className="btn-return" onClick={handleReturn}>volver</button>
            {/* <div className="mb-3">
              {age ? (age):('indica tu edad')}, {city ? (city):(' ciudad')}, {country}
            </div> */}
          </div>
        </Container>
      );
    }

export default Profile
