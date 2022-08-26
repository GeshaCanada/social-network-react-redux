import React from 'react'
import S from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div className={S.postsBlocks} >
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                {/* <button>Remove</button> */}
            </div>

            <div className={S.posts}>
                <Post message="What's up?" likeCount='0' />
                <Post message="It's my first post" likeCount='23' />


            </div>
        </div>
    )

}
export default MyPosts