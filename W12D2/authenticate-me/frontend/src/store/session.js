import csrfFetch, { storeCSRFToken } from "./csrf"
export const SET_CURRENT_USER = 'session/setCurrentUser'
export const REMOVE_CURRENT_USER = 'session/removeCurrentUser'

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

// const removeCurrentUser = () => {
//     return {
//         type: REMOVE_CURRENT_USER,
//     }
// }



export const restoreSession = () => async (dispatch) => {
    const res = await fetch('api/session')
    storeCSRFToken(res)
    const data = await res.json()
    storeCurrentUser(data.user)
    dispatch(setCurrentUser(data.user))
    return res
}

export const storeCurrentUser = (user) => {
    let data = JSON.stringify(user)
    if (user) {
    sessionStorage.setItem("currentUser", data)
    } else {
        sessionStorage.removeItem("currentUser")
    }
}

export const login = (user) => async (dispatch) => {
    let {credential, password} = user;
    let res = await csrfFetch('api/session', {
        method: 'POST', body: JSON.stringify({credential: credential, password: password
        })
    }) 
    const data = await res.json();
    dispatch(setCurrentUser(data.user))
    storeCurrentUser(data.user)
}

const initialState = {user: JSON.parse(sessionStorage.getItem("currentUser"))};

const sessionReducer = (state = {initialState}, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {...state, user: action.payload};
        case REMOVE_CURRENT_USER:
            return {...state, user: null}
        default:
            return state;
    }
}

export default sessionReducer