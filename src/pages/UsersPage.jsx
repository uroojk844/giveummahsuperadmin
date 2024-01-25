import React, { useEffect, useState } from "react";
import TableRow from "../components/TableRow";

import AddUser from "../components/AddUser";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const[add,setAdd] = useState(false)
  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=10")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className="p-5 h-[100dvh] overflow-scroll">
        <div className="mb-4 flex justify-between itens-center">
          <span className="text-xl font-bold">All Users</span>{" "}
          <button onClick={()=>setAdd(true)} className="border bg-blue-500 text-white px-3 py-1 rounded-lg">
            Add user
          </button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 font-medium bg-white">
            <div className="p-4 border-r">Full name</div>
            <div className="p-4 border-r">User name</div>
            <div className="p-4 border-r">Password</div>
          </div>
          {users.map((item) => (
            <TableRow data={item} />
          ))}
        </div>
      </div>
          {
              add && <AddUser controller={[add,setAdd]} />
      }
    </>
  );
};

export default UsersPage;
