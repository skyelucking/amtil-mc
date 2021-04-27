module.exports = function (sequelize, DataTypes) {
  const MissionStage = sequelize.define(
    "MissionStage",
    {
      last_updated: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
     
    },
    {
      freezeTableName: true,
      tableName: "mission_stagelist",
      timestamps: false, // Enable timestamps
      createdAt: false, // Don't create createdAt
      updatedAt: false, // Don't create updatedAt
    }
  );

  
  return MissionStage;
};

