module.exports = function (sequelize, DataTypes) {
  const MissionStoryBoard = sequelize.define(
    "mission_storyboard",
    {
      storyboard_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      missionBasicMissionId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      
      panel_order: {
        type: DataTypes.STRING,
        allowNull: true
      },
      panel_img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      panel_notes: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      color_and_style: {
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
      tableName: "mission_storyboard",
      timestamps: true, // Enable timestamps
      createdAt: false, // Don't create createdAt
      updatedAt: false, // Don't create updatedAt
    }
  );

  MissionStoryBoard.associate = function(models) {
    MissionStoryBoard.belongsTo(models.mission_basics, {
      foreignKey: {
        allowNull: false
      }
    });
  };


    return MissionStoryBoard;
};
