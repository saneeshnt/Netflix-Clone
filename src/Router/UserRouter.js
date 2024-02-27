import {Route,Routes} from "react-router-dom"
import React from "react"
import SignInPage from "../Pages/UserPages/SignInPage"
import SignUpPage from "../Pages/UserPages/SignUpPage"
import HomePage from '../Pages/UserPages/HomePage'


function UserRouter() {
  return (
    <div><Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        </Routes></div>
  )
}

export default UserRouter