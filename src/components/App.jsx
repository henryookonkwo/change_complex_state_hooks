import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  // const [lName, setLName] = useState("");

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    //used destructure to reduce code

    const { value, name } = event.target;

    // console.log(newValue);
    // console.log(inputName);

    setFullName((prevValue) => {
      // console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName} //Controlled component
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName} //Controlled component
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
