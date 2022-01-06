import { useEffect, useState } from "react"
import { Firestore } from "../firebase/firebase"
import {LikeOutlined, CommentOutlined, ShareAltOutlined} from '@ant-design/icons'
import './profiletabs/profiletabs.css'
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

    const [like, setlike] = useState(0)
    const likehandler = () =>{
        setlike++
    }
    return (
        <>



            {data.map((post) => {

                const { postText, postName, postImage, profile } = post
                // {console.log(post.postImage)}
                return (
                    <>
                        {/* <div class="card">
                            <h5 class="card-header">{postName}</h5>
                            <div class="card-body" style={{ backgroundColor: '#f7f7f7' }}>
                                <p class="card-text">{postText}</p>
                                {post.postImage ? <img src={postImage} style={{ width: '100%', height: '350px' }} class="img-responsive" /> : <span></span>}
                            </div>
                            <div className='likediv'>
                                <div><LikeOutlined style={{ fontSize: 15}} /></div>
                                <div><CommentOutlined style={{ fontSize: 15}} /></div>
                                <div><ShareAltOutlined style={{ fontSize: 15}} /></div>
                            </div>
                        </div> */}


<div className='post'>
                            <div className='postHeader'>
                                <div style={{margin:'10px 10px'}}>
                                <img src={profile}/>
                                </div>
                                <div className='name'>
                                <span>{postName}</span>
                                </div>
                            </div>
                            <div className='caption'>
                                <span>{postText}</span>
                            </div>
                            <div className='postImage'>
                                <img src={postImage}/>
                            </div>
                            {/* <hr/> */}
                            <div className='likediv'>
                                <div><LikeOutlined style={{ fontSize: 15, cursor:'pointer'}} onClick={likehandler} />{like}</div>
                                <div><CommentOutlined style={{ fontSize: 15, cursor:'pointer'}} /></div>
                                <div><ShareAltOutlined style={{ fontSize: 15, cursor:'pointer'}} /></div>
                            </div>
                            <hr/>
                         </div>


                    </>
                    //     ) 
                )
            })}

        </>
    )
}
export default Postcard