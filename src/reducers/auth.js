import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, LOGIN_USER, LOGOUT_USER } from '../actions/authAction'
const initial_state = {
  users: {},
  loginUser: null
}

export default function authedUser(state = initial_state, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload }
    case LOGIN_USER:
      return { ...state, loginUser: action.payload }
    case LOGOUT_USER:
      return { ...state, loginUser: null }

    default:
      return state
  }
}