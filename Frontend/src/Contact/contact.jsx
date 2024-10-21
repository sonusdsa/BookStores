import React from "react";
import Footer from '../Components/footer'
import Navbar from '../Components/navbar'
// import { useForm } from "react-hook-form";
function contact() {
  return (
    <>
    <Navbar/>
        <div className="flex items-center justify-center min-h-screen">
          <form className="border rounded-lg shadow-2xl bg-white w-200">
            <h3 className="font-bold flex justify-center text-lg">Contact Us</h3>
            <div className="mt-4 px-3 space-y-2 dark:text-black">
              <span>Name</span>
              <br />
              <input
                type="name"
                placeholder="enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* email */}
            <div className="mt-4 px-3 space-y-2 dark:text-black">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* passward */}
            <div className="mt-4 px-3 space-y-2 dark:text-black">
              <span>Message</span>
              <br />
              <input
                type="message"
                placeholder="enter your comment"
                className="w-80 px-3 py-1 flex justify-around border rounded-md outline-none h-40"
              />
            </div>
            <div className=" mt-4 flex justify-center">
              <button className="bg-pink-500 hover:bg-green-500 text-white rounded-md px-3 py-1 duration-200 ">
                submit
              </button>
            </div>
          </form>
        </div>
        <Footer/>
    </>
    
  );
}

export default contact;
