module.exports = function (sequelize, DataTypes) {
  const Team = sequelize.define(
    "team_details",
    {
      member_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avatar: {
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

  Team.associate = (models) => {
    Team.belongsToMany(models.mission_basics, {
       through: {
         model: models.mission_team,
         unique: false,
         
       },
     
     });
      }

  return Team;
};
