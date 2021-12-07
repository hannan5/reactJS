import {collection, doc, getDocs , getFirestore, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, fire, Firestore } from '../firebase/firebase'
import pic from '../images/callgirl.jpg'
import AppModal from './modal'

import './profile.css'

const Profile = () => {
    // let email = auth.currentUser.email
    // let uid = auth.currentUser.uid
    // console.log(uid)

    const [userdata, setuserdata] = useState([])
    const [username, setusername] = useState([])

 const [load, setload] = useState(true)

//     const  getUser = async ()  => {
//         const data = await getDocs(docRef)
//         setuserdata(data.docs.map((doc)=> doc.data().uid === auth.currentUser.uid))
//         console.log(userdata)
//         // {setusername(data.docs.map((doc)=>doc.data()))}
// setload(false)
//     }
const getuser = () =>{
    Firestore.collection('profile').where('uid', '==', auth.currentUser.uid).get().then(function(querySnapshot) {
        let posts = querySnapshot.docs.map(doc => doc.data())
        // return posts
        posts.map((elem)=>{
            setuserdata(elem)
        })

// return posts
})
}
console.log(userdata)
useEffect(() => {
        getuser()
    }, [])
    // console.log(getuser)
    return (
        <>
            <div className="container">
                <div className="row profile">
                    <div className='col-lg-3 col-1'></div>
                    <div className="col-lg-6 col-10">
                        <div className='profile-container'>
                            <div className='profilehead'>
                                <h1 style={{ textAlign: 'center', borderBottom: '2px solid #000' }}> Home </h1>
                                <h1 style={{ textAlign: 'center' }}><Link to='/Post' style={{ color: '#000',textDecoration:'none' }}>Post </Link>  </h1>

                                <h1 style={{ textAlign: 'center' }}> <Link to='/setting' style={{ color: '#000',textDecoration:'none' }}> Setting </Link> </h1>

                            </div>
                            <div className="profile-sidebar">

                                {/* <h1>{uname}</h1> */}
                                <div className="profile-userpic">
                                    <img src={userdata.image} style={{width:'250px', height:'250px'}} class="img-responsive" alt="">
                                    </img>
                                </div>
                                {/* <!-- END SIDEBAR USERPIC --> */}
                                {/* <!-- SIDEBAR USER TITLE --> */}
                                <div className="profile-usertitle">
                            <h3>Name: {userdata.name}</h3>
                                </div>
                                <div className="profile-usermenu">
                                    <ul className="nav" style={{ flexDirection: 'column', alignItems: 'center' }}>
                                        <li>
                                        <h4> email: {userdata.email}</h4>
                                          
                                        </li>
                                        <br/>
                                        <li>
                                            <h4> Bio: {userdata.bio} </h4>
                                        </li>
                                        
                                    <li>
                                     <AppModal/>
                                    </li>
                                    </ul>
                                </div>
                                {/* <!-- END MENU --> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-1'></div>

                </div>

            </div>
        </>
    )
}
export default Profile