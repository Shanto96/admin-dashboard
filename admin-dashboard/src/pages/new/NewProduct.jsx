import React from "react";
import "./new.scss";
import Form from "../../Components/Form/Form";
let inputs = [
  {
    label: "Product Name ",
    type: "text",
    placeholder: "Aser aspire e15",
  },
  {
    label: "Category ",
    type: "text",
    placeholder: "Laptop",
  },
  {
    label: "Color",
    type: "text",
    placeholder: "Black",
  },
  {
    label: "Quantity",
    type: "number",
    placeholder: "5",
  },
  {
    label: "Payment type",
    type: "text",
    placeholder: "Cash on Delivery",
  },
];
function NewProduct() {
  return <Form inputs={inputs} />;
}

export default NewProduct;
