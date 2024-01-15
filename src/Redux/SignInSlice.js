import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
  name : 'signin',
  initialState : {
    view : null,
    validationErrorMsg : {
      fnameError : '',
      lnameError : '',
      emailError : '',
      passwordError : '',
    },
    userDetails : {
      firstName : null,
      lastName : null,
      email : null,
      password : null,
    },
    isSubmitting : false
  },
  reducers : {
    openSignInView : (state) => {
      state.view = "SIGNIN"
    },
    closeView : (state) => {
      state.view = null
    },
    setFName : (state,action) => {
      state.userDetails.firstName = action.payload
      console.log(state.userDetails.firstName)
    },
    setLName : (state,action) => {
      state.userDetails.lastName = action.payload
      console.log(state.userDetails.lastName)
    },
    setmail : (state,action) => {
      state.userDetails.email = action.payload
      console.log(state.userDetails.email)
    },
    setpassword : (state,action) => {
      state.userDetails.password = action.payload
    },
    setFNameErrors : (state, action) => {
      state.validationErrorMsg.fnameError = action.payload
    },
    setLNameErrors : (state, action) => {
      state.validationErrorMsg.lnameError = action.payload
    },
    setEmailErrors : (state, action) => {
      state.validationErrorMsg.emailError = action.payload
    },
    setPasswordErrors : (state, action) => {
      state.validationErrorMsg.passwordError = action.payload
    },
    setSubmitting : (state, action) => {
      state.isSubmitting = action.payload
    }
  }
})

export const {openSignInView, closeView, setFName, setLName, setmail, setPassword, userDetails,setEmailErrors, setFNameErrors, setLNameErrors, validationErrorMsg, setpassword, setPasswordErrors, setSubmitting} = signInSlice.actions

/**
 * 
 * @param {*} payload 
 * @param {import('react-router-dom').NavigateFunction} navigate 
 * @returns 
 */

export const validateSignInForm = () => (dispatch, getState) => {
  const state = getState().signin
  if(!state.userDetails.firstName || !state.userDetails.firstName.length){
    dispatch(setFNameErrors('First name is required.'))
  }else{
    dispatch(setFNameErrors(''))
  }
  if(!state.userDetails.lastName || !state.userDetails.lastName.length){
    dispatch(setLNameErrors('Last name is required'))
  }else {
    dispatch(setLNameErrors(''))
  }
  if(!state.userDetails.email || !state.userDetails.email.length){
    dispatch(setEmailErrors('Email is required'))
  }else {
    dispatch(setEmailErrors(''))
  }
  if(!state.userDetails.password || !state.userDetails.password.length){
    dispatch(setPasswordErrors('Password is required'))
  }else if(state.userDetails.password.length < 8){
    dispatch(setPasswordErrors('Password must be 8 characters long'))
  }else {
    dispatch(setPasswordErrors(''))
  }
  return true
}

export const setLoader = () => (dispatch, getState) => {
  const state = getState().signin

  const hasNoErrors = Object.values(state.validationErrorMsg).every(error => error === '');

  if (hasNoErrors) {
    dispatch(closeView());
    dispatch(setSubmitting(true));

    setTimeout(() => {
      dispatch(setSubmitting(false));
    }, 5000);
  }
}

export default signInSlice.reducer