import { Routes as AppRoutes, Route } from 'react-router-dom'

import Login from '../pages/login.js'
import Signup from '../pages/signup.js'

const Routesnotlogin = () =>{
    return(
        <AppRoutes>
             <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<Login />} />

        </AppRoutes>
    )
}
export default Routesnotlogin