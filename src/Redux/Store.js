import { configureStore } from "@reduxjs/toolkit";
import SingInReducer from "./SignInSlice"

const store = configureStore({
  reducer : {
    signin : SingInReducer
  }
})

export default store;