import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import insta1 from "../assets/instagram-1.jpg";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSignUp, setIsSignUp] = useState(location.pathname === "/register");

  const toggleForm = () => {
    if (isSignUp) {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    const onRegisterPage = location.pathname === "/register";
    setIsSignUp(onRegisterPage);
  }, [location.pathname]);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    console.log(data);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const registerData = { name, email, password };
    console.log("Registering user:", registerData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a] md:bg-[#f0efed] p-0 md:p-6 lg:p-12 font-serif text-neutral-900">
      {/* Main Container */}
      <div className="relative w-full h-screen md:h-auto md:max-w-250 md:min-h-162.5 bg-black md:bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden md:rounded-sm">
        {/* BACKGROUND / SLIDING IMAGE PANEL */}
        <div
          className={`absolute top-0 transition-all duration-1000 ease-in-out z-0 md:z-50 
            w-full h-full md:w-1/2 bg-neutral-900
            ${isSignUp ? "md:left-1/2" : "md:left-0"}
          `}
        >
          <img
            src={insta1}
            alt="Fashion Editorial"
            className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-90 transition-transform duration-5000 hover:scale-110"
          />

          <div className="relative z-10 hidden md:flex flex-col items-center justify-center h-full text-center p-12 text-white">
            <h2 className="text-4xl lg:text-5xl tracking-[0.3em] uppercase mb-6 font-light leading-tight">
              The <br /> Atelier
            </h2>
            <p className="mb-10 italic text-sm lg:text-base text-gray-300 font-light max-w-62.5">
              Curated leather goods & ready-to-wear collections.
            </p>
            <button
              onClick={toggleForm}
              className="border border-white/40 px-14 py-4 uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
            >
              {isSignUp ? "Sign In" : "Register"}
            </button>
          </div>
        </div>

        {/* FORMS CONTAINER */}
        <div className="relative z-10 w-full h-full flex flex-1 flex-col md:flex-row">
          {/* SIGN IN SIDE */}
          <div
            className={`w-full md:w-1/2 h-full flex items-center justify-center p-6 md:p-12 transition-all duration-700
            ${isSignUp ? "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100" : "translate-x-0 opacity-100"}
          `}
          >
            <div className="w-full max-w-sm bg-white/10 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none p-10 md:p-0 border border-white/20 md:border-none shadow-2xl md:shadow-none">
              <h1 className="text-4xl md:text-3xl font-light text-white md:text-black uppercase tracking-tighter mb-2">
                Sign In
              </h1>
              <p className="text-[10px] uppercase text-gray-400 tracking-[0.25em] mb-12">
                Be a part of our community
              </p>

              <form className="space-y-10" onSubmit={handleLogin}>
                <div className="border-b border-white/30 md:border-neutral-200 pb-2">
                  <label className="block text-[14px] uppercase text-gray-400 mb-2 tracking-widest font-sans text-left">
                    Identity
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full outline-none bg-transparent text-white md:text-black text-sm"
                    placeholder="shopPDF@order.com"
                  />
                </div>
                <div className="border-b border-white/30 md:border-neutral-200 pb-2">
                  <label className="block text-[14px] uppercase text-gray-400 mb-2 tracking-widest font-sans text-left">
                    Secret
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full outline-none bg-transparent text-white md:text-black text-base"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white md:bg-neutral-900 text-black md:text-white py-5 uppercase text-[10px] tracking-[0.5em] font-bold"
                >
                  Enter
                </button>
              </form>

              <p className="mt-12 text-center text-[11px] text-gray-300 md:text-gray-500 uppercase tracking-[0.2em] md:hidden">
                New Here?{" "}
                <span
                  onClick={toggleForm}
                  className="text-white font-bold border-b border-white/50 ml-2"
                >
                  Join shopPDF
                </span>
              </p>
            </div>
          </div>

          {/* SIGN UP SIDE */}
          <div
            className={`w-full md:w-1/2 h-full flex items-center justify-center p-6 md:p-12 transition-all duration-700 absolute md:relative top-0 left-0
            ${isSignUp ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 md:translate-x-0 md:opacity-100"}
          `}
          >
            <div className="w-full max-w-sm bg-white/10 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none px-10 md:p-0 border border-white/20 md:border-none shadow-2xl md:shadow-none">
              <h1 className="text-4xl md:text-3xl font-light text-white md:text-black uppercase tracking-tighter my-2">
                Join Us
              </h1>
              <p className="text-[10px] uppercase text-gray-400 tracking-[0.25em] mb-12">
                Begin your journey with us
              </p>

              <form className="space-y-10" onSubmit={handleRegister}>
                <div className="border-b border-white/30 md:border-neutral-200 pb-2">
                  <label className="block text-[10px] uppercase text-gray-400 mb-2 tracking-widest font-sans text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full outline-none bg-transparent text-white md:text-black text-sm"
                    placeholder="Pretty Favour Designs "
                  />
                </div>
                <div className="border-b border-white/30 md:border-neutral-200 pb-2">
                  <label className="block text-[10px] uppercase text-gray-400 mb-2 tracking-widest font-sans text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full outline-none bg-transparent text-white md:text-black text-sm"
                    placeholder="shopPDF@order.com"
                  />
                </div>
                {/* NEW PASSWORD FIELD ADDED BELOW */}
                <div className="border-b border-white/30 md:border-neutral-200 pb-2">
                  <label className="block text-[10px] uppercase text-gray-400 mb-2 tracking-widest font-sans text-left">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full outline-none bg-transparent text-white md:text-black text-sm"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white md:bg-neutral-900 text-black md:text-white py-5 uppercase text-[10px] tracking-[0.5em] font-bold"
                >
                  Register
                </button>
              </form>

              <p className="mt-12 mb-2 text-center text-[11px] text-gray-300 md:text-gray-500 uppercase tracking-[0.2em] md:hidden">
                Member?{" "}
                <span
                  onClick={toggleForm}
                  className="text-white font-bold border-b border-white/50 ml-2"
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
