const db2 = require("./models");
const express = require("express");
const mysql = require("mysql2");
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/api-routes.js")(app);


// //POST FOR stage_details
// app.post("/stagedetails", (req, res) => {
//   const stage_name = req.body.stage_name;
//   const stage_desc = req.body.stage_desc;
//   const stage_img = req.body.stage_img;

//   db.query(
//     "INSERT INTO stage_details (stage_name, stage_desc, stage_img  ) VALUES (?,?,?)",
//     [stage_name, stage_desc, stage_img],
//     (err, result) => {
//       console.log(err);
//     }
//   );
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE username = ?;",
//     username,
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }

//       if (result.length > 0) {
//         bcrypt.compare(password, result[0].password, (error, response) => {
//           if (response) {
//             req.session.user = result;
//             console.log(req.session.user);
//             res.send(result);
//           } else {
//             res.send({ message: "Wrong username/password combination!" });
//           }
//         });
//       } else {
//         res.send({ message: "User doesn't exist" });
//       }
//     }
//   );
// });

//// GETS FROM DB //////



// //Get from stage_details
// app.get("/stagedetails", (req, res) => {
//   db.query("SELECT * FROM stage_details", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });


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


const PORT = process.env.PORT || 3001
db2.sequelize.sync().then(() => {
  app.listen(PORT, () => {
  console.log("The server is running ");
});
})

