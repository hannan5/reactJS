import AppModal from '../../modal'
import '../profiletabs.css'
import pic from '../download.jpeg'
import {LikeOutlined, CommentOutlined, ShareAltOutlined} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { auth, Firestore } from '../../../firebase/firebase'


const Postabs = () => {

    const [data, setdata] = useState([])
    const getpost = () => {
        Firestore.collection('post').where('uid', '==', auth.currentUser.uid).get().then(function (querySnapshot) {
            let posts = querySnapshot.docs.map(doc => doc.data())
            // return posts
                setdata(posts)
            console.log(data)
        })
    
    }
    // console.log(data)
    useEffect(() => {
        getpost()

    }, [])

    return (
        <>
            <div className='container' style={{ marginTop: '20px' }}>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div>
                        <div className='intro'>
                            <div style={{ padding: '20px 0px 0px 10px' }}>
                                <h3>Intro</h3>
                            </div>
                            <button>Add Bio</button>
                            <div className='intro-detail'>
                                <span>Studied at <a> Govt. Islamia Science College </a></span>
                            </div>
                            <div className='intro-detail'>
                                <span>Lives in <a> Karachi, Pakistan </a></span>
                            </div>
                            <div className='intro-detail'>
                                <span>Single </span>
                            </div>   
                            <div className='intro-detail'>
                                <span>hannankhan52</span>
                            </div>
                            <button>Edit Detail</button>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                            <div className='addpost'>
                                <AppModal/>
                        </div>
                        {data.map((post) => {

const { postText, postName, postImage } = post
// {console.log(post.postImage)}
return (
    <>
                        <div className='post'>
                            <div className='postHeader'>
                                <div style={{margin:'10px 10px'}}>
                                <img src={pic}/>
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
                                <div><LikeOutlined style={{ fontSize: 15}} /></div>
                                <div><CommentOutlined style={{ fontSize: 15}} /></div>
                                <div><ShareAltOutlined style={{ fontSize: 15}} /></div>
                            </div>
                            <hr/>
                         </div>

    </>
    //     ) 
)
})}




                    </div>
                </div>
            </div>

        </>
    )
}
export default Postabs