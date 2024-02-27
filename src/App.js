import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UserRouters from "../src/Router/UserRouter";
import AdminRouters from "../src/Router/AdminRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouters/>}/>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
        </Routes>
        
      </BrowserRouter>    </div>
  )
}

export default App