// Requiring our models and passport as we've configured it
const db = require("../models");
const moment = require("moment");
const TicketLog= require("../models/TicketLog");

module.exports = function (app) {
  ////////  All PATHS FOR TICKETS   /////////

  // GETS TICKET INFO  //
  // app.get("/ticketlogs/:id", (req, res) => {
  //   db.ticket_log
  //     .findOne({
  //       include: db.tool_details,
  //       where: {
  //         mission_id: req.params.mission_id,
  //       },
  //     })
  //     .then(function (m_basics) {
  //       res.json(m_basics);
  //     });
  // });



//Gets all Tickets from ticket_log //
app.get("/tickets", (req, res) => {
  db.ticket_log
    .findAll({})
    .then(function (ticket_logs) {
      res.json(ticket_logs);
    });
});

 //Post to ticket_log
 app.post("/ticketcreate", (req, res) => {
  
  db.ticket_log
    .create({
      ticket_title: req.body.ticket_title,
      ticket_desc: req.body.ticket_desc,
      ticket_category: req.body.ticket_category,
      ticket_img: req.body.ticket_img,
      ticket_status: req.body.ticket_status,
      ticket_startdate: moment(req.body.ticket_startdate).format('YYYY-MM-DD'),
      ticket_enddate: moment(req.body.ticket_enddate).format('YYYY-MM-DD'),
      ticket_assigned: req.body.ticket_assigned,
      ticket_by: req.body.ticket_by,
      })
    .then(function (ticket_logs) {
      console.log(ticket_logs);
      res.json(ticket_logs);
    });
});

};
