import React from 'react'
import { useState } from 'react'
import './Calculate.css'

function Calculate() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
  
    const handleClick = (value) => {
      setInput(input + value);
    };
  
    const handleClear = () => {
      setInput("");
      setResult("");
    };
  
    const handleEqual = () => {
      try {
        // Use eval to calculate the result, but be aware it's not safe for production use with user input
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    };
  
    return (
      <div className="App">
        <div className="card">

          <div className="out-Screen">
            <input type="text" value={input} readOnly />
            <div className="result">{result}</div>
          </div>
          <div className="numbers"></div>
          <div className="input-buttons">
            <button className="actions" onClick={() => handleClick("1")}>1</button>
            <button className="actions" onClick={() => handleClick("2")}>2</button>
            <button className="actions" onClick={() => handleClick("3")}>3</button>
            <button className="actions" onClick={() => handleClick("+")}>+</button>
            <button className="actions" onClick={() => handleClick("4")}>4</button>
            <button className="actions" onClick={() => handleClick("5")}>5</button>
            <button className="actions" onClick={() => handleClick("6")}>6</button>
            <button className="actions" onClick={() => handleClick("-")}>-</button>
            <button className="actions" onClick={() => handleClick("7")}>7</button>
            <button className="actions" onClick={() => handleClick("8")}>8</button>
            <button className="actions" onClick={() => handleClick("9")}>9</button>
            <button className="actions" onClick={() => handleClick("*")}>*</button>
            <button className="actions" onClick={() => handleClick("0")}>0</button>
            <button className="actions" onClick={() => handleClick(".")}>.</button>
            <button className="actions" onClick={handleEqual}>=</button>
            <button className="actions" onClick={() => handleClick("/")}>/</button>
            <button className="actions" onClick={handleClear}>C</button>
          </div>
        </div>
      </div>
    );

}
  

export default Calculate