import { SET_CURRENT_USER, SET_SCORE } from "./actionTypes";

export const setCurrentUser = (name: string) => {
    return {
        type: SET_CURRENT_USER,
        payload: name
    }
}

export const setScore = (score: number) => {
    return {
       type: SET_SCORE,
       payload: score,
    };
}
