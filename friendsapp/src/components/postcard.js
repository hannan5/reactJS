import './postcard.css'
import { useEffect, useState } from "react"
import { Firestore } from "../firebase/firebase"

const Postcard = () => {

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
    // console.log(data)
    useEffect(() => {
        getpost()

    }, [])
    return (
        <>



            {data.map((post) => {

                const { postText, postName, postImage } = post
                // {console.log(post.postImage)}
                return (
                    <>
                        <div class="card">
                            <h5 class="card-header">{postName}</h5>
                            <div class="card-body" style={{ backgroundColor: '#f7f7f7' }}>
                                {/* <h5 class="card-title">Special title treatment</h5> */}
                                <p class="card-text">{postText}</p>
                                {post.postImage ? <img src={postImage} style={{ width: '100%', height: '350px' }} class="img-responsive" /> : <span></span>}
                            </div>
                            <div className='likediv'>
                                <div><h3>Like</h3></div>
                                <div><h3>Comment</h3></div>
                                <div><h3>Share</h3></div>
                            </div>
                        </div>
                    </>
                    //     ) 
                )
            })}

        </>
    )
}
export default Postcard