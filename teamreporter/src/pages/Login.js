import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const loginhandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinfo({ ...info, [name]: value })
    // console.log(info.value)

  }
  const navigate = useNavigate();

  const buttonhandler = () => {
    console.log(info.email, info.password)
    auth.signInWithEmailAndPassword(info.email, info.password)
      .then(() => {
        console.log('succesful login')
        navigate('/')

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const [info, setinfo] = useState({})

  return (
    <div className='main'>
      <div className='loginForm'>
        <h1> Login </h1>
        <div className='formInput'>
          <input id='email' type='email' placeholder='Enter your Email' name='email' onChange={loginhandler} />
          <input id='password' type='password' placeholder='Enter your Password' name='password' onChange={loginhandler} />
        </div>
        <div className='button'>
          <button className='loginbtn' onClick={buttonhandler}>Login</button>
          <p>Create a new Account <Link to='/signup' style={{ color: '#000', textDecoration: 'none' }}>  Signup </Link> Here</p>

        </div>
      </div>
    </div>
  );
}

export default Login;