import { useContext, useEffect, useState } from "react"
import { fire, Firestore } from "../firebase/firebase"
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons'
import './profiletabs/profiletabs.css'
import CurentUserContext from "../context/CurrentUserContext"
import { arrayUnion, arrayRemove } from 'firebase/firestore'
import { Collapse, Comment, Input, Button, Form } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import InputEmoji from "react-input-emoji";
import Postcomment from "./postcomments"
import { Link } from "react-router-dom"
const Postcard = () => {

    const [form] = Form.useForm();
    const { Panel } = Collapse
    // const [form] = Form.useForm();

    const userobj = useContext(CurentUserContext)
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
    useEffect(() => {
        getpost()
    }, [])

    const [callBack, setcallBack] = useState('[]')
    function callback(key) {
        // console.log(key);
        setcallBack(key)
    }

    const likehandler = (element) => {
        let doc = element.postuid
        let user = userobj.uid
        let arr = element.liked
        if (arr.findIndex((find) => find == user) >= 0) {
            Firestore.collection('post').doc(`${doc}`).update({
                liked: arrayRemove(user)
            })
        }
        else {
            Firestore.collection('post').doc(`${doc}`).update({
                liked: arrayUnion(user)
            })
        }
    }


    const onFinish =  (postobj, Comment) => {
        console.log('Success:', postobj, Comment.comment);
        let commentuid = new Date().getTime()
       Firestore.collection('post').doc(`${postobj}`).collection('comments').doc(`${commentuid}`).set({
            comment: Comment.comment,
            commentpic: userobj.profile,
            name: userobj.name,
            adminuid: userobj.uid,
            postuid: postobj,
            commentuid: commentuid
        })
        setcallBack(Comment.comment)
        form.resetFields();  
    };

    return (
        <>
            {data.map((post) => {

                const { postText, postName, postImage, profile, uid, liked } = post
                return (
                    <>
                        <div className='post'>
                            {<Link to={`/profile/${uid}`} style={{textDecoration:'none'}}>
                            <div className='postHeader'>
                                <div style={{ margin: '10px 10px' }}>
                                    <img src={profile} />
                                </div>
                                <div className='name'>
                                    <span>{postName}</span>
                                </div>
                            </div>
                            </Link>}
                            <div className='caption'>
                                <span>{postText}</span>
                            </div>
                            <div className='postImage'>
                                <img src={postImage} />
                            </div>
                            <div className='likediv'>
                                <div><LikeOutlined style={{ fontSize: 15, cursor: 'pointer' }} onClick={() => { likehandler(post) }} />{liked.length}</div>
                                <div>
                                    <Collapse style={{ marginTop: -8 }} expandIcon={() => { }} ghost='true' onChange={callback}>
                                        <Panel header={<CommentOutlined style={{ fontSize: 15, cursor: 'pointer' }} />}>
                                            <div style={{ width: '500px' }}>
                                                <Comment
                                                    // avatar={<Avatar src={userobj.profile}></Avatar>}
                                                    content={

                                                        <Form
                                                            form={form}
                                                            onFinish={(comment) => { onFinish(post.postuid, comment) }}
                                                        >
                                                            <Form.Item
                                                                name='comment'
                                                            >
                                                                <InputEmoji />
                                                            </Form.Item>
                                                            <Form.Item>
                                                                <Button htmlType='submit'>Add Comment</Button>
                                                            </Form.Item>
                                                        </Form>

                                                    }
                                                ></Comment>
                                                <Postcomment post={post} />
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div><ShareAltOutlined style={{ fontSize: 15, cursor: 'pointer' }} /></div>
                            </div>
                            <hr />
                        </div>
                    </>
                )
            })}

        </>
    )
}
export default Postcard