import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Firestore } from "../firebase/firebase"
import './profile.css'
import Usertab from "./usertabs/usertab"

const Userprofile = (props) => {
    const [userprofile, setuserprofile] = useState([])
    const [userpost, setuserpost] = useState([])

    const param = useParams()
    const [userparam, setuserparam] = useState(param)

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

    return (
        <>
            {/* <Navbar />?\ */}
            <div className="container">
                <div className="row profile">
                    <div className='col-lg-2 col-1' style={{ backgroundColor: '#f5f5f6' }}></div>
                    <div className="col-lg-8 col-10" style={{ backgroundColor: '#f7f7f7' }}>
                        <div className='profile-container'>
                            <div className='profilehead'>
                             <div className='coverphoto'>
                                <img src={userprofile.cover} style={{
                                    height: '267px',
                                    position: 'relative',
                                    width: '100%'
                                }}></img>
                                </div>
                                                           </div>
 

                            <div className="profile-sidebar"style={{ marginTop: '-180px' }} >
                                <div className="profile-userpic">
                                <div className='profile'>
                                    <img src={userprofile.profile} style={{ width: '250px', height: '250px', position: 'relative' }} class="img-responsive" alt="">
                                    </img>
                                    </div>
                                 </div>
                                <div className="profile-usertitle" style={{marginTop:'0px'}}>
                                    <h3>{userprofile.name} </h3>
                                </div>
                            </div>
 <br/>
                                    <br/>
                                    <hr/>

                                    <Usertab user ={userparam}/>
                        </div>
                    </div>
                    <div className='col-lg-2 col-1' style={{ backgroundColor: '#f5f5f6', }}></div>
                </div>

            </div>
        </>
    )
}
export default Userprofile