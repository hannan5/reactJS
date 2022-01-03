import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, Firestore } from '../firebase/firebase'
import './profile.css'
import Profilemodal from './profileModal'
import pic from '../images/bg.jpeg'
import Uploadimage from './uploadimage'
import Modal from 'antd/lib/modal/Modal'
import Profilephotomodal from './profilephotomodal'
import Profiletabs from './profiletabs/profiletabs'
const Profile = () => {

    const [userdata, setuserdata] = useState([])

    const navigate = useNavigate()




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
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };



    return (
        <>
            <div className="container">
                <div className="row profile">
                    <div className='col-lg-2 col-0' style={{ backgroundColor: '#f5f5f6' }}></div>
                    <div className="col-lg-8 col-12" style={{ backgroundColor: '#f7f7f7' }}>
                        <div className='profile-container'>
                            <div className='profilehead'>
                                <div className='coverphoto'>
                                <img src={userdata.cover} style={{
                                    height: '267px',
                                    position: 'relative',
                                    width: '100%'
                                }}></img>
                                </div>
                                <div className='editcover'>
                                <button onClick={showModal}>Edit Cover Photo</button>
                                <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                ]}
            >
                <Uploadimage pic={'cover'}/>
</Modal>
                                </div>
                                {/* <h1 style={{ textAlign: 'center' }}><Link to='/home' style={{ color: '#000', textDecoration: 'none' }}><HomeIcon sx={{ fontSize: 35, color: '#1b74e4' }} /> </Link>  </h1> */}
                                {/* <h1 style={{ textAlign: 'center' }}> <Link to='/setting' style={{ color: '#000',textDecoration:'none' }}> <SettingsIcon sx={{ fontSize: 35, color:'#1b74e4' }}/> </Link> </h1> */}
                                {/* <h1 style={{ textAlign: 'center', borderBottom: '2px solid #1b74e4' }}> <AccountCircleIcon sx={{ fontSize: 35, color: '#1b74e4' }} /> </h1> */}
                            </div>
                            <div className="profile-sidebar" style={{ marginTop: '-180px' }}>

                                {/* <h1>{uname}</h1> */}
                                <div className="profile-userpic">
                                    <div className='profile'>
                                    <img src={userdata.profile} style={{ width: '250px', height: '250px', position: 'relative' }} class="img-responsive" alt="">
                                    </img>
                                    </div>
                                    <div className='editprofile'>
                                        <Profilephotomodal/>
                                    </div>
                                </div>
                                {/* <!-- END SIDEBAR USERPIC --> */}
                                {/* <!-- SIDEBAR USER TITLE --> */}
                                <div className="profile-usertitle">
                                    <h3>{userdata.name}</h3>
                                </div>
                                {/* <div className="profile-usermenu">
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
                                </div> */}
                                <div>
                                {/* <button onClick={showingModal}>Edit Profile Photo</button> */}
                                <Profilemodal/>
                                </div>
                                <div>    
                                </div>
                                {/* <!-- END MENU --> */}
                            </div>
                            <br/>
                                    <br/>
                                    <hr/>

                                    <Profiletabs/>
                               
                            
                        </div>
                        
                    </div>
                    <div className='col-lg-2 col-0' style={{ backgroundColor: '#f5f5f6', }}></div>

                </div>

            </div>
        </>
    )
}
export default Profile