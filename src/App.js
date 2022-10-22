import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input.concat(value));
  };
  
  const handleResult = () => {
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="main">
      <div className="calc">
        <input type="text" placeholder="0" className="input" value={input} />
        <button onClick={() => handleClick("+")} className="add">
          {" "}
          +{" "}
        </button>
        <button onClick={() => handleClick("-")} className="sub">
          {" "}
          -{" "}
        </button>
        <button onClick={() => handleClick("*")} className="mul">
          {" "}
          *{" "}
        </button>
        <button onClick={() => handleClick("/")} className="div">
          {" "}
          /{" "}
        </button>
        <button onClick={() => handleClick("7")} className="seven">
          {" "}
          7{" "}
        </button>
        <button onClick={() => handleClick("8")} className="eight">
          {" "}
          8{" "}
        </button>
        <button onClick={() => handleClick("9")} className="nine">
          {" "}
          9{" "}
        </button>
        <button onClick={() => handleResult()} className="result">
          {" "}
          ={" "}
        </button>
        <button onClick={() => handleClick("4")} className="four">
          {" "}
          4{" "}
        </button>
        <button onClick={() => handleClick("5")} className="five">
          {" "}
          5{" "}
        </button>
        <button onClick={() => handleClick("6")} className="six">
          {" "}
          6{" "}
        </button>
        <button onClick={() => handleClick("1")} className="one">
          {" "}
          1{" "}
        </button>
        <button onClick={() => handleClick("2")} className="two">
          {" "}
          2{" "}
        </button>
        <button onClick={() => handleClick("3")} className="three">
          {" "}
          3{" "}
        </button>
        <button onClick={() => handleClick("0")} className="zero">
          {" "}
          0{" "}
        </button>
        <button onClick={() => handleClick(".")} className="decimal">
          {" "}
          .{" "}
        </button>
        <button onClick={() => handleClear()} className="clear">
          {" "}
          C{" "}
        </button>
      </div>
    </div>
  );
};

export default App;
