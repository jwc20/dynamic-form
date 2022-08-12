import { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import "./App.css";

function App() {
  const [inputFields, setInputFields] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);

  const handleChangeInput = (index, e) => {
    // console.log(index, event.target.name)
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.type);
    console.log(inputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  const handleRemoveFields = () => {};

  return (
    <Container>
      <h1>Add new member</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputFields, index) => (
          <div key={index}>
            <TextField
              className="text-field-mui"
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputFields.firstName}
              onChange={(e) => handleChangeInput(index, e)}
            />
            <TextField
              className="text-field-mui"
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputFields.lastName}
              onChange={(e) => handleChangeInput(index, e)}
            />
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <IconButton onClick={() => handleAddFields()}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </Container>
  );
}

export default App;
