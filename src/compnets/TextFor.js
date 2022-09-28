import React, { useState } from "react";

export default function TextFor(props) {
  const handleUpClicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowClicked = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClrClicked = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear to text", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  //copy text from textarea
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();

    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is Copy", "success");
  };
  //Handle exra spece
  const handleExraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Clear Extra Scace", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          placeholder="Enter text here..."
          id="myBox"
          rows="5"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        ></textarea>
        <button
          className="btn btn-primary my-3 my-1"
          onClick={handleUpClicked}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowClicked}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClrClicked}
          disabled={text.length === 0}
        >
          Clear Text
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Priview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above preview it here"}
        </p>
      </div>
    </>
  );
}
