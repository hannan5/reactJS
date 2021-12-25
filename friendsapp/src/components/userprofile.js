import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Firestore } from "../firebase/firebase"
import { Appcontext } from "./profilecontext"
import './profile.css'
import Navbar from "./navbar"

const Userprofile = () => {
    const [userprofile, setuserprofile] = useState([])
    const [userpost, setuserpost] = useState([])

    const param = useParams()
    // console.log(param.user)
    const name = param.user

    const getuser = () => {

        Firestore.collection('profile').where('uid', '==', name).get().then(function (querySnapshot) {
            let profile = querySnapshot.docs.map(doc => doc.data())
            //   console.log(profile)
            profile.map((elem) => {
                setuserprofile(elem)
            })
        })
    }
    useEffect(() => {
        getuser()
    }, [])

    const getuserpost = () => {
        Firestore.collection('post').where('uid', '==', name).get().then(function (querySnapshot) {
            let post = querySnapshot.docs.map(doc => doc.data())
            setuserpost(post)
        })
    }
    console.log(userpost)

    useEffect(() => {
        getuserpost()
    }, [])

    return (
        <>
            {/* <Navbar />?\ */}
            <div className="container">
                <div className="row profile">
                    <div className='col-lg-3 col-1' style={{ backgroundColor: '#f5f5f6' }}></div>
                    <div className="col-lg-6 col-10" style={{ backgroundColor: '#f7f7f7' }}>
                        <div className='profile-container'>
                            {/* <div className='profilehead'>
                                <h1 style={{ textAlign: 'center' }}><Link to='/home' style={{ color: '#000',textDecoration:'none' }}>Home </Link>  </h1>

                                <h1 style={{ textAlign: 'center' }}> <Link to='/setting' style={{ color: '#000',textDecoration:'none' }}> Setting </Link> </h1>
                                <h1 style={{ textAlign: 'center', borderBottom: '2px solid #000' }}> Profile </h1>

                            </div> */}
                            <div className="profile-sidebar" >

                                {/* <h1>{uname}</h1> */}
                                <div className="profile-userpic">
                                    <img src={userprofile.image} style={{ width: '250px', height: '250px' }} class="img-responsive" alt="">
                                    </img>
                                </div>
                                {/* <!-- END SIDEBAR USERPIC --> */}
                                {/* <!-- SIDEBAR USER TITLE --> */}
                                <div className="profile-usertitle">
                                    <h3>Name: {userprofile.name} </h3>
                                </div>
                                <div className="profile-usermenu">
                                    <ul className="nav" style={{ flexDirection: 'column', alignItems: 'center' }}>
                                        <li>
                                            <h4> email:{userprofile.email} </h4>

                                        </li>
                                        <br />
                                        <li>
                                            <h4> Bio:{userprofile.bio}  </h4>
                                        </li>

                                        <li>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- END MENU --> */}
                            </div>
                            <div className='postname'>
                                <h3> POST </h3>
                            </div>

                            {userpost.map((element) => {
                                const {postImage, postName, postText} = element
                                return (
                                    <>
                            <div class="card">
                                <h5 class="card-header">{postName}</h5>
                                <div class="card-body">
                                    {/* <h5 class="card-title">Special title treatment</h5> */}
                                    <p class="card-text">{postText}</p>
                                    <img src={postImage} style={{ width: '100%', height: '350px' }} class="img-responsive" />

                                </div>
                            </div>

                                    </>
                                )
                            })}

                        </div>
                    </div>
                    <div className='col-lg-3 col-1' style={{ backgroundColor: '#f5f5f6', }}></div>
                </div>

            </div>
        </>
    )
}
export default Userprofile