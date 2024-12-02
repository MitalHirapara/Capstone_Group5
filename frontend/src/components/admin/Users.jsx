import React, {useState,useEffect} from "react";
import axios from 'axios';

const Users = () =>{
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/user/admin/')
          .then(response => {
              setUsers(response.data);
          })
          .catch(error => {
              console.error("There was an error fetching the users!", error);
          });
  }, []);
  return (
    <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-white ">User List</h1>
        <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white font-bold">ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white font-bold">Username</th>
                    <th className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white font-bold">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white font-bold">First Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white font-bold">Last Name</th>
                   
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white">{user.id}</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white">{user.username}</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white">{user.email}</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white">{user.first_name}</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-800 dark:text-white">{user.last_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default Users;