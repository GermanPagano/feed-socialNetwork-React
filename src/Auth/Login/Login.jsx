import React, { useState, useContext } from "react";
import "./Login-styles.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../storage/UserContext";
import { authentication } from "../../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

function Login() {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Autenticar al usuario utilizando Firebase
      const userCredential = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );
      const { user } = userCredential;

      // Buscar el usuario en la colección "usuarios" utilizando el correo electrónico
      const q = query(collection(db, "usuarios"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        const userData = querySnapshot.docs[0].data();
        const nombreUsuario = userData.nombreUsuario; // Obtener el nombre de usuario del documento de usuario

        // Actualizar el estado del usuario en el contexto
        context.LoggIn(user, nombreUsuario);
      } else {
        // Si el usuario no existe en la colección "usuarios", mostrar mensaje de error
        setErrorMessage("Usuario inexistente");
        return;
      }

      // Restablecer los campos de entrada y el mensaje de error
      setEmail("");
      setPassword("");
      setErrorMessage("");
    } catch (error) {
      // Mostrar mensaje de error si la contraseña es incorrecta
      setErrorMessage(  ` Algo no va bien  `);
    }
  };

  return (
    <div className="container row" >
      <form className="row login-form" onSubmit={handleLogin}>
        <span>
          <h3>🗝</h3>
        </span>
        <label>
          Email:
          <input
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="login-button" type="submit">
          Ingresa
        </button>
      </form>
    <div className="mt-4" style={{color:'white'}}>

    {errorMessage && 
    <div style={{backgroundColor:'#EE5F43',borderRadius:'5px'}}><p className="error-message m-0">{errorMessage}</p>  
          <button 
          style={{
              color: 'white ',
              background: 'none',
              border: 'none',
              padding: '0',
              margin: '10px',
              cursor: 'pointer',
              fontWeight:'bold',
            }}
          onClick={()=>alert('eee')}> 🔑Ayuda , Olvide mis Datos </button>
    </div>} {/* Mostrar mensaje de error si existe */}
    </div>


    </div>
  );
}

export default Login;
