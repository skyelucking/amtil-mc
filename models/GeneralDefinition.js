module.exports = function (sequelize, DataTypes) {
    const Definition = sequelize.define(
      "general_definitions",
      {
        definition_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
  
        term: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        definition_text: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        model: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        model_link: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        animation: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        animation_link: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        footage: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        footage_link: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        image: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        image_link: {
          type: DataTypes.TEXT,
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
    )
    return Definition;
  };