// Requiring our models and passport as we've configured it
const db = require("../models");
const Tool = require("../models/Tool");
const Stage= require("../models/Stage");

module.exports = function (app) {
  ////////  All PATHS FOR TOOLS   /////////

  // GETS BASICS INFO BY MISSION ID WITH TOOL DETAILS INCLUDE //
  app.get("/missiontools/:mission_id", (req, res) => {
    db.mission_basics
      .findOne({
        include: db.tool_details,
        where: {
          mission_id: req.params.mission_id,
        },
      })
      .then(function (m_basics) {
        res.json(m_basics);
      });
  });


// GETS BASICS INFO BY MISSION ID WITH TOOL DETAILS INCLUDE //
app.get("/missionstages/:mission_id", (req, res) => {
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

};
