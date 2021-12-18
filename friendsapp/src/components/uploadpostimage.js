import { useState } from "react";
import { storage } from "../firebase/firebase";

const Uploadpostimage = () =>{

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
const uploadtask = storage.ref('singleimage').child('image1').put(singleimage);
uploadtask.on(
    'state_changed',
    (snapshot)=>{
        let progress = ((snapshot.bytesTransferred/snapshot.totalBytes)*100)
        console.log(progress)
    },
    (err)=>{
        console.log(err)
    },
    // ()=>{
        storage.ref('singleimage').child('image1').getDownloadURL()
    //     .then((imageUrl)=>{
    //         Firestore.collection('profile').where('uid', '==', auth.currentUser.uid).get()
    //         .then(
    //             Firestore.collection('profile').doc(uid).update({
    //                 image:imageUrl,
    //             })
    //         )
    //     })
    // }
// )
)}

    return(
        <>
        <input type='file' name='png'/>
        <button type='primary'>Add an image</button>
        </>
    )
}
