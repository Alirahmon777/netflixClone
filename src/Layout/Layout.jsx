import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-[#141414]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
