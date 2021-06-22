const db = require("../models");
const GeneralDefinition= require("../models/GeneralDefinition");

module.exports = function (app) {
  ////////  All PATHS FOR STAGES  /////////

// POSTS GeneralDefinition INTO mission_equiplist TABLE //
// app.post("/equipdetails", (req, res) => {
//     db.general_definitions
//       .create({
//         equip_name: req.body.equip_name,
//         equip_category: req.body.equip_category,
//         equip_description: req.body.equip_description,
//         equip_img: req.body.equip_img,
//       })
//       .then(function (equipment) {
//         res.json(equipment);
//       });
//   });

  // POSTS STAGE INTO mission_stagelist TABLE //
// app.post("/addequip", (req, res) => {
//     db.mission_equiplist
//     .create({
//     equipmentDetailEquipId: req.body.equip_id,
//     missionBasicMissionId: req.body.mission_id,
//     })
//     .then(function (equipment) {
//       console.log(equipment);
//       res.json(equipment);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     })
// });


  // DELETES GeneralDefinition FROM mission_equiplist TABLE //
  // app.delete("/deleteequip/:mission_id/:equip_id", (req, res) => {
  //   db.mission_equiplist
  //     .destroy({
  //       where: {
  //       equipmentDetailEquipId: req.params.equip_id,
  //       missionBasicMissionId: req.params.mission_id,
  //       },
  //     })
  //     .then(function (equipment) {
  //       console.log(equipment);
  //       res.json(equipment);
  //     });
  // });

  // GETS STAGE BY MISSION ID WITH STAGE DETAILS //
  // app.get("/missionequip/:mission_id", (req, res) => {
  //   db.mission_basics
  //     .findOne({
  //       include: db.general_definitions, 
  //        where: {
  //         mission_id: req.params.mission_id,
  //       },
  //     })
  //     .then(function (m_basics) {
  //       res.json(m_basics);
  //     });
  // });

 // GETS STAGE DETAILS FOR CATALOG //
 app.get("/generaldefinitions", (req, res) => {
    db.general_definitions.findAll({}).then(function (general_definitions) {
      res.json(general_definitions);
    });
  });

  
 // POSTS STAGE DETAILS INTO CATALOG //
  // app.post("/stagedetails", (req, res) => {
  //   db.stage_details
  //     .create({
  //       stage_name: req.body.stage_name,
  //       stage_desc: req.body.stage_desc,
  //       stage_img: req.body.stage_img,
  //     })
  //     .then(function (stage_details) {
  //       res.json(stage_details);
  //     });
  // });

};

