import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import { auth, Firestore } from '../firebase/firebase';

const AppModal = () => {
const name = auth.currentUser.displayName
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [info, setinfo] = useState({})

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const inputhandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        // console.log(name, value)
        setinfo({...info,[name]:value})
    }
    const submithandler = () =>{
        Firestore.collection('post').doc().set({
            postText:info.post,
            postName:name,
        })
    }
    return (
        <>
            <>
                <Button type="primary" onClick={showModal} >
                   Create a new Post +
        </Button>
                <Modal
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={[

                        <Button key="submit" type="primary" onClick={submithandler} >
                            Post
            </Button>,

                    ]}
                >
                                        <Input.TextArea type='text' placeholder='What new in your mind ' name='post' id='inputitem' style={{marginTop:'10px'}} onChange={inputhandler}/>

                </Modal>
            </>

        </>
    )
}
export default AppModal