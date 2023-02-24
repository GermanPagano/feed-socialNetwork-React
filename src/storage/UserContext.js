import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  // usuario , con su informacion
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    imgUrl: "",
    age: "",
    country: "",
    city:"",
    description: "",
    postCreated : [],
  });

  // iniciar sesion 
  const LoggIn = (infoUser, userName ) => {
    console.log(infoUser);
    setUserData({
      ...userData,
      username: infoUser.displayName ? infoUser.displayName : userName,
      email: infoUser.email,
      imgUrl: infoUser.photoURL,
      
    });
    
    // Guardar los datos del usuario en localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify({
      username: infoUser.displayName ? infoUser.displayName : userName,
      email: infoUser.email,
      imgUrl: infoUser.photoURL,
      })
    );
  };


  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem("userData");
    if (userDataFromLocalStorage) {
      setUserData(JSON.parse(userDataFromLocalStorage));
    }
  }, []);


// cerrar sesion 
  const logout = async() => {
    localStorage.removeItem('userData');
    
    setUserData({
      username: "",
      email: "",
      imgUrl: "",
    });
  };

  //registrarse

  return (
    <UserContext.Provider value={{ userData, LoggIn , logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
