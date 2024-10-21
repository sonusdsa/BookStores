import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from =location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email : data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('SignUp sucessfully');
          navigate(from,{replace:true});
          
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      })
      .catch((error) => {
      if (error.response) {
        console.log(error);
      
        toast.success("Error:" + error.response.data.message);
      }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">
                  ✕
                </button>
              </Link>

              <h3 className="font-bold text-lg dark:text-black">SignUp</h3>
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* email */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* passward */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black"> Password</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 dark:text-black">
                  SignUp
                </button>
                <p className="flex">
                  <p className="dark:text-black">Have account?</p>
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default signup;
