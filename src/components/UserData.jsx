import axios from "axios";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [users, setUsers] = useState([]);

  const response = axios.get("https://jsonplaceholder.typicode.com/users");
  useEffect(() => {
    response
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">User Data</h2>
        <ul className="bg-white p-6 shadow-md rounded-2xl gap-3 grid grid-cols-1 sm:grid-cols-3 text-center">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 p-y-10 border-1 border-gray-600 rounded-2xl bg-emerald-50"
            >
              <p className="font-semibold">User Name : {user.username}</p>
              <p>Name : {user.name}</p>
              <p>Email : {user.email}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserData;
