import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./userSource";
import "./dataTable.scss";
const actionColumns = [
  {
    field: "action",
    headerName: "Action",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithAction">
          <span className="view">View</span>
          <span className="delete">Delete</span>
        </div>
      );
    },
  },
];
function Datatable() {
  return (
    <div className="datatable-container">
      <span className="title"> All users list</span>
      <div style={{ height: 400 }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumns)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          className="tableCell"
        />
      </div>
    </div>
  );
}

export default Datatable;
