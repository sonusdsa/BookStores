import React from 'react'
import { useauth } from '../Context/authprovider'
import toast from 'react-hot-toast'

function logout() {
    const [authuser,setauthuser]=useauth()
    const handleLogout=()=>{
        try {
            setauthuser({
                ...authuser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout sucessfully")
            setTimeout(() => {
                // document.getElementById("my_modal_3").close();
                window.location.reload();
                },2000);

        } catch (error) {
            toast.error("Error:"+error.message)
            setTimeout(() => {}, 2000);
    
        }
    }
  return (
    <div>
      <button className=' bg-red-500 text-white rounded-md px-3 py-1 cursor-pointer'onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default logout
