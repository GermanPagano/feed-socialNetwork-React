import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    imgUrl: "",
  });

  const LoggIn = (facebookData) => {
    console.log(facebookData);
    setUserData({
      ...userData,
      username: facebookData.displayName,
      email: facebookData.email,
      imgUrl: facebookData.photoURL,
    });

    // Guardar los datos del usuario en localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify({
        username: facebookData.displayName,
        email: facebookData.email,
        imgUrl: facebookData.photoURL,
      })
    );
  };

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem("userData");
    if (userDataFromLocalStorage) {
      setUserData(JSON.parse(userDataFromLocalStorage));
    }
  }, []);



  const logout = () => {
    localStorage.removeItem('userData');
    setUserData({
      username: "",
      email: "",
      imgUrl: "",
    });
  };

  return (
    <UserContext.Provider value={{ userData, LoggIn , logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
