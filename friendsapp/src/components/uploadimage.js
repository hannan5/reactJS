import { useState } from "react";
import { auth, Firestore, storage } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Button } from "antd";



const Uploadimage = () =>{

    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
const uid = user.uid;
// console.log(uid)
    // const storage = Firebase.storage();
    console.log(storage)
    const [singleimage, setsingleimage] = useState('')
    function handleimage (event){
        event.preventDefault();
        let pickedFile;
        if(event.target.files && event.target.files.length>0){
        pickedFile=event.target.files[0];
        setsingleimage(pickedFile)
            
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
            Firestore.collection('profile').where('uid', '==', auth.currentUser.uid).get()
            .then(
                Firestore.collection('profile').doc(uid).update({
                    image:imageUrl,
                })
            )
        //     (function(querySnapshot) {
        //         querySnapshot.forEach(function(doc) {
        //             console.log(doc.uid, " => ", doc.data());
        //             doc.addDoc({
        //             imgUrl:imageUrl,
                
        //         })
        //         });
        //    })
            // .add({
            // })
        })
    }
)
    }
    return(
        <>
        <div style={{display:'flex',justifyContent:'space-around', marginBottom:'20px'}}>
{/* <label><h5>UploadImage</h5></label> */}
        <input type='file' name='png' onChange={handleimage}></input>
        
        <Button onClick={singleupload} type='primary'> Upload Image</Button>
        </div>

        </>
    )
}
export default Uploadimage