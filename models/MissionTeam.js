module.exports = function (sequelize, DataTypes) {
  const MissionTeam = sequelize.define(
    "mission_team",
    {
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      mission_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },

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
      timestamps: true, // Enable timestamps
      createdAt: false, // Don't create createdAt
      updatedAt: false, // Don't create updatedAt
    }
  );

  return MissionTeam;
};
