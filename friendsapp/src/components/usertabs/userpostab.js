import { useEffect, useState } from "react"
import { Firestore } from "../../firebase/firebase"
import '../profiletabs/profiletabs.css'
import {LikeOutlined, CommentOutlined, ShareAltOutlined} from '@ant-design/icons'

const Userpostab = (props) =>{
    const uid = props.user.user
const [userprofile, setuserprofile] = useState([])
const [userpost, setuserpost] = useState([])


Firestore.collection('profile').where('uid', '==', uid).get().then(function (querySnapshot) {
    let profile = querySnapshot.docs.map(doc => doc.data())
    //   console.log(profile)
    profile.map((elem) => {
        setuserprofile(elem)
    })
})

Firestore.collection('post').where('uid', '==', uid).get().then(function (querySnapshot) {
    let post = querySnapshot.docs.map(doc => doc.data())
    setuserpost(post)
})
// console.log(userpost)
    return(
        <>
         <div className='container' style={{ marginTop: '100px' }}>
                <div className='row'>
                <div className='col-lg-6 col-12'>
                        <div>
                        <div className='intro'>
                            <div style={{ padding: '20px 0px 0px 10px' }}>
                                <h3>Intro</h3>
                            </div>
                            {/* <button>Add Bio</button> */}
                            <div className='intro-detail'>
                                <span>Studied at <a> {userprofile.education} </a></span>
                            </div>
                            <div className='intro-detail'>
                                <span>Lives in <a> {userprofile.live} </a></span>
                            </div>
                            <div className='intro-detail'>
                                <span>Status <a> {userprofile.status} </a></span>
                            </div>   
                            <div className='intro-detail'>
                                <span>Instagram <a>{userprofile.insta}</a></span>
                            </div>
                            <button>Edit Detail</button>
                        </div>

                </div>
        </div>
        <div className='col-lg-6 col-12'>

        {userpost.map((post) => {

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
export default Userpostab