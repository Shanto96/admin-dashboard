import React, { useState } from "react";
import "./form.scss";
import { MdOutlineImageNotSupported, MdUploadFile } from "react-icons/md";
function Form({ inputs }) {
  const [file, setFile] = useState(null);
  return (
    <>
      <div className="form-title-container">
        <span className="title">Add new user</span>
      </div>
      <div className="d-flex form-container">
        <div className="left">
          {file == null ? (
            <>
              {" "}
              <MdOutlineImageNotSupported
                size={105}
                style={{ color: "lightgrey" }}
              />
              <span style={{ color: "lightgrey" }}>No Image Uploaded</span>
            </>
          ) : (
            <img src={URL.createObjectURL(file)} className="image" alt="" />
          )}
        </div>
        <div className="right">
          <form action="">
            <div className="single-input file">
              <label htmlFor="image">
                Upload Image{" "}
                <MdUploadFile
                  size={24}
                  style={{ color: "grey", display: "inline-block" }}
                />
              </label>
              <input
                type="file"
                id="image"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {inputs.map((input) => (
              <div className="single-input">
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <div className="single-input">
              <span className="submit-btn">Send</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
