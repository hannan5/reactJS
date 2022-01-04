import { useContext, useEffect, useState } from 'react'
import './profile.css'
import Profilemodal from './profileModal'
import Uploadimage from './uploadimage'
import Modal from 'antd/lib/modal/Modal'
import Profilephotomodal from './profilephotomodal'
import Profiletabs from './profiletabs/profiletabs'
import CurentUserContext from '../context/CurrentUserContext'
const Profile = () => {

const userobj = useContext(CurentUserContext)

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
                                <img src={userobj.cover} style={{
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
                            </div>
                            <div className="profile-sidebar" style={{ marginTop: '-180px' }}>

                                <div className="profile-userpic">
                                    <div className='profile'>
                                    <img src={userobj.profile} style={{ width: '250px', height: '250px', position: 'relative' }} class="img-responsive" alt="">
                                    </img>
                                    </div>
                                    <div className='editprofile'>
                                        <Profilephotomodal/>
                                    </div>
                                </div>
                                {/* <!-- END SIDEBAR USERPIC --> */}
                                {/* <!-- SIDEBAR USER TITLE --> */}
                                <div className="profile-usertitle">
                                    <h3>{userobj.name}</h3>
                                </div>
                                <div>
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