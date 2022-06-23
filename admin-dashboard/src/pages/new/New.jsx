import React from "react";
import "./new.scss";
import Form from "../../Components/Form/Form";
let inputs = [
  {
    label: "First Name ",
    type: "text",
    placeholder: "John",
  },
  {
    label: "Last Name ",
    type: "text",
    placeholder: "Doe",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "example@mail.com",
  },
  {
    label: "Phone ",
    type: "number",
    placeholder: "+12352498798415",
  },
  {
    label: "Address",
    type: "text",
    placeholder: "152 south lane, Liverpool, Uk",
  },
  {
    label: "Password ",
    type: "password",
    placeholder: "",
  },
  {
    label: "Confirm Password ",
    type: "password",
    placeholder: "",
  },
];
function New() {
  return <Form inputs={inputs} />;
}

export default New;
