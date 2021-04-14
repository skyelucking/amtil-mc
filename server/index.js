const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 48,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "NewLife2021!",
  database: "missions_db",
});

//// POSTS TO DB //////

//POST FOR mission_basics //
app.post("/basics", (req, res) => {
  const status = req.body.status;
  const name = req.body.name;
  const category = req.body.category;
  const summary = req.body.summary;
  const notes = req.body.notes;
  //need to convert this to datetime at some point
  const start_date = req.body.start_date;
  //need to convert this to datetime at some point
  const end_date = req.body.end_date;
  const cover_img = req.body.cover_img;
  const description = req.body.description;

  db.query(
    "INSERT INTO mission_basics (status, name, category, summary, notes, start_date, end_date, cover_img, description  ) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      status,
      name,
      category,
      summary,
      notes,
      start_date,
      end_date,
      cover_img,
      description,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

//POST FOR equipment_details
app.post("/equipdetails", (req, res) => {
  const equip_name = req.body.equip_name;
  const equip_category = req.body.equip_category;
  const equip_description = req.body.equip_description;
  const equip_img = req.body.equip_img;

  db.query(
    "INSERT INTO equipment_details (equip_name, equip_category, equip_description, equip_img  ) VALUES (?,?,?,?)",
    [equip_name, equip_category, equip_description, equip_img],
    (err, result) => {
      console.log(err);
    }
  );
});

//POST FOR tool_details
app.post("/tooldetails", (req, res) => {
  const tool_name = req.body.tool_name;
  const tool_category = req.body.tool_category;
  const tool_description = req.body.tool_description;
  const tool_img = req.body.tool_img;

  db.query(
    "INSERT INTO tool_details (tool_name, tool_category, tool_description, tool_img  ) VALUES (?,?,?,?)",
    [tool_name, tool_category, tool_description, tool_img],
    (err, result) => {
      console.log(err);
    }
  );
});

//POST FOR stage_details
app.post("/stagedetails", (req, res) => {
  const stage_name = req.body.stage_name;
  const stage_desc = req.body.stage_desc;
  const stage_img = req.body.stage_img;

  db.query(
    "INSERT INTO stage_details (stage_name, stage_desc, stage_img  ) VALUES (?,?,?)",
    [stage_name, stage_desc, stage_img],
    (err, result) => {
      console.log(err);
    }
  );
});



//POST FOR REGISTRATION INFO
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const fName = req.body.fName;
  const lName = req.body.lName;
  const title = req.body.title;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password, fName, lName, title, email) VALUES (?,?,?,?,?, ?)",
      [username, hash, fName, lName, title, email],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

//// GETS FROM DB //////

app.get("/basics", (req, res) => {
  db.query("SELECT * FROM mission_basics", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("The server is running ");
});
