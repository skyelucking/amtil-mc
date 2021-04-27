module.exports = function (sequelize, DataTypes) {
  const Stage = sequelize.define(
    "stage_details",
    {
      stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      stage_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
      stage_desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stage_img: {
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

  Stage.associate = (models) => {
    Stage.belongsToMany(models.mission_basics, {
       through: {
         model: models.MissionStage,
         unique: false,
         
       },
     
     });
      }

  return Stage;
};
