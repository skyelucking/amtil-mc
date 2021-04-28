const db = require("../models");
const Stage= require("../models/Stage");

module.exports = function (app) {
  ////////  All PATHS FOR STAGES  /////////

// POSTS STAGE INTO mission_stagelist TABLE //
app.post("/missionstage", (req, res) => {
    db.MissionStage
    .create({
    stageDetailStageId: req.body.stage_id,
    missionBasicMissionId: req.body.mission_id,
    })
    .then(function (stage) {
      console.log(stage);
      res.json(stage);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

// GETS STAGE BY MISSION ID BUT NO STAGE DETAILS //
app.get("/missionstageAll/:mission_id", (req, res) => {
    db.MissionStage
      .findAll({
        where: {
          missionBasicMissionId: req.params.mission_id,
        },
      })
      .then(function (selectedStage) {
        res.json(selectedStage);
      });
  });

  // DELETES STAGE FROM mission_stagelist TABLE //
  app.delete("/deletestage/:mission_id/:stage_id", (req, res) => {
    db.MissionStage
      .destroy({
        where: {
          stageDetailStageId: req.params.stage_id,
          missionBasicMissionId: req.params.mission_id,
        },
      })
      .then(function (stage) {
        console.log(stage);
        res.json(stage);
      });
  });

  // GETS STAGE BY MISSION ID WITH STAGE DETAILS //
  app.get("/stagedetails/:mission_id", (req, res) => {
    db.mission_basics
      .findOne({
        include: db.stage_details,
        where: {
          mission_id: req.params.mission_id,
        },
      })
      .then(function (stage) {
        res.json(stage);
      });
  });

 // GETS STAGE DETAILS FOR CATALOG //
  app.get("/stagedetails", (req, res) => {
    db.stage_details.findAll({}).then(function (stage_details) {
      res.json(stage_details);
    });
  });

 // POSTS STAGE DETAILS INTO CATALOG //
  app.post("/stagedetails", (req, res) => {
    db.stage_details
      .create({
        stage_name: req.body.stage_name,
        stage_desc: req.body.stage_desc,
        stage_img: req.body.stage_img,
      })
      .then(function (stage_details) {
        res.json(stage_details);
      });
  });

};

