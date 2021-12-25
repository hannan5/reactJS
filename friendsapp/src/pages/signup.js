import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { auth, Firestore } from '../firebase/firebase';
import { updateProfile } from 'firebase/auth';

const Signup = () => {

  const navigate = useNavigate()

  const [info, setinfo] = useState({})

  const inputhandler = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setinfo({ ...info, [name]: value })
    // console.log({[name] : value})
  }
  const Submithandler = () => {
    console.log(info.name)
    auth.createUserWithEmailAndPassword(info.email, info.password)
      .then((user) => {
        updateProfile(auth.currentUser, {
          displayName: info.name
        })
        console.log(user.user.uid)
        Firestore.collection('profile').doc(user.user.uid).set({
          email: info.email,
          name: info.name,
          uid: user.user.uid
        })

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
    .then(navigate('/'))
    window.location.reload(true)
    
  }
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
<div className='main'>
  <div className='loginForm'>
<h1> Create A New Account </h1>
<div className='formInput'>
<input id='name' type='text' placeholder='Enter your Name' name='name' onChange={inputhandler}/>
  <input id='email' type='email' placeholder='Enter your Email' name='email' onChange={inputhandler} />
  <input id='password' type='password' placeholder='Enter your Password' name='password' onChange={inputhandler}/>
</div>
<div className='button'>
  <button className='loginbtn' onClick={Submithandler}>Signup</button>
  <p>Already have an Account? <Link to='/' style={{ color: '#000', textDecoration:'none' }}>  Login </Link> Here</p>

</div>
  </div>
  </div>
  
    {/* <div className='container'>
      <div className='row'>
      <div className='col-lg-3 col-1'></div>
      <div className='col-lg-6 col-10'>

      <div className='form'>
        <h1 style={{ textAlign: 'center' }}> SIGNUP </h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input type='email' placeholder='Enter your name' name='name' id='inputitem' onChange={inputhandler} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type='email' placeholder='Enter your email' name='email' id='inputitem' onChange={inputhandler} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password type='password' placeholder='Enter your Password' id='inputitem' name='password' onChange={inputhandler} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div className='input'>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className='btn-style' onClick={Submithandler} style={{ position: 'relative', left: '90px' }} >
                Signup
        </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      </div>
      <div className='col-lg-3 col-1'></div>

      </div>
  </div> */}
    </>

  )
}
export default Signup