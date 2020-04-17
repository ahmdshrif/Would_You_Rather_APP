//*****************************************************************************
import { getUsers, } from "./authAction";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
//*****************************************************************************
export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAIL = "GET_QUESTIONS_FAIL";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_SUCCESS = "SAVE_QUESTION_SUCCESS";
export const SAVE_QUESTION_FAIL = "SAVE_QUESTION_FAIL";
export const SAVE_QUESTION_ANSEAR = "SAVE_QUESTION_ANSEAR";
export const SAVE_QUESTION_ANSEAR_SUCCESS = "SAVE_QUESTION_ANSEAR_SUCCESS";
export const SAVE_QUESTION_ANSEAR_FAIL = "SAVE_QUESTION_ANSEAR_FAIL";
//*****************************************************************************



//*****************************************************************************
export const getQuestions = () => async dispatch => {
    dispatch({ type: GET_QUESTIONS });
    try {
        const data = await _getQuestions();
        dispatch({ type: GET_QUESTIONS_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: GET_QUESTIONS_FAIL, payload: err.message });
        alert(err.message)
    }
};

//*****************************************************************************

export const saveQuestion = (author, optionOneText, optionTwoText) => async dispatch => {
    dispatch({ type: SAVE_QUESTION });
    try {
        const data = await _saveQuestion({ optionOneText, optionTwoText, author });
        await dispatch(getQuestions())
        await dispatch(getUsers())
        dispatch({ type: SAVE_QUESTION_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: SAVE_QUESTION_FAIL, payload: err.message });
        alert("can't save qustion  answear, try again ")
    }
};


//*****************************************************************************

export const saveQuestionAnswer = (authedUser, qid, answer) => async dispatch => {
    dispatch({ type: SAVE_QUESTION_ANSEAR });
    try {
        await _saveQuestionAnswer({ authedUser, qid, answer });
        await dispatch(getUsers())
        await dispatch(getQuestions())
        dispatch({ type: SAVE_QUESTION_ANSEAR_SUCCESS, });
    } catch (err) {
        dispatch({ type: SAVE_QUESTION_ANSEAR_FAIL, payload: err.message });
        alert(err.message)
    }
};

//*****************************************************************************
