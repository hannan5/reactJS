import Navbar from "../components/navbar.js"
import Post from "../components/post.js"
import Profile from "../components/profile"
import { auth } from "../firebase/firebase"


const Home = () => {
    // let uname = auth.currentUser.email
    return (
        <>
            <Navbar />
            <Profile/>
        </>
    )
}
export default Home