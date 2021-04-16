module.exports = function(sequelize, DataTypes) {
  const Registration = sequelize.define(
    "users",
    {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lName: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true      
      },
      
     
    },
    {
      freezeTableName: true
    }
  );

    return Registration ;
};