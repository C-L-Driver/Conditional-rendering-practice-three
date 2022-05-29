import React from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";

var userIsRegistered = false;

function App() {
  return userIsRegistered === true ? (
    <div className="container">
      <Form1 />{" "}
    </div>
  ) : (
    <div className="container">
      <Form2 />{" "}
    </div>
  );
}

export default App;

// <h1>Please Register, confirm password etc</h1>
{
  /* <h1>You are already registered</h1> */
}

//   type= "text"
//   placeholder="Username"
