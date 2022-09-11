import React from 'react';
import S from './../Dialogs.module.css'


const Message = (props) => {
    return <div className={S.dialog}>{props.message}</div>
}


export default Message;