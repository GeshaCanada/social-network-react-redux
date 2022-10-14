const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Gennadii' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Anastasia' },
        { id: 4, name: 'Victoria' },
        { id: 5, name: 'Daniel' },
        { id: 6, name: 'Sofia' }
    ],
    messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How is going your React project?' },
        { id: 3, message: 'Yoo))' },
        { id: 4, message: 'Yoo))' },
        { id: 5, message: 'Yoo))' }

    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE: 
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer