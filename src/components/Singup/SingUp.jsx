import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "./SingupStyles.css";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { authentication } from "../../services/firebase";
import { UserContext } from "../../storage/UserContext";

export default function SingUp() {
  const navigate = useNavigate();

  const context = useContext(UserContext);
  //const [userData, setUserData] = useState({ username: '', email: '', imgUrl: ''  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('User: ', userData);
  //   navigate(`/feed/${userData.username}`);
  // };

  // const isFormValid = () => {
  //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   const isNameValid = /^[A-Za-z]{3,}$/i.test(userData.username);
  //   return isNameValid && regex.test(userData.email);
  // };



  const singInWithFB = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res);
        let dataUser = res.user.providerData[0];
        context.LoggIn(dataUser);
        //setUserData({...userData, username: dataUser.displayName, email: dataUser.email, imgUrl: dataUser.photoURL})

        navigate(`/feed/${dataUser.displayName}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col form-SingUp-Container">
      <div className="justify-content-start d-flex">
        <h4>Ingresa al Feed.</h4>
      </div>


    {/* registrar nuevo usuario manual  */}

    {/*  ingresar con fb  */}
      <div className="login-options mt-4">
        <h4>También puedes ingresar con:</h4>
        <div className="social-icons">
          <button onClick={singInWithFB} className="auth-fb">

            Ingresa con Facebook
          </button>
        </div>
      </div>




    </div>
  );
}
