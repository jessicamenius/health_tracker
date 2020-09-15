module.exports = (sequelize, DataTypes) => {
  const Stats = sequelize.define("Stats", {
    height: { type: DataTypes.FLOAT, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    bmi: { type: DataTypes.INTEGER, allowNull: false },
    bmr: { type: DataTypes.INTEGER, allowNull: false },
    UserId: { type: DataTypes.INTEGER, allowNull: false },
  });

  Stats.associate = (models) => {
    Stats.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Stats;
};
