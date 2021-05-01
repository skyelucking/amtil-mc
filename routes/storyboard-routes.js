const db = require("../models");
const MissionStoryBoard = require("../models/MissionStoryBoard");

module.exports = function (app) {

  // GETS Storyboards BY MISSION ID BUT NO DETAILS //
  app.get("/getstoryboards/:mission_id", (req, res) => {
    db.mission_storyboard.findAll({
      where: {
        missionBasicMissionId: req.params.mission_id,
      },
    }).then(function (storyboards) {
      res.json(stoaryboards);
    });
  });

    app.get("/b_storyboards/:mission_id", (req, res) => {
    db.mission_storyboard
      .findAll({
         where: {
          missionBasicMissionId: req.params.mission_id,
        },
      })
      .then(function (basics) {
        res.json(basics);
      });
  });

 
    //Get from tool_details
  app.get("/sdetails", (req, res) => {
    db.mission_storyboard.findAll({}).then(function (storyboard) {
      res.json(storyboard);
    });
  });

  //Post to tool_details
  app.post("/poststoryboards", (req, res) => {
    db.mission_storyboard
      .create({
        panel_order: req.body.panel_order,
        panel_notes: req.body.panel_notes,
        color_and_style: req.body.color_and_style,
        panel_img: req.body.panel_img,
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
