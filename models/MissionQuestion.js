module.exports = function (sequelize, DataTypes) {
  const MissionQuestion = sequelize.define(
    "mission_questionlist",
    {
      question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
        
      },
      missionBasicMissionId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      q_order: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      q_text: {
        type: DataTypes.STRING,
        allowNull: true
      },
      q_ansA: {
        type: DataTypes.STRING,
        allowNull: true
      },
      q_ansB: {
        type: DataTypes.STRING,
        allowNull: false
      },
      q_ansC: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      q_ansD: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      q_ansE: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      q_ansCorrect: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      q_img: {
        type: DataTypes.STRING,
        allowNull: true      
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

  MissionQuestion.associate = function(models) {
    MissionQuestion.belongsTo(models.mission_basics, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return MissionQuestion;
};
