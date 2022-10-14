const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: "What's up?", likeCount: 0 },
        { id: 2, message: "It's my first post", likeCount: 23 },
        { id: 3, message: "Realy?", likeCount: 1 },
        { id: 4, message: "Yep!", likeCount: 11 }
    ],
    newPostText: 'React is cool!'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {      // action it's Object { type:'ADD-POST' } 
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer

/* let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        } */

/*{
  let stateCopy = {...state}
  stateCopy.newPostText = action.newText
  return stateCopy
}
*/