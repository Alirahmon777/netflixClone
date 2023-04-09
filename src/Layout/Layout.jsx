import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Layout = ({ redirectPath = "/signup" }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <>
      <Header />
      <main className="bg-[#141414] pb-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
