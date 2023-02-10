import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({ username: '', email: '' ,imgUrl: ''})


  const LoggIn = (facebookData) => {
    console.log(facebookData)
    setUserData( { ...userData, username: facebookData.displayName , email: facebookData.email , imgUrl: facebookData.photoURL})
  }

  return (
    <UserContext.Provider value={{ userData, LoggIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
