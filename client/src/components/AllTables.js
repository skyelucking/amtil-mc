import React from "react";
import "../App.css";

import ShowBasics from "../pages/Mission/ShowBasics";
import ShowEquip from "./ShowEquip";
import ShowStage from "./ShowStage";
import ShowTools from "../pages/Tools/ShowTools";
import ShowUsers from "./ShowUsers";

function AllTables() {
  return (
    <div>
      <div style={{ textAlign: "center", color: "red", margin: 15 }}>
        <b>Elements that Go Into A Mission (Feeds Select and Input Menus)</b>
      </div>
      <ShowUsers />
      <ShowEquip />
      <ShowTools />
      <ShowStage />

      <div style={{ textAlign: "center", color: "red", margin: 15 }}>
        <b>Mission Specific Items (Tied by the mission_id param)</b>
      </div>
      <ShowBasics />
    </div>
  );
}

export default AllTables;
