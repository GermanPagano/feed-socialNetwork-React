import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { authentication } from "../../services/firebase";
import { UserContext } from "../../storage/UserContext";
import "./Auth-facebook-styles.css";

function AuthFB() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  
  const singInWithFB = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res);
        let dataUser = res.user.providerData[0];
        context.LoggIn(dataUser);
        navigate(`/feed/${dataUser.displayName}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <button onClick={singInWithFB} className="auth-fb">
      Ingresa con Facebook
    </button>
  );
}

export default AuthFB;
