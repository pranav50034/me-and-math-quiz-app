import { SET_CURRENT_USER, SET_SCORE } from "../actions/actionTypes"

interface UserState {
    currentUser: {
        name: string
    },
    score: number
}

const initialState: UserState = {
    currentUser: {
        name: ""
    },
    score: 0,
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
               ...state,
                currentUser: {
                    name: action.payload
                }
            }
        case SET_SCORE:
            return {
               ...state,
                score: action.payload
            }
        default:
            return state
    }
}

export default userReducer;
