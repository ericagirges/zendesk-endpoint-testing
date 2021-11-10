import { useState, useEffect } from "react";
import { useZafClient } from "../utils/zafClient";
import { createUser } from "../pages/api/requests";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 280px;
  text-align: left;

`

const StyledLabel = styled.label `
  padding: 10px 0;

`

const StyledHeading = styled.h2 `
  text-align: center;
  color: #58466C;
  
`

const registerForm = {
  email: "",
  first_name: "",
  last_name: "",
  passowrd: "",
};

export default function Register() {
  const [formFields, setFormFields] = useState(registerForm);
  const client = useZafClient();

  // initiate POST request for register
  const registerUser = (client) => {
    client.request(createUser).then(
      function (data) {
        console.log(data);
        alert("user has been registered");
      },
      function (response) {
        console.log(response);
        alert("unable to register user");
      }
    );
  };

  // handle form input
  const handleChanges = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  // on submit for register
  const handleRegister = (event) => {
    event.preventDefault();
    registerUser(formFields);
  };

  return (
    <div>
      <StyledHeading>Register a New User</StyledHeading>
      <StyledForm onSubmit={handleRegister}>
        <StyledLabel>
          email:
          <input
            type="text"
            name="email"
            value={formFields.email}
            onChange={handleChanges}
          />
        </StyledLabel>
        <StyledLabel>
          first name:
          <input
            type="text"
            name="first_name"
            value={formFields.first_name}
            onChange={handleChanges}
          />
        </StyledLabel>
        <StyledLabel>
          last name:
          <input
            type="text"
            name="last_name"
            value={formFields.last_name}
            onChange={handleChanges}
          />
        </StyledLabel>
        <StyledLabel>
          password:
          <input
            type="text"
            name="password"
            value={formFields.password}
            onChange={handleChanges}
          />
        </StyledLabel>
        <button>Submit</button>
      </StyledForm>
    </div>
  );
}
