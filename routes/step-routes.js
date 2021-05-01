const db = require("../models");
const MissionStep = require("../models/MissionStep");

module.exports = function (app) {

  // GETS STEPS BY MISSION ID  //
  app.get("/getsteps/:mission_id", (req, res) => {
    db.mission_stepslist.findAll({
      where: {
        missionBasicMissionId: req.params.mission_id,
      },
    }).then(function (steps) {
      res.json(steps);
    });
  });

   
    //Get from step_details
  app.get("/stepdetails", (req, res) => {
    db.mission_stepslist.findAll({}).then(function (step) {
      res.json(step);
    });
  });

  //Post to step_details
  app.post("/poststeps", (req, res) => {
    db.mission_stepslist
      .create({
        step_order: req.body.step_order,
        step_text: req.body.step_text,
         step_img: req.body. step_img,
        missionBasicMissionId: req.body.mission_id,
      })
      .then(function (panel) {
        res.json(panel);
      });
  });

  // app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
};
