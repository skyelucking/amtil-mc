module.exports = function (sequelize, DataTypes) {
  const MissionStep = sequelize.define(
    "mission_stepslist",
    { 
      step_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
      step_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
      missionBasicMissionId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      step_text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      step_img: {
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
      tableName: "mission_stepslist",
      timestamps: true, // Enable timestamps
      createdAt: false, // Don't create createdAt
      updatedAt: false, // Don't create updatedAt
    }
  );
  
  MissionStep.associate = function(models) {
    MissionStep.belongsTo(models.mission_basics, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return MissionStep;
};
