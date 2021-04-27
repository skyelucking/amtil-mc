// Requiring our models and passport as we've configured it
const db = require("../models");
const Tool = require("../models/Tool");

module.exports = function (app) {
 
 ////////  All PATHS FOR TOOLS   /////////

 // GETS BASICS INFO BY MISSION ID WITH TOOL DETAILS INCLUDE //
//  app.get("/missiontools/:mission_id", (req, res) => {
//   db.mission_basics
//     .findOne({
//       include: db.tool_details, 
//        where: {
//         mission_id: req.params.mission_id,
//       },
//     })
//     .then(function (m_basics) {
//       res.json(m_basics);
//     });
// });
 
 // GETS TOOLS BY MISSION ID BUT NO DETAILS //
  app.get("/missiontoolsAll/:mission_id", (req, res) => {
    db.MissionTool
      .findAll({
        where: {
          missionBasicMissionId: req.params.mission_id,
        },
      })
      .then(function (selectedTools) {
        res.json(selectedTools);
      });
  });

  // POSTS TOOLS INTO mission_toolslist TABLE //
  app.post("/missiontools", (req, res) => {
      db.MissionTool
      .create({
        toolDetailToolId: req.body.tool_id,
        missionBasicMissionId: req.body.mission_id,
      })
      .then(function (m_toolslist) {
        console.log(m_toolslist);
        res.json(m_toolslist);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  });

  // DELETES TOOLS FROM mission_toolslist TABLE //
  app.delete("/missiontools/:mission_id/:tool_id", (req, res) => {
    db.MissionTool
      .destroy({
        where: {
          toolDetailToolId: req.params.tool_id,
          missionBasicMissionId: req.params.mission_id,
        },
      })
      .then(function (m_toolslist) {
        console.log(m_toolslist);
        res.json(m_toolslist);
      });
  });



   ////////  All PATHS FOR EQUIPMENT   /////////

   // GETS BASICS INFO BY MISSION ID WITH EQUIPMENT DETAILS INCLUDE //
 app.get("/missionequip/:mission_id", (req, res) => {
  db.mission_basics
    .findOne({
      include: db.equipment_details, 
       where: {
        mission_id: req.params.mission_id,
      },
    })
    .then(function (m_basics) {
      res.json(m_basics);
    });
});

   app.get("/equipdetails", (req, res) => {
    db.equipment_details.findAll({}).then(function (equipment_details) {
      res.json(equipment_details);
    });
  });

  //Post to equipment_details
  app.post("/equipdetails", (req, res) => {
    db.equipment_details
      .create({
        equip_name: req.body.equip_name,
        equip_category: req.body.equip_category,
        equip_description: req.body.equip_description,
        equip_img: req.body.equip_img,
      })
      .then(function (equipment_details) {
        res.json(equipment_details);
      });
  });


 
  ////////Paths for mission_basics /////////

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

  //Get from mission_basics
  app.get("/basics", (req, res) => {
    // console.log(db);
    db.mission_basics.findAll({}).then(function (m_basics) {
      res.json(m_basics);
    });
  });

  //Post to mission_basics
  app.post("/basics", (req, res) => {
    db.mission_basics
      .create({
        status: req.body.status,
        name: req.body.name,
        category: req.body.category,
        summary: req.body.summary,
        notes: req.body.notes,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        cover_img: req.body.cover_img,
        description: req.body.description,
      })
      .then(function (m_basics) {
        console.log(m_basics);
        res.json(m_basics);
      });
  });

 

  ////////Paths for registration to users table /////////

  //Get from users
  app.get("/register", (req, res) => {
    db.User.findAll({}).then(function (users) {
      res.json(users);
    });
  });

  app.post("/login", (req, res) => {
    console.log(req.body);
    db.User.findOne({
      username: req.body.username,
    }).then(function (user) {
      if (user) {
        const response = user.validPassword(req.body.password);
        if (response) {
          res.json(user);
        } else {
          res.send({ message: "Wrong username/password combination!" });
        }
      } else {
        res.send({ message: "User doesn't exist" });
      }
      console.log(user);
    });
  });

  //Post to users
  app.post("/register", (req, res) => {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      fName: req.body.fName,
      lName: req.body.lName,
      title: req.body.title,
      email: req.body.email,
    }).then(function (users) {
      // console.log(users);
      res.json(users);
    });
  });

  ////////Paths for equipment_details table /////////
 
 

  ////////Paths for tool_details table /////////
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

  ////////Paths for stage_details table /////////
  //Get from stage_details
  app.get("/stagedetails", (req, res) => {
    db.stage_details.findAll({}).then(function (stage_details) {
      res.json(stage_details);
    });
  });

  //Post to stage_details
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


// app.get("*", function(req, res) {
// res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
