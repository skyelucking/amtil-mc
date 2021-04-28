module.exports = function (sequelize, DataTypes) {
  const MissionTeam = sequelize.define(
    "mission_team",
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
      tableName: "mission_team",
      timestamps: true, // Enable timestamps
      createdAt: false, // Don't create createdAt
      updatedAt: false, // Don't create updatedAt
    }
  );

  return MissionTeam;
};
