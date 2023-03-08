import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setListOfUsers(response.data);
    }).catch(err => setError(err));
  }, []);

  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>List of Users</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li > <span style={{fontSize:"20px"}}>{user.name}</span> <br/><span style={{color:"blue"}}>E-mail : {user.email}</span>  <br/><span>Tel : {user.phone}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;