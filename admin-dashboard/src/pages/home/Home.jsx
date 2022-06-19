import React from "react";
import "./home.scss";
import Widget from "../../Components/widget/Widget";
function Home() {
  return (
    <div className="home-container d-flex">
      <Widget type="user" />
      <Widget type="order" />

      <Widget type="revenue" />
      <Widget type="balance" />
    </div>
  );
}

export default Home;
