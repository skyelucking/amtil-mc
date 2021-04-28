import React from "react";
import "../App.css";

import ShowBasics from "../pages/Mission/ShowBasics";
import ShowSelectedTools from "../pages/Tools/ShowSelectedTools";
import ShowEquip from "../pages/Equipment/ShowEquip";
import ShowStage from "../pages/Stage/StageDetails";
import ShowTools from "../pages/Tools/ShowTools";
import ShowUsers from "./ShowUsers";
import ShowSelectedEquip from "../pages/Equipment/ShowSelectedEquip";

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
      <ShowSelectedTools />
      <ShowSelectedEquip />
    </div>
  );
}

export default AllTables;
