import React from 'react';
import S from './Dialogs.module.css'
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    
    let state = props.dialogsPage

    let dialogsElement = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)// Arrow function will call 6 times matching qty elements array
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMessageBody



    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {     // e - event
       let body = e.target.value
       props.updateNewMessageBody(body)
    }
    
if (!props.isAuth) return <Redirect to={'/Login'}/>
    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={S.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;