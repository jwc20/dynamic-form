import { useState } from "react";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField"

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
              name="firstName" 
              label="First Name"
              value={inputField.firstName}
            />
          </div>
        ))}
      </form>
    </Container>
  );
}

export default App;
