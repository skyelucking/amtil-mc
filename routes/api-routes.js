// Requiring our models and passport as we've configured it
const db = require("../models");
const Tool = require("../models/Tool");

module.exports = function (app) {
  //Get from mission_basics
  app.get("/basics", (req, res) => {
    db.mission_basics
      .findAll({
        include: db.tool_details,
      })
      .then(function (m_basics) {
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
        pm_url: req.body.pm_url,
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

  //GETS FROM EACH CONNECTED TABLE //

  // -- TOOLS -- //
  app.get("/gtools", (req, res) => {
    db.mission_basics
      .findAll({
        include: db.tool_details,
      })
      .then(function (gtools) {
        res.json(gtools);
      });
  });

  // -- EQUIPMENT -- //
  app.get("/gequip", (req, res) => {
    db.mission_basics
      .findAll({
        include: db.equipment_details,
      })
      .then(function (gequip) {
        res.json(gequip);
      });
  });

  // -- TEAM -- //
  app.get("/gteam", (req, res) => {
    db.mission_basics
      .findAll({
        include: db.team_details,
      })
      .then(function (gteam) {
        res.json(gteam);
      });
  });

  // -- STAGE -- //
  app.get("/gstage", (req, res) => {
    db.mission_basics
      .findAll({
        include: db.stage_details,
      })
      .then(function (gstage) {
        res.json(gstage);
      });
  });

// -- STORYBOARDS -- //
app.get("/gstoryboards", (req, res) => {
  db.mission_basics
    .findAll({
      include: db.mission_storyboard,
    })
    .then(function (gstoryboards) {
      res.json(gstoryboards);
    });
});

// -- STEPS -- //
app.get("/gsteps", (req, res) => {
  db.mission_basics
    .findAll({
      include: db.mission_stepslist,
    })
    .then(function (gsteps) {
      res.json(gsteps);
    });
});


  
};
