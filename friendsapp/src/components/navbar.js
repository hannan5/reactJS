import { Link, useNavigate } from 'react-router-dom'
import { auth, Firestore } from '../firebase/firebase'
import Searchbar from './search'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useEffect, useState } from 'react';
import { Mentions, Menu, Button } from 'antd';
import { HomeIcon } from '../assests/icons';
import { HomeOutlined, UsergroupDeleteOutlined, SettingOutlined, ContainerOutlined } from '@ant-design/icons';
import { onAuthStateChanged } from 'firebase/auth';
import logo from '../images/logo.jpg'

const Navbar = () => {
    const navigate = useNavigate()

    const logouthandler = () => {
        auth.signOut().then(() =>{navigate('/')
        window.location.reload(true)
    })
    }

    const [current, setCurrent] = useState('home')
    const [data, setdata] = useState([])

    const handleClick = e => {
        setCurrent(e.key);
    };

    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const getuser = () => {
        let uid = user.uid
        Firestore.collection('profile').where('uid', '==', auth.currentUser.uid).get().then((querySnapshot) => {
            let profile = querySnapshot.docs.map(doc => doc.data())
            profile.map((elem) => {
                setdata(elem)
            })
        })
    }


    useEffect(() => {
        getuser()
    }, [])

    return (
        <>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className='menu-nav' style={{ height: 55 }}>
                <Menu.Item  style={{marginRight:'-40px'}}>
                    <img src={logo} width='50px' height='50px'/>
                    </Menu.Item>

                <Menu.Item>

                    <h3 style={{ marginTop: '13px' }}>Friends App</h3>
                </Menu.Item>
                <Menu.Item style={{ marginRight: '0' }}>
                    <Searchbar />

                </Menu.Item>
                <Menu.Item style={{ marginLeft: '0' }} >
                    <Link to='/'>
                        <HomeOutlined style={{ fontSize: 25, width: '70px' }} />
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <SettingOutlined style={{ fontSize: 25, width: '70px' }} />
                </Menu.Item>
                <Menu.Item>
                    <ContainerOutlined style={{ fontSize: 25, width: '70px' }} />
                </Menu.Item>
                <Menu.Item style={{ marginRight: '220px' }}>
                    <Link to='/profile'>
                        <UsergroupDeleteOutlined style={{ fontSize: 25, width: '70px' }} />
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ marginRight: '0' }}>
                    <div style={{ display: 'flex' }}>
                        <img src={data.image} alt='profile' style={{ width: '30px', height: '30px', borderRadius: '50px', marginTop: '10px' }} class="img-responsive" />
                        <h4 style={{ marginTop: '15px' }}>{data.name}</h4>
                    </div>
                </Menu.Item>
                <Menu.Item style={{ marginLeft: '0' }}>
                    <Button className='btnStyle' onClick={logouthandler}>Logout</Button>
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