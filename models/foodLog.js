module.exports = (sequelize, DataTypes) => {
  const FoodLog = sequelize.define("FoodLog", {
    foodName: { type: DataTypes.STRING, allowNull: false },
    carbs: { type: DataTypes.INTEGER, allowNull: false },
    protein: { type: DataTypes.INTEGER, allowNull: false },
    fat: { type: DataTypes.INTEGER, allowNull: false },
    calories: { type: DataTypes.INTEGER, allowNull: false },
    UserId: { type: DataTypes.INTEGER, allowNull: false },
  });

  FoodLog.associate = (models) => {
    FoodLog.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return FoodLog;
};
