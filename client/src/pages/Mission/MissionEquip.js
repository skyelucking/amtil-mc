import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import ShowBasicsEquip from "./ShowBasicsEquip";

const MissionEquip = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [equipList, setEquipList] = useState([]);
  const [equip_id, setEquipID] = useState("");

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;

    Axios.get("/equipdetails").then((response) => {
      const equip_array = response.data.map((equip) => ({
        ...equip,
        checked: false,
      }));
      setEquipList(equip_array);
    });

    // Axios.get("/basics/" + mission_id).then((response) => {
    //   // console.log("basics", response.data);
    //   setEquipBox(response);
    // });
    // setEquipBox([1 ,2 ,3]);
    // console.log("equip_box:", equip_box);
  }, []);

  //GETS TOOL LIST FOR TOOL CATALOG //

  //SAVES EACH TOOL TO MISSION TOOLS WHEN BOX IS CHECKED //
  // const mission_equipbox = () => {
  //   Axios.get("/basics/" + mission_id)
  //     .then((response) => {
  //       console.log("basics", response.data);
  //     })
  //     .then((response) => {
  //       // console.log(response);
  //       setEquipBox(response);
  //     });
  // };

  const mission_equiplist = (index, equip_array, equipId) => {
    if (equip_array[index].checked === true) {
      console.log("mission_id", mission_id, "equip_id", equipId);
      Axios.post("/missionequip", {
        equip_id: equipId,
        mission_id: mission_id,
      }).then((response) => {
        console.log(response);
      });
    } else {
      Axios.delete("/missionequip/" + mission_id + "/" + equipId).then(
        (response) => {
          console.log(response);
        }
      );
    }
  };

  const checkedState = (index, equipId) => {
    const tempArray = equipList;
    tempArray[index].checked = !tempArray[index].checked;
    setEquipList(tempArray);
    mission_equiplist(index, tempArray, equipId);
    console.log("Equip list", equipList);
  };

  return (
    <div>
      <Container>
        <ShowBasicsEquip />

        
        <h1 className="PageHead">Equip Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              {/* <th>Tool Id</th> */}
              <th>Add Equip</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {equipList.map((data, index) => (
              <tr key={data.equip_id}>
                <td>
                  <Checkbox
                    id="EquipCheck"
                    checked={equipList[index].checked}
                    onChange={(e) => {
                      checkedState(index, data.equip_id);
                      setEquipID(data.equip_id);
                    }}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </td>
                <td>
                  <img
                    src={data.equip_img}
                    style={{ maxWidth: "100px" }}
                    alt={data.equip_description}
                  ></img>
                </td>
                <td>{data.equip_name}</td>
                <td>{data.equip_category}</td>
                <td style={{ fontSize: ".75em" }}>{data.equip_description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MissionEquip;