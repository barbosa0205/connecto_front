import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AuthPage from '../pages/auth';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import NotFoundPage from '../pages/NotFoundPage';
import MainRoutes from './MainRoutes';




const AppRouter = () => {
 
  
  return <>
  <BrowserRouter>
    <Routes>
          {/* auth routes */}
          <Route path="auth"element={<AuthPage/>}>
            <Route index element={<SignIn/>} />
            <Route element={<SignIn/>} path='signin'/>
            <Route element={<SignUp/>} path='signup'/>
            <Route element={<NotFoundPage/>} path='*'/>
          </Route>
          <Route element={<MainRoutes/>} path='/*'/>
          
    
    </Routes>
  </BrowserRouter>  
  </>
}

export default AppRouter