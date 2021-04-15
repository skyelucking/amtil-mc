module.exports = function(sequelize, DataTypes) {
  const MissionBasics = sequelize.define(
    "mission_basics",
    {
       mission_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      end_date: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      cover_img: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true      
      },
     
    },
    {
      freezeTableName: true
    }
  );

  

  return MissionBasics ;
};