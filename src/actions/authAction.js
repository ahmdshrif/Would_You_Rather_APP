//*****************************************************************************
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
//*****************************************************************************
export const LOGIN_USER = "LOGIN_USER";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";
export const LOGOUT_USER = "LOGOUT_USER"
//*****************************************************************************

export const loginUser = data => {
    return {
        type: LOGIN_USER,
        payload: data,
    };
};

//*****************************************************************************
export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};

//*****************************************************************************
export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS });
    try {
        const data = await _getUsers();
        dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: GET_USERS_FAIL, payload: err.message });
        alert(err.message)
    }
};

//*****************************************************************************
