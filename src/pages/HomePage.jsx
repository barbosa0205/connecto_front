import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Browsing.png";
import phoneImg from "../assets/Phone.png";
import useAuthContext from "../context/useAuthContext";
const HomePage = () => {
  const { user } = useAuthContext();

  return (
    <div className="w-full  bg-transparent">
      <section className="w-full flex flex-col justify-center items-start md:items-center py-10">
        <h1 className="max-w-xl sm:max-w-3xl text-5xl sm:text-7xl md:text-8xl md:max-w-4xl font-mono font-bold text-gray-200 pl-10">
          WELCOME TO CONNECTO CHAT APP
        </h1>
        <img src={phoneImg} alt="browsing" />
      </section>
      <section className="w-full flex flex-col justify-center items-end md:items-center py-10">
        <h2 className="max-w-2xl sm:max-w-4xl md:max-w-5xl text-5xl sm:text-7xl md:text-8xl text-end font-mono font-bold text-gray-200 pr-10">
          MEET A NEW PEOPLE AND MAKE NEW FRIENDS
        </h2>
        <img className="self-end" src={logoImg} alt="browsing" />
        <div className="w-full flex items-center justify-center">
          {user ? (
            <Link
              to="/chats"
              className="px-10 py-5 bg-gray-800 text-white font-mono rounded-xl my-10 text-3xl"
            >
              START CHATTING
            </Link>
          ) : (
            <Link
              to="/auth"
              className="px-10 py-5 bg-gray-800 hover:bg-gray-900 text-white font-mono rounded-xl my-10 text-3xl"
            >
              SIGN IN
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
