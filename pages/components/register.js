import { useState, useEffect } from "react";
import { useZafClient } from "../../utils/zafClient";
import { createUser } from "../api/requests";

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
      <h2>Register a New User</h2>
      <form onSubmit={handleRegister}>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={formFields.email}
            onChange={handleChanges}
          />
        </label>
        <label>
          first name:
          <input
            type="text"
            name="first_name"
            value={formFields.first_name}
            onChange={handleChanges}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="last_name"
            value={formFields.last_name}
            onChange={handleChanges}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="password"
            value={formFields.password}
            onChange={handleChanges}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}