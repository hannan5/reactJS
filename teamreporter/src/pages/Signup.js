import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {auth, Firestore} from '../firebase.js'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const signuphandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setinfo({...info, [name]: value})
    }
const [info, setinfo] = useState({})

const navigate = useNavigate()

const submithandler = ()=>{
    // console.log(info.name);
    // auth.createUserWithEmailAndPassword(info.email, info.password)
    // .then((user) =>{
    // console.log(user.user.uid)
    // Firestore.collection('profile').doc(user.user.uid).set({
    //     email: info.email,
    //     name: info.name,
    //     uid: user.user.uid
    //   })
    // })
    // .catch((error) => {
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //         });    

    console.log(info.name)
    auth.createUserWithEmailAndPassword(info.email, info.password)
      .then((user) => {
        updateProfile(auth.currentUser, {
          displayName: info.name
        })
        console.log(user.user.uid)
        Firestore.collection('profile').doc('user').set({
          email: info.email,
          name: info.name,
          uid: user.user.uid
        })

      })
      .catch((error) => {
        const errorMessage = error.message;
      })
    .then(navigate('/'))
    window.location.reload(true)            
        }

    return (
        <div className='main'>
        <div className='loginForm'>
      <h1> Create A New Account </h1>
      <div className='formInput'>
      <input id='name' type='text' placeholder='Enter your Name' name='name' onChange={signuphandler}/>
        <input id='email' type='email' placeholder='Enter your Email' name='email' onChange={signuphandler} />
        <input id='password' type='password' placeholder='Enter your Password' name='password' onChange={signuphandler}/>
      </div>
      <div className='button'>
        <button className='loginbtn' type='submit' onClick={submithandler}>Signup</button>
        <p>Already have an Account? <Link to='/' style={{ color: '#000', textDecoration:'none' }}>  Login </Link> Here</p>
      
      </div>
        </div>
        </div>
    );
};

export default Signup;