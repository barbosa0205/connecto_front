import React from "react";

const AlertDone = ({ text }) => {
  return (
    <div className="w-full fixed top-0 left-0">
      <article className="w-fit max-w-md p-2 m-2">
        {/* close */}
        <header className="w-full flex items-center justify-end">
          <i className="ri-close-line"></i>
        </header>
        <p>{text}</p>
      </article>
    </div>
  );
};

export default AlertDone;
