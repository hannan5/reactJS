import { Button, Input } from "antd";
import Form from "antd/lib/form/Form";
import { useState } from "react";
import { Link } from "react-router-dom"
import AppModal from "./modal";
// import AppModal from "./modal"
import Modal from "./modal"
import Navbar from "./navbar";
import Postcard from "./postcard";

const Post = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
   
    return(

        <>
        <Navbar/>
                    <div className="container">
                <div className="row profile">
                    <div className='col-lg-3 col-1'></div>
                    <div className="col-lg-6 col-10">
                        <div className='profile-container'>
                            <div className='profilehead'>
                                <h1 style={{ textAlign: 'center', borderBottom: '2px solid #000' }}> Post </h1>

                                <h1 style={{ textAlign: 'center' }}> <Link to='/setting' style={{ color: '#000',textDecoration:'none' }}> Setting </Link> </h1>
                                <h1 style={{ textAlign: 'center' }}><Link to='/Home' style={{ color: '#000',textDecoration:'none' }}>Home </Link>  </h1>

                            </div>
                            <div className="profile-sidebar">

                               
                                <div className="profile-usermenu" style={{marginTop: '-150px',height: '100%',}}>
                                <Postcard/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-1'></div>

                </div>

            </div>        </>
    )
}
export default Post