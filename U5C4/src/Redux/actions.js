// action types

export const ADMIN = "ADMIN";
export const LOGIN = "LOGIN";

// Action Creators

export const admin = (data) => {
    return {
        type: ADMIN,
        payload: data
    }
}
export const logIn = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}