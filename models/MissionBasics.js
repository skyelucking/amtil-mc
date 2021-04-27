var MissionTool = require("../models/MissionTool");
var MissionStage = require("../models/MissionStage");
var MissionEquipment = require("../models/MissionEquipment");
var MissionBasics = require("../models/MissionBasics");
var models = require("../models/");

module.exports = function (sequelize, DataTypes) {
  const MissionBasics = sequelize.define(
    "mission_basics",
    {
      mission_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      end_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cover_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  //Question: can I designate the FK above? I don't like the auto generated one.
  MissionBasics.associate = (models) => {
    MissionBasics.belongsToMany(models.tool_details, {
      through: {
        model: models.MissionTool,
        unique: false,
      },
    });
    MissionBasics.belongsToMany(models.equipment_details, {
      through: {
        model: models.mission_equiplist,
        unique: false,
      },
    });
    MissionBasics.belongsToMany(models.stage_details, {
      through: {
        model: models.MissionStage,
        unique: false,
      },
    });
  };

  
  return MissionBasics;
};
