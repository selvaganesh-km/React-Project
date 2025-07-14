import React from 'react';
import "./index.css";
interface InputsProps {
    label: string;
    icon: string;
  }
  
function Inputs({ label, icon }: InputsProps) {
  const baseDelay = 50;
  return (
    <>
      <div className="inputForm-control mt-4">
        <input type="text" required />
        <label>
          <span style={{ transitionDelay: "0ms", marginRight: "5px" }}>
            <i className={icon}></i>
          </span>
          {label.split("").map((char, index) => (
            <span
              key={index}
              style={{ transitionDelay: `${index * baseDelay}ms` }}
            >
              {char}
            </span>
          ))}
        </label>
      </div>
    </>
  );
}
function InputsOne({ label, icon }: InputsProps) {
    return (
      <div>
        <div className="inputForm-container">
          <input id="input" type="text" required />
          <label className="label" htmlFor="input"> <i className={icon}></i> {label}</label>
          <div className="underline"></div>
        </div>
      </div>
    );
  }
  
export default Inputs;
export { InputsOne };


