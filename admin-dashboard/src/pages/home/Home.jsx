import React from "react";
import "./home.scss";
import Widget from "../../Components/widget/Widget";
import ProgressBar from "../../Components/progressBar/ProgressBar";
import Chart from "../../Components/chart/Chart";
import HomeTable from "../../Components/home-table/Table";
function Home() {
  return (
    <>
      <div className="home-container d-flex">
        <Widget type="user" />
        <Widget type="order" />

        <Widget type="revenue" />
        <Widget type="balance" />
      </div>
      <div className="d-flex home-info-container">
        <ProgressBar />
        <Chart title="Monthly Business Analysis" />
      </div>
      <div className="table-container">
        <HomeTable title="Latest Sales update" />
      </div>
    </>
  );
}

export default Home;
