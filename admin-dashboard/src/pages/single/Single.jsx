import React from "react";
import "./single.scss";
import Chart from "../../Components/chart/Chart";
import HomeTable from "../../Components/home-table/Table";
function Single() {
  return (
    <>
      <div className="d-flex single-container">
        <div className="user-card ">
          <span className="edit-btn">Edit</span>
          <div className="title">Information</div>
          <div className="user-info d-flex">
            <div className="image-container">
              <img
                src="https://i.pravatar.cc/300"
                alt="user-img"
                className="user-img-single"
              />
            </div>
            <div className="info-container">
              <h2>John Doe</h2>
              <div className="info-item">
                <span className="itemKey"> Email :</span>
                <span className="itemVale">john@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="itemKey"> Phone :</span>
                <span className="itemVale">123456798</span>
              </div>
              <div className="info-item">
                <span className="itemKey"> Address :</span>
                <span className="itemVale">
                  {" "}
                  30 The Pantiles,Grantham,England United Kingdom
                </span>
              </div>
              <div className="info-item">
                <span className="itemKey">Country: </span>
                <span className="itemVale">UK</span>
              </div>
            </div>
          </div>
        </div>

        <Chart title="Monthly Activity" />
      </div>
      <div className="user-card">
        <HomeTable title="Recent Purchases" />
      </div>
    </>
  );
}

export default Single;
