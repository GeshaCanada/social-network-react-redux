import React from 'react'
import S from './Post.module.css' 

const Post = (props) => {
    return (
       
        <div className={S.item}>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8vh9I4qPrwIWLdY9JpU8ZaFTrNtlgvRKwA&usqp=CAU'/>
            {props.message}
            <div>
                <span> like </span> {props.likeCount}
            </div>
    </div>
    )

}
export default Post