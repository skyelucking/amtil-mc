// import "../../App.css";
// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import { Container, Table } from "react-bootstrap";
// import { Checkbox } from "@material-ui/core";

// const MissionTools = () => {
//   //SAVES EACH TOOL TO MISSION TOOLS WHEN BOX IS CHECKED //
//   const [tool_id, setTool_ID] = useState("");
//   const [mission_id, setMission_ID] = useState(
//     JSON.parse(window.sessionStorage.getItem("mission")).mission_id
//   );
//   const [tool_check, setToolCheck] = useState([]);
//   const [toolList, setToolList] = useState([]);
//   const [selectedTools, setSelectedTools] = useState([]);


  
//   //GETS MISSION ID FROM SESSION VARIABLE
//   useEffect(() => {
//     const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
//       .mission_id;

//     Axios.get("/tooldetails").then((response) => {
//       const tool_array = response.data.map((tool) => ({
//         ...tool,
//         checked: false,
//       }));
//       setToolList(tool_array);

      

//       Axios.get("/missiontools/" + mission_id).then((response) => {
//         setSelectedTools(response.data);
//         console.log("selectedTools", selectedTools)
        
//       });
     
//     });
//   }, []);

//   //GETS TOOL LIST FOR TOOL CATALOG //
//   const mission_toolslist = (index, tool_array, toolId) => {
//     if (tool_array[index].checked === true) {
//       console.log("mission_id", mission_id, "tool_id", toolId);
//       Axios.post("/missiontools", {
//         tool_id: toolId,
//         mission_id: mission_id,
//       }).then((response) => {
//         console.log(response);
//       });
//     } else {
//       Axios.delete("/missiontools/" + mission_id + "/" + toolId).then(
//         (response) => {
//           console.log(response);
//         }
//       );
//     }
//   };

//   const checkedState = (index, toolId) => {
//     const tempArray = toolList;
//     tempArray[index].checked = !tempArray[index].checked;
//     setToolList(tempArray);
//     mission_toolslist(index, tempArray, toolId);
//   };

//   const tool_remove = () => {
//     console.log("tool remove", mission_id, "tool_id", tool_id);
//     Axios.delete("/missiontools/" + mission_id + "/" + tool_id).then(
//       (response) => {
//         console.log(response);
//       }
//     );
//   };
 

//   return (
//     <>
//       <div>
//         <Container>
//           <h1 className="PageHead">Selected Tools</h1>
//           <div style={{ textAlign: "center" }}></div>
//           <Table bordered hover size="sm">
//             <thead>
//               <tr>
//                 {/* <th>Tool Id</th> */}
//                 <th>Remove Tool</th>
//                 <th>Tool ID</th>
//                 <th>Mission ID</th>
                
//               </tr>
//             </thead>
//             <tbody>
//               {selectedTools.map((data, index) => (
//                 <tr key={data.tool_id}>
//                   <td>
//                    <button onClick={() => {
//               tool_remove(data.tool_id);
//             }}
//             > Remove</button>
//                   </td>
//                   <td>{data.tool_id}</td>
//                   <td>{data.mission_id}</td>
//                   {/* <td>
//                     <img
//                       src={data.tool_img}
//                       style={{ maxWidth: "100px" }}
//                       alt={data.tool_description}
//                     ></img>
//                   </td>
                  
//                   <td>{data.tool_category}</td>
//                   <td style={{ fontSize: ".75em" }}>{data.tool_description}</td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//       <div>
//         <Container>
//           <h1 className="PageHead">Tool Catalog</h1>
//           <div style={{ textAlign: "center" }}></div>
//           <Table bordered hover size="sm">
//             <thead>
//               <tr>
//                 {/* <th>Tool Id</th> */}
//                 <th>Add Tool</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {toolList.map((data, index) => (
//                 <tr key={data.tool_id}>
//                   <td>
//                     <Checkbox
//                       id="ToolCheck"
//                       checked={toolList[index].checked}
//                       onChange={(e) => {
//                         checkedState(index, data.tool_id);
//                         setTool_ID(data.tool_id);
//                       }}
//                       inputProps={{ "aria-label": "primary checkbox" }}
//                     />
//                   </td>
//                   <td>
//                     <img
//                       src={data.tool_img}
//                       style={{ maxWidth: "100px" }}
//                       alt={data.tool_description}
//                     ></img>
//                   </td>
//                   <td>{data.tool_name}</td>
//                   <td>{data.tool_category}</td>
//                   <td style={{ fontSize: ".75em" }}>{data.tool_description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default MissionTools;
