import React from 'react'
import S from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://www.seoclerk.com/pics/want54528-1TN07J1505170416.png' />
            </div>
            <div className={S.descriptionBlock}>
                ava+description
            </div>
        </div>
    )

}
export default ProfileInfo