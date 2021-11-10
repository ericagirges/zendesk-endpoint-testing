import { useState } from "react";
import { useZafClient } from "../utils/zafClient";
import { getUsers } from "../pages/api/requests";
import styled from "styled-components";

const StyledHeading = styled.h2 `
  text-align: center;
  color: #58466C;

`

const StyledContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

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

  return (
    <StyledContainer>
      <StyledHeading>User List</StyledHeading>
      <button onClick={getAllUsers}>Get Users</button>
      {userData.map((user) => {
        <div key={user.id}>
          <p>{user.email}</p>
        </div>
      })}
    </StyledContainer>
      
  )}