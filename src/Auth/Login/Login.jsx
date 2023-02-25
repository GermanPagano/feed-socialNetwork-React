import React, { useState , useContext} from "react";
import './Login-styles.css';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { UserContext } from "../../storage/UserContext";
import { authentication } from "../../services/firebase";

function Login() {
    const context = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
          // Autenticar al usuario utilizando Firebase
          const userCredential = await signInWithEmailAndPassword(authentication, email, password);
          const { user } = userCredential;
          
          // Actualizar el estado del usuario en el contexto
          context.LoggIn(user, user.displayName ? user.displayName : email);
      
          // Restablecer los campos de entrada
          setEmail("");
          setPassword("");
        } catch (error) {
          console.log(error.message);
        }
    };
  
  return (
<div className="container  ">

  <form className="row login-form " onSubmit={handleLogin}>
  
  <span><h3>🗝</h3></span>
    <label>
      Email:
      <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>

    <label>
      Password:
      <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>
    <br />
    <button className="login-button" type="submit">Ingresa</button>
  </form>
</div>

  )
}

export default Login
