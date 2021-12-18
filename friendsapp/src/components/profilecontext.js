import { createContext, useState } from "react";
import Profile from "./profile";
import Searchbar from "./search";
import  Userprofile  from "./userprofile";

export const Appcontext = createContext()

const ProfileContext = ({}) =>{

    const [profile, setprofile ] = useState('')

return(
    <Appcontext.Provider value={{profile, setprofile}}>
<Searchbar/><Userprofile/><Profile/>
    </Appcontext.Provider>
)
}