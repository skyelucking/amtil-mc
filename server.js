const db2 = require("./models");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path")

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/api-routes")(app);
require("./routes/mission-routes")(app);
require("./routes/stage-routes")(app);
require("./routes/equip-routes")(app);
require("./routes/team-routes")(app);
require("./routes/tool-routes")(app);
require("./routes/storyboard-routes")(app);
require("./routes/step-routes")(app);
require("./routes/question-routes")(app);
require("./routes/ticket-routes")(app);
require("./routes/definition-routes")(app);

if(process.env.NODE_ENV === "production"){
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  }



// app.get("/login", (req, res) => {
//   if (req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     res.send({ loggedIn: false });
//   }
// });

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "NewLife2021!",
  database: "missions_db",
});

const PORT = process.env.PORT || 3001
db2.sequelize.sync().then(() => {
  app.listen(PORT, () => {
  console.log("Boom, chicka, chicka, boom! The server is running on " + PORT);
});
})

