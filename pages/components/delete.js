import { useState } from "react";
import { useZafClient } from "../../utils/zafClient";
import { deleteUser } from "../api/requests";

const deleteForm = {
    email: ""
}

export default Delete() {
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
        <h2>Delete User</h2>
        <form onSubmit={handleDelete}>
            <label>
                email: 
                <input
                    type="text"
                    name="email"
                    value={deleteField.email}
                    onChange={handleChanges}
                />
            </label>
        </form>
        </div>
    )
}