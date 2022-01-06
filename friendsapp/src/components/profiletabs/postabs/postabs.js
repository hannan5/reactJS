import AppModal from '../../modal'
import '../profiletabs.css'
import {LikeOutlined, CommentOutlined, ShareAltOutlined} from '@ant-design/icons'
import { useContext, useEffect, useState } from 'react'
import { auth, Firestore } from '../../../firebase/firebase'
import CurentUserContext from '../../../context/CurrentUserContext'


const Postabs = () => {

    const user = useContext(CurentUserContext)
    const [data, setdata] = useState([])
    const getpost = () => {
        Firestore.collection('post').where('uid', '==', auth.currentUser.uid).get().then(function (querySnapshot) {
            let posts = querySnapshot.docs.map(doc => doc.data())
            // return posts
                setdata(posts)
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
                                <span>Studied at <a> {user.education} </a></span>
                            </div>
                            <div className='intro-detail'>
                                <span>Lives in <a> {user.live} </a></span>
                            </div>
                            <div className='intro-detail'>
                                <span>Status <a> {user.status} </a></span>
                            </div>   
                            <div className='intro-detail'>
                                <span>Instagram <a>{user.insta}</a></span>
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

const { postText, postName, postImage, profile } = post
// {console.log(post.postImage)}
return (
    <>
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
                                <div><LikeOutlined style={{ fontSize: 15, cursor:'pointer'}} /></div>
                                <div><CommentOutlined style={{ fontSize: 15, cursor:'pointer'}} /></div>
                                <div><ShareAltOutlined style={{ fontSize: 15, cursor:'pointer'}} /></div>
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