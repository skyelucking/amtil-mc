module.exports = function (sequelize, DataTypes) {
  const Tool = sequelize.define(
    "tool_details",
    {
      tool_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      tool_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tool_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tool_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tool_img: {
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

  return Tool;
};
