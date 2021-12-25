import { useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';



const Login = () => {
  const navigate = useNavigate()
  // console.log(navigate)
  const inputhandler = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setinfo({ ...info, [name]: value })
    // console.log({[name] : value})
  }
  const [info, setinfo] = useState({})

  const loginhandler = () => {
    auth.signInWithEmailAndPassword(info.email, info.password)
      // .then(alert('login Sucessfull'))
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      })
      .then(navigate('/'))
      
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
<h1> Login Account </h1>
<div className='formInput'>
  <input id='email' type='email' placeholder='Enter your Email' name='email' onChange={inputhandler} />
  <input id='password' type='password' placeholder='Enter your Password' name='password' onChange={inputhandler}/>
</div>
<div className='button'>
  <button className='loginbtn' onClick={loginhandler}>Login</button>
  <p>Create a New Account <Link to='/signup' style={{ color: '#000', textDecoration:'none' }}>  Signup </Link> Here</p>
</div>
  </div>

      {/* <div className='row'>
      <div className='col-lg-3 col-1'></div>
      <div className='col-lg-6 col-10'>


      <div className='form'>
        <h1 style={{ textAlign: 'center' }}> LOGIN </h1>

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
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input type='email' placeholder='Enter your email' name='email' onChange={inputhandler} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password type='password' placeholder='Enter your Password' name='password' onChange={inputhandler} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit" onClick={loginhandler} style={{ position: 'relative'}} className='btn-style'>
                {/* */}
          {/* login
        </Button>
              <p>create a new account <Link to='/signup' style={{ color: '#000', textDecoration:'none' }}>  Signup </Link> here</p>
            </Form.Item>


           

          </div>
        </Form>
      </div>

      </div>
      <div className='col-lg-3 col-1'></div>

      </div> */} 
  </div>

    </>
  )
}
export default Login 