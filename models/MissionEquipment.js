module.exports = function (sequelize, DataTypes) {
  const MissionEquipment = sequelize.define(
    "mission_equiplist",
    {
      // equip_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   primaryKey: true,
      //   autoIncrement: true

      // },
      // mission_id: {
      //   type: DataTypes.INTEGER,
      //   foreignKey: true,
      //   allowNull: false,
      // },

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
      tableName: "mission_equiplist",
      timestamps: false, // Enable timestamps
      createdAt: false, // Don't create createdAt
      updatedAt: false, // Don't create updatedAt
    }
  );

    return MissionEquipment;
};
