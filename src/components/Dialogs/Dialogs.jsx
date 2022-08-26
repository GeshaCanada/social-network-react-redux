import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={S.dialog + ' ' + S.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={S.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                <DialogItem name='Gennadii' id='1' />
                <DialogItem name='Anastasia' id='2' />
                <DialogItem name='React' id='3' />
                <DialogItem name='Victoria' id='4' />
                <DialogItem name='Daniel' id='5' />
                <DialogItem name='Sofia' id='6' />
            </div>

            <div className={S.messages}>
                <Message message='Hello!' />
                <Message message='How is going your React project?' />
                <Message message='Yoo))' />
                <Message message='Yoo))' />
                <Message message='Yoo))' />
            </div>
        </div>

    )
}
export default Dialogs;