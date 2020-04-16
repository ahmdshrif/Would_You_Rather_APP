import {
    GET_QUESTIONS,
    GET_QUESTIONS_FAIL,
    GET_QUESTIONS_SUCCESS,
    SAVE_QUESTION,
    SAVE_QUESTION_ANSEAR,
    SAVE_QUESTION_ANSEAR_FAIL,
    SAVE_QUESTION_ANSEAR_SUCCESS,
    SAVE_QUESTION_FAIL,
    SAVE_QUESTION_SUCCESS,
    getQuestions,
    saveQuestion,
    saveQuestionAnswer,
} from '../actions/qustionAction'
const initial_state = {
    qustions: {},
}

export default function qustions(state = initial_state, action) {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return { ...state, qustions: action.payload }
      
        default:
            return state
    }
}