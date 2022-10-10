import React from 'react'
import store from '../redux/redux-store'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import S from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store = {props.store}/>
        </div>
    )

}
export default Profile