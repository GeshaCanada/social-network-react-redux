import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import S from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} /> {/*retranslate data from Profile.jsx props to My.posts  */}
        </div>
    )

}
export default Profile