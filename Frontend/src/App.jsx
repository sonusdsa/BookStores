import React from "react";
import Home from "./Home/home";
import Coursess from "./Courses/coursess";
import Signup from "./Components/signup";
import Contact from "./Contact/contact";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useauth } from "./Context/authprovider";

function App() {
  const [authuser, setauthuser] = useauth();
  console.log(authuser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authuser ? <Coursess /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
