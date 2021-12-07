import { useState } from "react";
import { auth, fire, Firestore, storage } from "../firebase/firebase";
import {addDoc, updateDoc} from 'firebase/firestore'



const Uploadimage = () =>{
const uid = auth.currentUser.uid
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
    ()=>{
        storage.ref('singleimage').child('image1').getDownloadURL()
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
        <h1>Uploadimage</h1>
        <input type='file' name='png' onChange={handleimage}></input>
        <button onClick={singleupload}> push</button>
        </>
    )
}
export default Uploadimage