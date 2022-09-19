import React from 'react';
import S from './Dialogs.module.css'
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';





const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)// Arrow function will call 6 times matching qty elements array
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} />)

    let newDialogElement = React.createRef();

    let addDilog = () => {
        let text = newDialogElement.current.value;
        alert(text);
        // newDialogElement.current.value = ''; // after call function empty string 
    }

    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={S.messages}>
                {messagesElements}
                <div><h3>Dialogs</h3></div>
                <div>
                    <textarea ref={newDialogElement}></textarea>
                </div>
                <div>
                    <button onClick={addDilog}>Add dialog</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;