module.exports = function (sequelize, DataTypes) {
  const Equipment = sequelize.define(
    "equipment_details",
    {
      equip_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      equip_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      equip_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      equip_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      equip_img: {
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

  return Equipment;
};
