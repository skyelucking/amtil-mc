module.exports = function (sequelize, DataTypes) {
  const MissionStep = sequelize.define(
    "mission_stepslist",
    {
      step_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
      mission_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      step_text: {
        type: DataTypes.STRING,
        allowNull: true,
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

  return MissionStep;
};
