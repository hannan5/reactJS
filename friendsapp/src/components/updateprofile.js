import { Input, Form, Button } from 'antd'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, Firestore } from '../firebase/firebase'
import Uploadimage from './uploadimage'
import { HomeIcon } from "../assests/icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

// import Uploadimage from './uploadImage'


const Updateprofile = () => {
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
const uid = user.uid;
  const [info, setinfo] = useState({})

  const inputhandler = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setinfo({ ...info, [name]: value })
    // console.log({[name] : value})
  }
  const updatehandler = () =>{
      Firestore.collection('profile').doc(uid).update({
          bio:info.bio,
          name:info.name
      })
  }
    return (
        <>
            <div className="container">
                <div className="row profile">
                    <div className='col-lg-3 col-1'></div>
                    <div className="col-lg-6 col-10">
                        <div className='profile-container'>
                            <div className='profilehead'>
                                <h1 style={{ textAlign: 'center' }}> <Link to='/Home' style={{ color: '#000',textDecoration:'none' }}> <HomeIcon sx={{ fontSize: 35, color:'#1b74e4' }}/> </Link> </h1>
                                <h1 style={{ textAlign: 'center', borderBottom: '2px solid #1b74e4' }}> <SettingsIcon sx={{ fontSize: 35, color:'#1b74e4' }}/> </h1>
                                <h1 style={{ textAlign: 'center' }}> <Link to='/profile' style={{ color: '#000',textDecoration:'none' }}> <AccountCircleIcon sx={{ fontSize: 35, color:'#1b74e4' }}/> </Link> </h1>

                            </div>
                            <div className="profile-sidebar">

                                <div className="profile-form">
                                    
                                <Uploadimage/>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[{  message: 'Please input your username!' }]}
                                    >
                                        <Input type='text' placeholder='Enter your name' name='name' id='inputitem' onChange={inputhandler}/>
                                    </Form.Item>

                                    <Form.Item name={['user', 'introduction']} label="About">
                                        <Input.TextArea type='text' placeholder='Enter Your Bio' name='bio' id='inputitem' onChange={inputhandler}/>
                                    </Form.Item>

                                    <Button onClick={updatehandler}> Update Profile </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-1'></div>

                </div>

            </div>
        </>
    )
}
export default Updateprofile