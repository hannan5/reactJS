import { Link } from "react-router-dom"
import Navbar from "./navbar";
import Postcard from "./postcard";
import { HomeIcon } from "../assests/icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AppModal from './modal'
import './profile.css'
import Rightoption from "../dummy/rightoption";
const Post = () => {

    return (

        <>
            {/* <Navbar /> */}
            <div className="container">
                <div className="row profile">
                    <div className='col-lg-3 col-sm-0' style={{backgroundColor:'rgb(245, 245, 246)'}}>
                        {/* <Rightoption/> */}
                    </div>
                    <div className="col-lg-6 col-12"style={{backgroundColor:'rgb(245, 245, 246)'}}>
                        <div className='profile-container profileScroll'>
                            <div className='profilehead' style={{borderBottom:'1px solid #fff'}}>
                                {/* <h1 style={{ textAlign: 'center', borderBottom: '2px solid #1b74e4' }}>                             
                                <HomeIcon sx={{ fontSize: 35, color:'#1b74e4' }} />
                                </h1> */}

                                {/* <h1 style={{ textAlign: 'center' }}> <Link to='/setting' style={{ color: '#000', textDecoration: 'none' }}> 
                                <SettingsIcon sx={{ fontSize: 35, color:'#1b74e4' }} /> </Link> </h1> */}
                                {/* <h1 style={{ textAlign: 'center' }}><Link to='/profile' style={{ color: '#000', textDecoration: 'none' }}>
                                    <AccountCircleIcon sx={{ fontSize: 35, color:'#1b74e4' }} /> </Link>  </h1> */}

                            </div>
                            <div style={{top:'10px',position:'relative', margin:'0 10px'}}>
                            <AppModal/>
                            </div>
                            <div className="profile-sidebar ">

                                <div className="profile-usermenu" style={{ marginTop: '-90px', height: '100%' }}>
                                    <Postcard />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-0' style={{backgroundColor:'rgb(245, 245, 246)'}}>
                        
                    </div>

                </div>

            </div>        </>
    )
}
export default Post