import { Firestore } from "../firebase/firebase";
import React, { createElement, useEffect, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';

const Postcomment = (props) =>{
    console.log(props.post.postuid)
    let postuid = props.post.postuid

    const [comments, setcomments]  = useState([])
useEffect(()=>{
    Firestore.collection('post').doc(`${postuid}`).collection('comments').where('postuid', '==', postuid).get().then((querysnapshot)=>{
        let comments = querysnapshot.docs.map(doc=>doc.data())
        // console.log(comments)
        setcomments(comments)
    })
},[props])
return(
    <div>
        {comments.map((elem)=>{
            // console.log(elem.name)
            return(<>
     <Comment
      author={<a>{elem.name}</a>}
      avatar={<Avatar src={elem.commentpic} alt="Han Solo" />}
      style={{textAlign:'left'}}
      content={
        <p>
         {elem.comment}
        </p>
      }
    />                  
            </>)
        })}

    </div>
)
}
export default Postcomment;