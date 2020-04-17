import {
    GET_QUESTIONS_SUCCESS,
    SAVE_QUESTION,
    SAVE_QUESTION_ANSEAR,
    SAVE_QUESTION_ANSEAR_FAIL,
    SAVE_QUESTION_ANSEAR_SUCCESS,
    SAVE_QUESTION_FAIL,
    SAVE_QUESTION_SUCCESS,
} from '../actions/qustionAction'
const initial_state = {
    AllQustions: {},
    questionAnwsearState: ""
}

export default function qustions(state = initial_state, action) {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return { ...state, AllQustions: action.payload }
        case SAVE_QUESTION:
            return { ...state, questionState: "loading" }
        case SAVE_QUESTION_SUCCESS:
            return { ...state, questionState: "success" }
        case SAVE_QUESTION_FAIL:
            return { ...state, questionState: "fail" }

        case SAVE_QUESTION_ANSEAR:
            return { ...state, questionAnwsearState: "loading" }
        case SAVE_QUESTION_ANSEAR_SUCCESS:
            return { ...state, questionAnwsearState: "success" }
        case SAVE_QUESTION_ANSEAR_FAIL:
            return { ...state, questionAnwsearState: "fail" }

        default:
            return state
    }
}