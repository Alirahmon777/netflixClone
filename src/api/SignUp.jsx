import React from "react";
import { login } from "../assets/img";

const SignUp = () => {
  return (
    <section
      className="w-full h-[100vh] flex items-center justify-center bg-cover bg-right-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${login})` }}
    >
      <div className="bg-[rgba(0,0,0,0.6)] w-full h-full absolute"></div>
      <form action="post" className="z-10">
        <input type="text" />
      </form>
    </section>
  );
};

export default SignUp;
