import React from 'react'
import style from "../assets/users.module.css"

const AddUser = ({ controller }) => {
    const[add,setAdd] = controller
  return (
    <div
      className={`fixed bg-black inset-0 z-10 ${style.overlay} grid place-items-center`}
    >
      <div className="w-[32%] bg-white rounded p-4 animate__animated animate__bounceIn">
        <div className="text-xl font-bold mb-3">Add a user</div>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full name"
            className="border border-gray-200 w-full p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-200 w-full p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Password"
            className="border border-gray-200 w-full p-3 rounded-lg"
          />
          <button className="bg-black w-full text-white p-2 rounded-lg">
            Add user
          </button>
          <div className="text-center cursor-pointer" onClick={() => setAdd(false)}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser