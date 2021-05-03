const db = require("../models");
const MissionStoryBoard = require("../models/MissionStoryBoard");

module.exports = function (app) {

  // GETS Storyboards BY MISSION ID BUT NO DETAILS //
  app.get("/getquestions/:mission_id", (req, res) => {
    db.mission_questionlist.findAll({
      where: {
        missionBasicMissionId: req.params.mission_id,
      },
    }).then(function (questionlist) {
      res.json(questionlist);
    });
  });

  //Post to tool_details
  app.post("/postquestions", (req, res) => {
    db.mission_questionlist
      .create({
        q_order: req.body.q_order,
        q_text: req.body.q_text,
        q_ansA: req.body.q_ansA,
        q_ansB: req.body.q_ansB,
        q_ansC: req.body.q_ansC,
        q_ansD: req.body.q_ansD,
        q_ansE: req.body.q_ansE,
        q_ansCorrect: req.body.q_ansCorrect,
        q_position: req.body.q_position,
        q_img: req.body.q_img,
        missionBasicMissionId: req.body.mission_id,

      })
      .then(function (question) {
        res.json(question);
      });
  });

  // app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
};
