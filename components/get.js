import { useState } from "react";
import { useZafClient } from "../utils/zafClient";
import { getUsers } from "../pages/api/requests";

const allUsers = [];

export default function Get() {
    const [userData, setUserData] = useState(allUsers)
    const client = useZafClient();

      // initiate GET request
  const getAllUsers = (client) => {
    client.request(getUsers).then(
      function (data) {
        console.log(data);
        setUserData(data)
      },
      function (response) {
        console.log(response);
        alert("unable to get users");
      }
    );
  };

  // let toggleMe = "hide"
  // // show or hide
  // const toggleResults = () => {
  //   if(userData != []) {
  //     toggleMe = "show"
  //   }
  // }

  return (
    <div>
      <button onClick={getAllUsers}>Get Users</button>
      {userData.map((user) => {
        <div key={user.id}>
          <p>{user.email}</p>
        </div>
      })}
    </div>
      
  )}