import React from "react";
import SignUp from "../../components/Singup/SingUp";
import '../Home/HomepageStyles.css'

function HomePage() {
  return (
    <div className="fullview container ">

      <div className="col-4 mx-3 text-container ">
        <h1>⚡feed.</h1>
        {/* <div className="col home-text p-5">
        <h2>¿ Que es Feed ?</h2>
         ¡Conviértete en el protagonista de tus propias aventuras y déjanos escuchar tus pensamientos! Al ingresar con tu nombre y correo electrónico, tendrás acceso a nuestro feed público donde podrás interactuar con otros usuarios y descubrir historias interesantes y únicas. ¡Únete a la comunidad y cuéntanos tus historias! En Feed, la posibilidad de contarlo todo es infinita.
        </div> */}
      </div>


        <SignUp/>


    </div>
  );
}

export default HomePage;



