const db = require("../models");
const Team = require("../models/Team");

module.exports = function (app) {
  ////////  All PATHS FOR TEAMS  /////////

// POSTS Team Member  INTO team_details TABLE //
app.post("/teamdetails", (req, res) => {
    db.team_details
      .create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        title: req.body.title,
        department: req.body.department,
        avatar: req.body.avatar,
      })
      .then(function (team) {
        res.json(team);
      });
  });

   // GETS TEAM  DETAILS FOR ROSTER //
 app.get("/teamdetails", (req, res) => {
    db.team_details.findAll({}).then(function (team_details) {
      res.json(team_details);
    });
  });

   // POSTS TEAM MEMBER INTO mission_team TABLE //
app.post("/addteam", (req, res) => {
    db.mission_team
    .create({
        teamDetailMemberId: req.body.member_id,
    missionBasicMissionId: req.body.mission_id,
    })
    .then(function (team) {
      console.log(team);
      res.json(team);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

   // Get TEAM MEMBERS By MissionID with Details //
app.get("/getteam/:mission_id", (req, res) => {
    db.mission_basics
      .findOne({
        include: db.team_details, 
         where: {
          mission_id: req.params.mission_id,
        },
      })
      .then(function (m_basics) {
        res.json(m_basics);
      });
  });

  // DELETES Team Member FROM mission_team TABLE //
  app.delete("/deleteteam/:mission_id/:member_id", (req, res) => {
    db.mission_team
      .destroy({
        where: {
          teamDetailMemberId: req.params.member_id,
          missionBasicMissionId: req.params.mission_id,
        },
      })
      .then(function (team) {
        console.log(team);
        res.json(team);
      });
  });

}