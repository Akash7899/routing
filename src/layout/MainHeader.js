import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const MainHeader = () => {
  return (
    <>
      <div className="container">
        <Header />

        <Outlet />
      </div>
    </>
  );
};

export default MainHeader;
