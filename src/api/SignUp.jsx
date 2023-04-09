import React, { useContext } from "react";
import { login } from "../assets/img";
import { NetflixLogo } from "../assets/svg";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { enqueueSnackbar } from "notistack";
const SignUp = () => {
  const navigate = useNavigate();

  const { email, setEmail, password, setPassword, setIsLogin } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    api()
      .post("https://reqres.in/api/register", {
        email,
        password,
      })
      .then((response) => {
        enqueueSnackbar(email + " successfully registered", {
          variant: "success",
        });
        localStorage.setItem("token", response.data.token);

        setIsLogin(true);
        navigate("/");
        return response.data;
      })
      .catch((error) => {
        enqueueSnackbar(
          `${error.message} try using this email eve.holt@reqres.in`,
          {
            autoHideDuration: 3000,
            variant: "error",
          }
        );
        throw error;
      });
  };
  return (
    <section
      className="w-full h-[100vh] bg-cover bg-right-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${login})` }}
    >
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute">
        <div className="container z-10 relative">
          <img src={NetflixLogo} className="z-10 w-52 p-5 absolute" alt="" />
          <div className="z-10 flex items-center justify-center h-screen w-full">
            <div className="bg-[#141414] p-9 w-1/3 rounded-xl">
              <h3 className="text-white text-4xl">Sign Up</h3>
              <form
                action="post"
                onSubmit={handleSubmit}
                className="z-10 flex flex-col mt-10 gap-6"
              >
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="py-4 px-5 text-white rounded-md bg-transparent outline-none focus:bg-[rgb(69,69,69)] caret-white"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="py-4 px-5 text-white rounded-md bg-transparent outline-none focus:bg-[rgb(69,69,69)] caret-white"
                />
                <button className="text-white bg-[#B9090B] py-4 rounded-md">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <p className="">New to Netflix?</p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
