import React from 'react';
import S from './Dialogs.module.css'
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';





const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)// Arrow function will call 6 times matching qty elements array
    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />)
       
    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={S.messages}>
                {messagesElements}
            </div>
        </div>

    )
}
export default Dialogs;