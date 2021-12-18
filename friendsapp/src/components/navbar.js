import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import Searchbar from './search'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { Mentions, Menu } from 'antd';
import { HomeIcon } from '../assests/icons';
import { HomeOutlined, UsergroupDeleteOutlined, SettingOutlined, ContainerOutlined} from '@ant-design/icons';
import { Button } from 'bootstrap';

const Navbar = () =>{
    const navigate = useNavigate()
    
    const logouthandler = () => {
        auth.signOut().then(navigate('/'))
    }

    const [current, setCurrent] = useState('home')
    const handleClick = e => {
        setCurrent(e.key);
    };

    return(
        <>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className='menu-nav' style={{ height: 55 }}>
            <Menu.Item>
                <h3 style={{marginTop: '13px'}}>Friends App</h3>
            </Menu.Item>
            <Menu.Item>
<Searchbar/>

            </Menu.Item>
            <Menu.Item style={{marginLeft:'25px'}} >
                <Link to='/home'>
            <HomeOutlined style={{ fontSize: 25, width:'70px' }} />
            </Link>
            </Menu.Item>
            <Menu.Item>
            <SettingOutlined style={{ fontSize: 25, width:'70px' }} />
            </Menu.Item>
            <Menu.Item>
            <ContainerOutlined style={{ fontSize: 25, width:'70px' }} />
            </Menu.Item>
            <Menu.Item>
                <Link to='/profile'>
            <UsergroupDeleteOutlined style={{ fontSize: 25, width:'70px' }} />
            </Link>
            </Menu.Item>
        </Menu>
        {/* <Navbarreact bg="light" expand="lg">
                <Container>
                    <Navbarreact.Brand href="#home">FRIENDSAPP</Navbarreact.Brand>
                    <Navbarreact.Toggle aria-controls="basic-navbar-nav" />
                    <Navbarreact.Collapse id="basic-navbar-nav">
                        <Searchbar/>
                        <Nav className="ms-auto" > */}
                            {/* <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}> */}
                            {/* <Nav.Link><NotificationsIcon sx={{fontSize:'25px'}}/></Nav.Link> */}
                            {/* </div> */}
                            {/* <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link> */}
                            {/* <Button className='btnStyle' style={{marginRight:'10px'}} onClick={logouthandler}>Logout</Button>
                        </Nav>
                    </Navbarreact.Collapse>
                </Container>
        </Navbarreact> */}
        </>
    )
}
export default Navbar