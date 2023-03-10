import React, { useContext } from "react";
import "../Home/HomepageStyles.css";
import { UserContext } from "../../storage/UserContext";
import { useNavigate } from "react-router-dom";
import AuthFB from "../../Auth/Auth-facebook/AuthFB";
import AuthManual from "../../Auth/Auth-manual/AuthManual";
import Login from "../../Auth/Login/Login";

function HomePage() {
  const context = useContext(UserContext);
  const { username } = context.userData;
  const navigate = useNavigate();

  // const returnSesion = () => {
  //   navigate(`/feed/${username}`);
  // };
  return (
    <div className="fullview container ">
      {username !== "" ? (
        navigate(`/feed/${username}`) 
      ) : (
        <div>
        <Login/>
          <div className="login-options mt-4 ">
            <AuthManual/>

            <AuthFB />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
