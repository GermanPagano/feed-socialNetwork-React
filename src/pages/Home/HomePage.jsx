import React, { useContext, useState } from "react";
import "../Home/HomepageStyles.css";
import { UserContext } from "../../storage/UserContext";
import { useNavigate } from "react-router-dom";
//import AuthFB from "../../Auth/Auth-facebook/AuthFB";
import AuthManual from "../../Auth/Auth-manual/AuthManual";
import Login from "../../Auth/Login/Login";
import videoBackground from "../../assets/bg-app.mp4";

function HomePage() {
  const context = useContext(UserContext);
  const { username } = context.userData;
  const navigate = useNavigate();

  const [isLoginVisible, setLoginVisible] = useState(true);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const handleRegisterClick = () => {
    setLoginVisible(false);
    setRegisterVisible(true);
  };

  const handleLoginClick = () => {
    setLoginVisible(true);
    setRegisterVisible(false);
  };

  return (
    <div className="fullview  ">
      <video autoPlay muted loop id="bg-video">
        <source src={videoBackground} type="video/mp4" />
      </video>

      {username !== "" ? (
        navigate(`/feed/${username}`)
      ) : (
        <div>
          <div>
            {/* Renderizar el componente de inicio de sesión si es visible */}
            {isLoginVisible && (
              <>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1.8rem",
                  }}
                >
                  <h4> Ingresa con tu cuenta </h4>
                  <Login />
                </div>

                <div
                  style={{
                    zIndex: "1",
                    position:'relative'
                  }}
                >
                  <p>

                    ¿No tenes cuenta?
                    <button
                      style={{
                        color: "white ",
                        background: "none",
                        border: "none",
                        padding: "0",
                        margin: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                      onClick={handleRegisterClick}
                    >
                      Registrate
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Renderizar el componente de registro si es visible */}
          {isRegisterVisible && (
            <div className="login-options mt-4 ">
              <h4> Crea tu cuenta </h4>
              <br />
              <AuthManual />
              <p>
                {" "}
                ¿ Tenes cuenta ?
                <button
                  style={{
                    color: "white ",
                    background: "none",
                    border: "none",
                    padding: "0",
                    margin: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={handleLoginClick}
                >
                  Ingresa
                </button>{" "}
              </p>
              {/* <AuthFB /> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;
