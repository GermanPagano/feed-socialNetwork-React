import React, { useState } from 'react';
import { Form , Button } from 'react-bootstrap';
import './SingupStyles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,  faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useNavigate  } from 'react-router-dom';


export default function SingUp() {
  const navigate  = useNavigate ();

  const [userData, setUserData] = useState({ username: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User: ', userData);
    navigate(`/Fefeeded/${userData.username}`);
  };

  const isFormValid = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isNameValid = /^[A-Za-z]{3,}$/i.test(userData.username);
    return isNameValid && regex.test(userData.email);  
  };


  return (
    <div className='col-4 form-SingUp-Container'> 

    <div className='justify-content-start d-flex'> 
    <h4>Ingresa al Feed.</h4>
    </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className='justify-content-center d-flex'>

        <Form.Control
          type="text"
          value={userData.username}
          onChange={(event) =>  setUserData({ ...userData, username: event.target.value })}
          placeholder='Nombre'
        />
      </Form.Group>
      <Form.Group className='justify-content-center d-flex'>
        <Form.Control
          type="email"
          value={userData.email}
          onChange={(event) => setUserData({ ...userData, email: event.target.value })}
          placeholder='Email'
        />
      </Form.Group>
      <Button className='btn-form' type="submit"  disabled={ !isFormValid() } >
        Ingresar
      </Button>
    </Form>

    <div className="login-options mt-4">
  <h4>También puedes ingresar con:</h4>
  <div className="social-icons">
  <FontAwesomeIcon icon={faGoogle} color='red' size='2x' className=' ico bg-light' style={{marginRight:'25px',borderRadius:'50%' }}/>
  <FontAwesomeIcon icon={faFacebook} color='blue' size='2x' className='ico bg-light' style={{borderRadius:'50%' }}/>
  </div>
</div>

    </div>
  );
}
