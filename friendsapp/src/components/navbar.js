import { Navbar as Navbarreact, Container, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'


const Navbar = () =>{
    const navigate = useNavigate()
    
    const logouthandler = () => {
        auth.signOut().then(navigate('/'))
    }
    return(
        <>
        <Navbarreact bg="light" expand="lg">
                <Container>
                    <Navbarreact.Brand href="#home">FRIENDSAPP</Navbarreact.Brand>
                    <Navbarreact.Toggle aria-controls="basic-navbar-nav" />
                    <Navbarreact.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Setting</Nav.Link>
                            {/* <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link> */}
                            
                            <Button className='btnStyle' style={{marginRight:'10px'}} onClick={logouthandler}>Logout</Button>
                        </Nav>
                    </Navbarreact.Collapse>
                </Container>
            </Navbarreact>
        </>
    )
}
export default Navbar