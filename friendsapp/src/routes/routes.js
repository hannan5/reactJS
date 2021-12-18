import { Routes as AppRoutes, Route } from 'react-router-dom'
import Post from '../components/post.js'
import Userprofile from '../components/userprofile.js'
import Home from '../pages/home.js'
import Login from '../pages/login.js'
import Setting from '../pages/setting.js'
import Signup from '../pages/signup.js'

const Routes = () => {
    return (
        <AppRoutes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Post/>} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/profile' element={<Home />} />
            <Route path='/profile/:user' element={<Userprofile/>}></Route>
            

        </AppRoutes>
    )
}
export default Routes