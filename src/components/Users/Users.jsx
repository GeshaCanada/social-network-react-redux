import React from 'react';
import S from './Users.module.css'


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [ //users
            {
                id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8vh9I4qPrwIWLdY9JpU8ZaFTrNtlgvRKwA&usqp=CAU',
                followed: true, fullName: 'Daniel', status: 'Spirit Is Everything', location: { city: 'Toronto', country: 'Canada' }
            },
            {
                id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8vh9I4qPrwIWLdY9JpU8ZaFTrNtlgvRKwA&usqp=CAU',
                followed: false, fullName: 'John', status: 'I am a boss', location: { city: 'Miami', country: 'USA' }
            },
            {
                id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8vh9I4qPrwIWLdY9JpU8ZaFTrNtlgvRKwA&usqp=CAU',
                followed: true, fullName: 'Nick', status: 'Glory of Ukraine', location: { city: 'Kyiv', country: 'Ukraine' }
            }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={S.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>

            )
        }
    </div>
}

export default Users