const db = require("../models");
const Tool = require("../models/Tool");

module.exports = function (app) {

  // GETS TOOLS BY MISSION ID BUT NO DETAILS //
  app.get("/missiontoolsAll/:mission_id", (req, res) => {
    db.MissionTool.findAll({
      where: {
        missionBasicMissionId: req.params.mission_id,
      },
    }).then(function (selectedTools) {
      res.json(selectedTools);
    });
  });

  // POSTS TOOLS INTO mission_toolslist TABLE //
  app.post("/missiontools", (req, res) => {
    db.MissionTool.create({
      toolDetailToolId: req.body.tool_id,
      missionBasicMissionId: req.body.mission_id,
    })
      .then(function (m_toolslist) {
        console.log(m_toolslist);
        res.json(m_toolslist);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

  // DELETES TOOLS FROM mission_toolslist TABLE //
  app.delete("/missiontools/:mission_id/:tool_id", (req, res) => {
    db.MissionTool.destroy({
      where: {
        toolDetailToolId: req.params.tool_id,
        missionBasicMissionId: req.params.mission_id,
      },
    }).then(function (m_toolslist) {
      console.log(m_toolslist);
      res.json(m_toolslist);
    });
  });

  ////////Basics Connected to Tools /////////

  app.get("/basics/:mission_id", (req, res) => {
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

 
    //Get from tool_details
  app.get("/tooldetails", (req, res) => {
    db.tool_details.findAll({}).then(function (tool_details) {
      res.json(tool_details);
    });
  });

  //Post to tool_details
  app.post("/tooldetails", (req, res) => {
    db.tool_details
      .create({
        tool_name: req.body.tool_name,
        tool_category: req.body.tool_category,
        tool_description: req.body.tool_description,
        tool_img: req.body.tool_img,
      })
      .then(function (tool_details) {
        res.json(tool_details);
      });
  });

  // app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
};
