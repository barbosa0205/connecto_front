import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAuthContext from "../context/useAuthContext";
import "../styles/layouts/MainLayout.scss";
const MainLayout = (props) => {
  const { user } = useAuthContext();

  return (
    <>
      <Navbar />
      <main className="container mx-auto height">{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
