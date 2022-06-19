import React from "react";
import "./home.scss";
import Widget from "../../Components/widget/Widget";
function Home() {
  return (
    <div className="home-container d-flex">
      <Widget />
      <Widget />
      <Widget />
      <Widget />
    </div>
  );
}

export default Home;
