import { useEffect, useState } from "react";
import axios from "axios"; 

const Get = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    axios  //library to make API request

    //  it can be used by 4 methods
    // Get - Read Data
    // Post - Create Data
    // Delete - Delete the created data
    // Put - Update

    // Axios return Promise 
    // so we are using THEN and CATCH
    // also ASYNCHRONOUS AWAIT

      .get("https://jsonplaceholder.typicode.com/users") 
      .then((response) => { //runs after the api gives the data
        // response - contains everything returned by the server
    
        setUsers(response.data);
      })
      .catch((error) => { //if it didnot give data it will move here
        console.log("Error:", error); 
      });
  }, []);

  return (
  <div>
    <h2>User List</h2>
    {users.map((user) => (
      <p key={user.id}>{user.name} : {user.phone} </p>
    ))}
  </div>
);
};


export default Get;