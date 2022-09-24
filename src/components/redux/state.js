let store = {                            // store OOP
   
    getState() {
        return this._state
    },

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
                { id: 5, message: 'Yoo))' },
                { id: 6, message: 'Yoo))' }
            ]
        }
    },
    
    _callSubscriber() {
        console.log('state changed')
    },
    
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer         // observer patern
    }

}

export default store

window.store = store