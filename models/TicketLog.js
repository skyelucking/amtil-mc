var models = require(".");

module.exports = function (sequelize, DataTypes) {
  const TicketLog = sequelize.define(
    "ticket_log",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      ticket_title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ticket_desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ticket_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ticket_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ticket_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ticket_startdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ticket_enddate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ticket_assigned: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ticket_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    },
    {
      freezeTableName: true,
    }
  );

  return TicketLog;
};
