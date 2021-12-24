import { Button, Modal,Input, Form } from "antd"
import { useState } from "react";
import { auth, Firestore } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Uploadimage from './uploadimage'

// import Modal from "antd"

const Profilemodal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
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
            <Button type='primary' onClick={showModal} className='editbtn' style={{ marginTop: '20px' }}>
                Edit Profile
        </Button>

            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[

        //             <Button key="submit" onClick={{updatehandler }} style={{ width: '100%' }}>
        //                 Update Profile
        // </Button>,

                ]}
            >

<h3 style={{textAlign:'center'}}> Edit Details</h3>

<div>
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
{/* <hr/> */}
                                    <Button onClick={updatehandler}style={{ width: '100%' , bottom:'-34px'}}> Update Profile </Button>
</div>


            </Modal>
        </>
    )
}
export default Profilemodal