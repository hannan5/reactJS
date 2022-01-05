import { Routes as AppRoutes, Route, Routes } from "react-router-dom"
import PageNotfound from "../components/pagenotfound"
import Dashboard from "../pages/dashboard"

const LoginRoutes = () =>{
    return(
        <>
        <AppRoutes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='*' element={<PageNotfound/>}></Route>
        </AppRoutes>
        
        </>
    )
}
export default LoginRoutes