import { useContext } from "react";
import ResponsiveAppBar from "../components/navbar/navbar";
import CurentUserContext from '../context/currentusercontext'
import { Firestore } from "../firebase";
// import useContext from 'react'

const Dashboard = () =>{
const current = useContext(CurentUserContext)
 console.log(current)
  const adddata = () =>{

  
 Firestore.collection('user').doc('user').set({
    email: 'email',
    name: 'name',
    uid: 'user.user.uid'
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  })
}  
  return(
        <>
        
        <ResponsiveAppBar/>
        <button onClick={adddata}>add</button>
       
        </>
    )
}
export default Dashboard;