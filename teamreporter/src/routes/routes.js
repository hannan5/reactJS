import { Routes as AppRoutes, Route } from "react-router-dom"
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import PageNotfound from "../components/pagenotfound"
const Routes = () => {
    return (
        <AppRoutes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<PageNotfound/>}></Route>
        </AppRoutes>
    )
}
export default Routes;