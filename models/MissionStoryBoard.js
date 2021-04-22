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
      mission_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
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

  return MissionStoryBoard;
};
