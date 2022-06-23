import React from "react";
import "./form.scss";
import { MdOutlineImageNotSupported, MdUploadFile } from "react-icons/md";
function Form({ inputs }) {
  return (
    <div className="d-flex form-container">
      <div className="left">
        <MdOutlineImageNotSupported size={105} style={{ color: "lightgrey" }} />
      </div>
      <div className="right">
        <form action="">
          <div className="single-input">
            <label htmlFor="image">
              Upload Image <MdUploadFile size={24} style={{ color: "grey" }} />
            </label>
            <input type="file" id="image" style={{ display: "none" }} />
          </div>
          {inputs.map((input) => (
            <div className="single-input">
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder} />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Form;
