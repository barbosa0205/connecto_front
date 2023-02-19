import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddContactPage from "../pages/AddContactPage";
import ChatsPage from "../pages/chats";
import ChatPage from "../pages/chats/ChatPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route
          element={
            <ProtectedRoute>
              <ChatsPage />
            </ProtectedRoute>
          }
          path="chats"
        />

        <Route
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
          path="chats/:id"
        />

        <Route
          element={
            <ProtectedRoute>
              <AddContactPage />
            </ProtectedRoute>
          }
          path="add_contact"
        />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </MainLayout>
  );
};

export default MainRoutes;
