import { Input, Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Firestore } from '../firebase/firebase';
import './profile.css'
import { Appcontext } from './profilecontext';



const Searchbar = ({ searchQuery, setSearchQuery }) =>{
    
const { Search } = Input;

const {Option} = Select
const navigate = useNavigate()
const contprofile = useContext(Appcontext)
// console.log(contprofile)
const [dataset, setdataset] = useState('')
const [searchuser, setsearchuser] = useState([])
const [inputvalue, setinputvalue] = useState('a')
const [input, setinput] = useState('')



const onSearch = value => console.log(value);
// setinput(onSearch)
// Firestore.collection('profile').onSnapshot((snap)=>{
    const dataArr = [];
    // snap.docChanges().forEach((change)=>{
        // if(change.type === 'added'){
            // dataArr.push(change.doc.data())
        // }
    // })
    if(!dataset){
// setsearchuser(dataArr)
setdataset(true)
    }
// })
useEffect (async () =>{
    Firestore.collection('profile').where('name', '>=', inputvalue).onSnapshot((snap)=>{
        snap.forEach((doc)=>{
            dataArr.push(doc.data())
setsearchuser(dataArr)

        })
    })
},[inputvalue])

useEffect(() => {

}, [])
const SearchFunc = (val) => {
console.log(val)
    if (val === '') {
        setinputvalue('z')
    } else {
        setinputvalue(val)

    }
}
const children = searchuser.map((elem, i) => {
    return <Option key={i} >{elem.name}</Option>
})
const handlehchange = (value) =>{
    navigate(`/profile/${searchuser[value].uid}`)
}
return(
    <>
     <Select showSearch={true}
                        placeholder='Search Users'
                        showArrow={false}
                        defaultActiveFirstOption={false}
                        style={{ width: '250px' }}
                        onSearch={SearchFunc}
                        onChange={handlehchange}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
{children}
                    </Select>
    </>
)
}
export default Searchbar;