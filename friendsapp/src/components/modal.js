import './profile.css'
import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { auth, Firestore, storage } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AppModal = () => {

    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    const name = user.displayName
    const uid = user.uid
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
        setinfo({ ...info, [name]: value })
    }
    // const submithandler = () => {
    //     Firestore.collection('post').doc().set({
    //         postText: info.post,
    //         postName: name,
    //     })
    // }
// let dates = new Date
// console.log(dates.getDate())


    const [singleimage, setsingleimage] = useState('')
    function handleimage (event){
        event.preventDefault();
        let pickedFile;
        if(event.target.files && event.target.files.length>0){
        pickedFile=event.target.files[0];
        setsingleimage(pickedFile)
    
    // console.log(singleimage.name)
            
        }
    }
    function singleupload(event){
event.preventDefault()
const uploadtask = storage.ref('singleimage').child(singleimage.name).put(singleimage);
uploadtask.on(
    'state_changed',
    (snapshot)=>{
        let progress = ((snapshot.bytesTransferred/snapshot.totalBytes)*100)
        console.log(progress)
    },
    (err)=>{
        console.log(err)
    },
    ()=>{
        storage.ref('singleimage').child(singleimage.name).getDownloadURL()
        .then((imageUrl)=>{
    Firestore.collection('post').doc().set({
        postText: info.post,
        postName: name,
        postImage:imageUrl,
        uid:uid
    })

    }
)

    }
)}
    return (
        <>
            <>
                <Button className='postbtn' onClick={showModal} >
                    What's on your mind
        </Button>
                <Modal
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={[

                        <Button key="submit" style={{width:'100%'}} onClick={singleupload}>
                            Post
                            </Button>,

                    ]}
                >
                    <h2 style={{textAlign:'center', fontWeight:'bold'}}> Create post</h2>
                    <hr/>
                    <Input.TextArea type='text' placeholder='What new in your mind ' name='post' id='inputitem' style={{ marginTop: '10px',border:'none' }} onChange={inputhandler} />
{/* <Uploadpostimage/> */}
<>
<div style={{border:'3px solid #f7f8f8',height:'50px', marginTop:'10px', display:'flex', justifyContent:'space-around'}}>
    <p>Add to your Post</p>
        <input type='file' name='png' onChange={handleimage}/>
        </div>
        {/* <Button key="submit" type="primary"  onClick={singleupload}> Upload Image</Button> */}

        </>
                </Modal>
            </>

        </>
    )
}
export default AppModal