import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer."

let store = {

    _state: {

        profilePage: {
            posts: [
                { id: 1, message: "What's up?", likeCount: 0 },
                { id: 2, message: "It's my first post", likeCount: 23 },
                { id: 3, message: "Realy?", likeCount: 1 },
                { id: 4, message: "Yep!", likeCount: 11 }
            ],
            newPostText: 'React is cool!'
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer         // observer patern
    },

    // method which change state:

    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer (this._state.sidebar, action)

        this._callSubscriber (this._state)
    }
}

window.store = store


export default store


// store OOP