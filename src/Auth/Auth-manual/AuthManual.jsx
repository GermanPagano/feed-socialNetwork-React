import React, { useState , useContext} from "react";
import "./Auth-manual-styless.css";
import { createUserWithEmailAndPassword   } from "firebase/auth";
import { UserContext } from "../../storage/UserContext";
import { authentication ,db } from "../../services/firebase";

import { collection, addDoc } from "firebase/firestore";

function AuthManual() {
  const context = useContext(UserContext);

  //datos del registro
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  // registrar usuario nuevo 
  const handleRegister = async (event) => {
    event.preventDefault();
    // Envía los datos de registro al servidor
    await createUserWithEmailAndPassword(authentication , email , password )
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      context.Register(user , username);
      
      // Agregar información adicional del usuario a Firestore
      const usuariosRef = collection(db, "usuarios");
      await addDoc(usuariosRef, {
        nombreUsuario: username, // Nombre de usuario
        uid: user.uid, // ID de usuario
        email: user.email, // Email de usuario
        // Otros campos adicionales que desees guardar
      });
    })
    .catch((error) => {
      // Manejar errores
      console.log(error)
    });
    
  };

  return (
    <div className=" container Auth-manual-container mb-3">
      <form className="row form-register"  onSubmit={handleRegister}>
        <label>
          Usuario:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default AuthManual;
