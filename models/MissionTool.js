module.exports = function (sequelize, DataTypes) {
  const MissionTool = sequelize.define(
    "MissionTool",
    {
      // tool_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // mission_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },

      last_updated: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      toolmission_id: {
        type: DataTypes.INTEGER,
        uniq: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "mission_toolslist",
      timestamps: false, // Enable timestamps
      createdAt: false, // Don't create createdAt
      updatedAt: false, // Don't create updatedAt
    }
  );

  
  return MissionTool;
};

