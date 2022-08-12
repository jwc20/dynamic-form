import { useState } from "react";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
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

  return (
    <Container>
      <h1>Add new member</h1>
      <form>
        {inputField.map((inputField, index) => (
          <div key={index}>
            <TextField
              className="text-field-mui"
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
            />
            <TextField
              className="text-field-mui"
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
            />
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        ))}
      </form>
    </Container>
  );
}

export default App;
