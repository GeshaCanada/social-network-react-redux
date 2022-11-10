import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import S from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://www.seoclerk.com/pics/want54528-1TN07J1505170416.png' />
            </div>
            <div className={S.descriptionBlock}>
                <img src={props.profile.photos.large} />
                 avatar
            </div>
        </div>
    )

}
export default ProfileInfo