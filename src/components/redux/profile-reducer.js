import { usersAPI } from "../../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        { id: 1, message: "What's up?", likeCount: 0 },
        { id: 2, message: "It's my first post", likeCount: 23 },
        { id: 3, message: "Realy?", likeCount: 1 },
        { id: 4, message: "Yep!", likeCount: 11 }
    ],
    newPostText: 'React is cool!',
    profile: null
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => { // thunk
    usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
}
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