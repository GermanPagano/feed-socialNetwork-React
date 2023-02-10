import React ,{ useContext } from 'react'
import { UserContext } from "../../storage/UserContext";

function Feed(props) {
 
  const context = useContext(UserContext);
  const { username , email , imgUrl} = context.userData

  return (
    <div>
      soy el contenedor del feed

      <div>
      <h3>Nombre de usuario: {username}</h3>
      <h4>Email: {email}</h4>
      <img src={imgUrl} alt='foto'/>
    </div>


    </div>
  )
}

export default Feed
