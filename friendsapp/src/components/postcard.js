import './postcard.css'
import { Card } from "antd"
import { useEffect, useState } from "react"
import { auth, Firestore } from "../firebase/firebase"
import pic from '../images/callgirl.jpg'

const Postcard = () => {

    // const name = auth.currentUser.displayName
    const [post, setpost] = useState()
    const [data, setdata] = useState([])
    const getpost = () => {
        Firestore.collection('post').onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setdata(items)
        })
    }
    console.log(data)
    useEffect(() => {
        getpost()

    }, [])
    return (
        <>



            {data.map((post)=>{ 
        const{postText, postName} = post
    return(
            <>
                <div class="card">
  <h5 class="card-header">{postName}</h5>
  <div class="card-body">
    {/* <h5 class="card-title">Special title treatment</h5> */}
    <p class="card-text">{postText}</p>
  </div>
</div>
            </>
            //     ) 
             )})}

        </>
    )
}
export default Postcard