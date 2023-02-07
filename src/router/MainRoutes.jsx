import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ChatsPage from '../pages/chats'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProtectedRoute from './ProtectedRoute'

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
    <Route element={<HomePage/>} path="/" />
    <Route element={<ProtectedRoute>
      <ChatsPage/>
    </ProtectedRoute>} path="chats" >

    </Route>
    <Route element={<NotFoundPage/>} path='*'/>
  

</Routes>
    </MainLayout>
  )
}

export default MainRoutes