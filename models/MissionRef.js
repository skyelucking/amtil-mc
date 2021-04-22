module.exports = function (sequelize, DataTypes) {
  const MissionRef = sequelize.define(
    "mission_references",
    {
      reference_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      mission_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      ref_order: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ref_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ref_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ref_desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ref_notes: {
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

  return MissionRef;
};
