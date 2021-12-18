import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, Firestore } from '../firebase/firebase'
import AppModal from './modal'
import './profile.css'
import Searchbar from './search'
import { HomeIcon } from "../assests/icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Profilemodal from './profileModal'
import {Button} from 'antd'


const Profile = () => {

    const [userdata, setuserdata] = useState([])

    const navigate = useNavigate()
    
    const logouthandler = () => {
        auth.signOut().then(navigate('/'))
    }



    //     const  getUser = async ()  => {
    //         const data = await getDocs(docRef)
    //         setuserdata(data.docs.map((doc)=> doc.data().uid === auth.currentUser.uid))
    //         console.log(userdata)
    //         // {setusername(data.docs.map((doc)=>doc.data()))}
    // setload(false)
    //     }
    const getuser = () => {
        Firestore.collection('profile').where('uid', '==', auth.currentUser.uid).get().then(function (querySnapshot) {
            let posts = querySnapshot.docs.map(doc => doc.data())
            // return posts
            posts.map((elem) => {
                setuserdata(elem)
            })

        })
    }

    useEffect(() => {
        getuser()
    }, [])



    return (
        <>
            <div className="container">
                <div className="row profile">
                    <div className='col-lg-3 col-0' style={{ backgroundColor: '#f5f5f6' }}></div>
                    <div className="col-lg-6 col-12" style={{ backgroundColor: '#f7f7f7' }}>
                        <div className='profile-container'>
                            <div className='profilehead'>
                                {/* <h1 style={{ textAlign: 'center' }}><Link to='/home' style={{ color: '#000', textDecoration: 'none' }}><HomeIcon sx={{ fontSize: 35, color: '#1b74e4' }} /> </Link>  </h1> */}
                                {/* <h1 style={{ textAlign: 'center' }}> <Link to='/setting' style={{ color: '#000',textDecoration:'none' }}> <SettingsIcon sx={{ fontSize: 35, color:'#1b74e4' }}/> </Link> </h1> */}
                                {/* <h1 style={{ textAlign: 'center', borderBottom: '2px solid #1b74e4' }}> <AccountCircleIcon sx={{ fontSize: 35, color: '#1b74e4' }} /> </h1> */}
                            </div>
                            <div className="profile-sidebar">

                                {/* <h1>{uname}</h1> */}
                                <div className="profile-userpic">
                                    <img src={userdata.image} style={{ width: '250px', height: '250px' }} class="img-responsive" alt="">
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
                                        <br />
                                        <li>
                                            <h4> Bio: {userdata.bio} </h4>
                                        </li>

                                        <li>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <Profilemodal />
                                </div>
                                <div>
            <Button type='primary' style={{width: '104px',
    height: '30px',
    marginTop: '10px',
}} onClick={logouthandler}>Logout</Button>

                                </div>
                                {/* <!-- END MENU --> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-0' style={{ backgroundColor: '#f5f5f6', }}></div>

                </div>

            </div>
        </>
    )
}
export default Profile