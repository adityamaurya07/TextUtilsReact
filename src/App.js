import React, { useState } from "react";
import "./App.css";
import Alert from "./compnets/Alert";
import Navbar from "./compnets/Navbar";
import TextFor from "./compnets/TextFor";

function App() {
  const [Mode, setMode] = useState("light"); //Whrater dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = ' Install TextUtils Now'
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUils - Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={Mode}
        toggleMode={toggleMode}
      />{" "}
      <Alert alert={alert} />
      <div className="container my-3">
        <TextFor
          showAlert={showAlert}
          heading="Enter the  text to analyze below"
          mode={Mode}
        />
      </div>
    </>
  );
}

export default App;
