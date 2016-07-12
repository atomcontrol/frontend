import axios from 'axios';

//Get current user(me) from token in localStorage
export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
export const RESET_TOKEN = 'RESET_TOKEN';

//Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const RESET_USER = 'RESET_USER';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';


//validate email, if success, then load user and login
export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';
export const VALIDATE_EMAIL_SUCCESS = 'VALIDATE_EMAIL_SUCCESS';
export const VALIDATE_EMAIL_FAILURE = 'VALIDATE_EMAIL_FAILURE';

//called when email is updated in profile to update main user's email state
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';


//log out user
export const LOGOUT_USER = 'LOGOUT_USER';


const ROOT_URL = 'http://bm/v1'; //location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function validateEmail(validateEmailToken) {
  //check if token from welcome email is valid, if so, update email as verified and login the user from response
  const request = axios.get(`${ROOT_URL}/validateEmail/${validateEmailToken}`);

  return {
    type: VALIDATE_EMAIL,
    payload: request
  };
}

export function validateEmailSuccess(currentUser) {
  return {
    type: VALIDATE_EMAIL_SUCCESS,
    payload: currentUser
  };
}

export function validateEmailFailure(error) {
  return {
    type: VALIDATE_EMAIL_FAILURE,
    payload: error
  };
}

export function meFromToken(tokenFromStorage) {
  //check if the token is still valid, if so, get me from the server
  const request = axios.get(`${ROOT_URL}/users/me?token=${tokenFromStorage}`);

  return {
    type: ME_FROM_TOKEN,
    payload: request
  };
}

export function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  };
}

export function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error
  };
}


export function resetToken() {//used for logout
  return {
    type: RESET_TOKEN
  };
}


export function signUpUser(formValues) {
  const request = axios.post(`${ROOT_URL}/users/signup`, formValues);

  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export function signUpUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}


export function resetUser() {
  return {
    type: RESET_USER,
  };
}

export function signInUser(formValues) {
  const request = axios.post(`${ROOT_URL}/auth`, formValues);

  return {
    type: SIGNIN_USER,
    payload: request
  };
}

export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  localStorage.removeItem('id_token');
  return {
    type: LOGOUT_USER
  };
}
export function updateUserEmail(email) {
  return {
    type: UPDATE_USER_EMAIL,
    payload:email
  };
}

//
//
// // There are three possible states for our login
// // process and we need actions for each of them
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'
//
// function requestLogin(creds) {
//   return {
//     type: LOGIN_REQUEST,
//     isFetching: true,
//     isAuthenticated: false,
//     creds
//   }
// }
//
// function receiveLogin(user) {
//   return {
//     type: LOGIN_SUCCESS,
//     isFetching: false,
//     isAuthenticated: true,
//     id_token: user.id_token
//   }
// }
//
// function loginError(message) {
//   return {
//     type: LOGIN_FAILURE,
//     isFetching: false,
//     isAuthenticated: false,
//     message
//   }
// }
//
//
// export function loginUser(creds) {
//
//   let formValues={email:'nicky@purdue.edu',password:'nicky'};
//
//   var data = new FormData();
//   data.append("email", formValues.email);//todo: why doesn't this work!!
//   data.append("password", formValues.password);
//
//   console.log("sending:", formValues);
//
//
//   let config = {
//     method: 'POST',
//     headers: { 'Content-Type':'application/x-www-form-urlencoded' },
//     body: data
//   }
//
//   return dispatch => {
//     // We dispatch requestLogin to kickoff the call to the API
//     dispatch(requestLogin(creds))
//
//     return fetch('http://localhost:3001/sessions/create', config)
//       .then(response =>
//         response.json().then(user => ({ user, response }))
//       ).then(({ user, response }) =>  {
//         if (!response.ok) {
//           // If there was a problem, we want to
//           // dispatch the error condition
//           dispatch(loginError(user.message))
//           return Promise.reject(user)
//         } else {
//           // If login was successful, set the token in local storage
//           localStorage.setItem('id_token', user.id_token)
//           // Dispatch the success action
//           dispatch(receiveLogin(user))
//         }
//       }).catch(err => console.log("Error: ", err))
//   }
// }


//
// // Three possible states for our logout process as well.
// // Since we are using JWTs, we just need to remove the token
// // from localStorage. These actions are more useful if we
// // were calling the API to log the user out
// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
//
// function requestLogout() {
//   return {
//     type: LOGOUT_REQUEST,
//     isFetching: true,
//     isAuthenticated: true
//   }
// }
//
// function receiveLogout() {
//   return {
//     type: LOGOUT_SUCCESS,
//     isFetching: false,
//     isAuthenticated: false
//   }
// }
//
//
// // Logs the user out
// export function logoutUser() {
//   return dispatch => {
//     dispatch(requestLogout())
//     localStorage.removeItem('id_token')
//     dispatch(receiveLogout())
//   }
// }
//
//
