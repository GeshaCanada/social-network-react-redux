import React from 'react'
import S from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ title = 'My posts', buttonText = 'Add post', ...props }) => {    // классическая диструктуризация части свойств обьекта 
    /* let posts = [
        { id: 1, message: "What's up?", likeCount:0 },
        { id: 2, message: "It's my first post", likeCount:23 }
    ]
    */
    let postsElements = props.posts
        .map(p => <Post message={p.message} likeCount={p.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
        
    }
    
    let onPostChange = ()=> {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={S.postsBlocks} >
            <h3>{title}</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                            value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>{buttonText}</button>
                </div>
                {/* <button>Remove</button> */}
            </div>

            <div className={S.posts}>
                {postsElements}

            </div>
        </div>
    )

}
export default MyPosts