import { useState } from "react";
import { useZafClient } from "../utils/zafClient";
import { deleteUser } from "../pages/api/requests";
import styled from "styled-components";

const StyledHeading = styled.h2 `
  text-align: center;
  color: #58466C;
  
`

const StyledForm = styled.form`
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 200px;
  text-align: left;

`

const StyledLabel = styled.label `
  padding: 10px 0;
`

const deleteForm = {
  email: "",
};

export default function Delete() {
  const [deleteField, setDeleteField] = useState(deleteForm);
  const client = useZafClient();

  // initiate DELETE user request
  const requestDelete = (client) => {
    client.request(deleteUser).then(
      function (data) {
        console.log(data);
        alert("user has been deleted");
      },
      function (response) {
        console.log(response);
        alert("unable to delete user");
      }
    );
  };

  // handle form input
  const handleChanges = (event) => {
    setDeleteField({
      ...deleteField,
      [event.target.name]: event.target.value,
    });
  };

  // on submit for delete
  const handleDelete = (event) => {
    event.preventDefault();
    requestDelete(deleteField);
  };

  return (
    <div>
      <StyledHeading>Delete User</StyledHeading>
      <StyledForm onSubmit={handleDelete}>
        <StyledLabel>
          email:
          <input
            type="text"
            name="email"
            value={deleteField.email}
            onChange={handleChanges}
          />
        </StyledLabel>
        <button>Delete</button>
      </StyledForm>
    </div>
  );
}
