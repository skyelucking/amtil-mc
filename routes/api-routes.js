// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function (app) {
  ////////Paths for mission_basics /////////
  //Get from mission_basics
  app.get("/basics", (req, res) => {
    // console.log(db);
    db.mission_basics.findAll({}).then(function (m_basics) {
      res.json(m_basics);
    });
  });

  //Post to mission_basics
  app.post("/basics", (req, res) => {
    console.log(req);
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
    db.users.findAll({}).then(function (users) {
      res.json(users);
    });
  });

  //Post to users
  app.post("/register", (req, res) => {
    console.log(req);
    db.users
      .create({
        username: req.body.username,
        password: req.body.password,
        fName: req.body.fName,
        lName: req.body.lName,
        title: req.body.title,
        email: req.body.email,
      })
      .then(function (users) {
        console.log(users);
        res.json(users);
      });
  });

  ////////Paths for equipment_details table /////////
  //Get from equipment_details
  app.get("/equipdetails", (req, res) => {
    db.equipment_details.findAll({}).then(function (equipment_details) {
      res.json(equipment_details);
    });
  });

  //Post to equipment_details
  app.post("/equipdetails", (req, res) => {
    console.log(req);
    db.equipment_details
      .create({
        equip_name: req.body.equip_name,
        equip_category: req.body.equip_category,
        equip_description: req.body.equip_description,
        equip_img: req.body.equip_img,
      })
      .then(function (equipment_details) {
        console.log(equipment_details);
        res.json(equipment_details);
      });
  });

  ////////Paths for tool_details table /////////
  //Get from tool_details
  app.get("/tooldetails", (req, res) => {
    db.tool_details.findAll({}).then(function (tool_details) {
      res.json(tool_details);
    });
  });

  //Post to tool_details
  app.post("/tooldetails", (req, res) => {
    console.log(req);
    db.tool_details
      .create({
        tool_name: req.body.tool_name,
        tool_category: req.body.tool_category,
        tool_description: req.body.tool_description,
        tool_img: req.body.tool_img,
      })
      .then(function (tool_details) {
        console.log(tool_details);
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
    console.log(req);
    db.stage_details
      .create({
        stage_name: req.body.stage_name,
        stage_desc: req.body.stage_desc,
        stage_img: req.body.stage_img,
      })
      .then(function (stage_details) {
        console.log(stage_details);
        res.json(stage_details);
      });
  });
};

 ////////Paths for Login /////////
  //Get from User table

//   app.get("/login", (req, res) => {
//   if (req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     res.send({ loggedIn: false });
//   }
// });

//   app.get("/login", (req, res) => {
//     db.users.findAll({}).then(function (users) {
//       res.json(users);
//     });
//   });
  

  // //Post to stage_details
  // app.post("/login", (req, res) => {
  //   // console.log(req);
  //   db.users
  //     .get({
  //       stage_name: req.body.stage_name,
  //       stage_desc: req.body.stage_desc,
  //       stage_img: req.body.stage_img,
  //     })
  //     .then(function (stage_details) {
  //       console.log(stage_details);
  //       res.json(stage_details);
  //     });
  // });

//   app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



