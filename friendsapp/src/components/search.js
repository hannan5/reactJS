import { Input } from 'antd';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Firestore } from '../firebase/firebase';
import './profile.css'
import { Appcontext } from './profilecontext';



const Searchbar = ({ searchQuery, setSearchQuery }) =>{
    
const { Search } = Input;

const navigate = useNavigate()
const contprofile = useContext(Appcontext)
// console.log(contprofile)
const [dataset, setdataset] = useState('')
const [searchuser, setsearchuser] = useState([])
const [inputvalue, setinputvalue] = useState('')
const [suggestuser, setsuggestuser] = useState([])
const [input, setinput] = useState('')


const onSearch = value => console.log(value);
// setinput(onSearch)
Firestore.collection('profile').onSnapshot((snap)=>{
    const dataArr = [];
    snap.docChanges().forEach((change)=>{
        if(change.type === 'added'){
            dataArr.push(change.doc.data())
        }
    })
    if(!dataset){
setsearchuser(dataArr)
setdataset(true)
    }
})

const profileSuggest = (e) =>{
const searchingWord =  e.target.value
setinputvalue(searchingWord)
// console.log(myArr)
const filteredData = searchuser.filter((obj) => {
    const lowerCaseName = obj.name.toLowerCase();
    return lowerCaseName.indexOf(searchingWord.toLowerCase()) !== -1;
  });
  setsuggestuser(filteredData)
//   console.log(suggestuser.map((elem)=>elem.name))
}
const handlehchange = () =>{
   let suggestname =  suggestuser.map((elem)=>elem.uid)
    navigate(`/profile/${suggestname}`)
}
// const getuser = () =>{
//     suggestuser.map((obj)=>{
//         let name = obj.name
    
//     Firestore.collection('profile').where('name','==', name).get().then(function(querySnapshot){
//         let profile = querySnapshot.docs.map(doc => doc.data())
//         console.log(profile)

//     })
// })
// }
// const getuserpost = () =>{
//     suggestuser.map((obj)=>{
//         let uid = obj.uid
   
//     Firestore.collection('post').where('uid', '==', uid).get().then(function(querySnapshot){
//         let post = querySnapshot.docs.map(doc => doc.data())
//         console.log(post)
//     })
// })

// }
// console.log(suggestuser.slice())
return(
    <>
    
    <div className='searchbar' style={{
                marginTop: '12px',
                marginLeft: '-22px',}}>

    <Search
      placeholder="Search"
      allowClear
    //   enterButton="Search"
      size="medium"
      onSearch={onSearch}
      onChange={profileSuggest}
      style={{marginTop:'-2px', marginLeft:'20px'}}
    />
    <div className='suggestion' style={{position:'fixed'}}>
{suggestuser.length ? suggestuser.map((obj)=>{
return <div className='name' style={{width:'100%'}} aria-current  id={obj.uid} onClick={handlehchange} > {obj.name} </div>    
//  <div className='name' aria-current onClick={ () =>{ getuser(); getuserpost()}} id={obj.uid} > {obj.name} </div>    
})
:<span></span>
}
    </div>
    </div>
    
    </>
)
}
export default Searchbar;