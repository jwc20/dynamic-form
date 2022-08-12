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
  const [inputField, setInputField] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);

  const handleChangeInput = (index, e) => {
    // console.log(index, event.target.name)
    const values = [...inputField]
    values[index][e.target.name] = e.target.value
    setInputField(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.type)
    console.log(inputField)
  }

  return (
    <Container>
      <h1>Add new member</h1>
      <form onSubmit={handleSubmit}>
        {inputField.map((inputField, index) => (
          <div key={index}>
            <TextField
              className="text-field-mui"
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
              onChange={(e) => handleChangeInput(index, e)}
            />
            <TextField
              className="text-field-mui"
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
              onChange={(e) => handleChangeInput(index, e)}
            />
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <IconButton>
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
