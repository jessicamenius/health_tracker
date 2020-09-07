const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
<<<<<<< HEAD
    userName: {
=======
    password: {
>>>>>>> 6dbbfc55cf727e685ddea0238b82205e9a4885bf
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = (models) => {
    User.hasOne(models.Stats, {
      onDelete: "cascade",
    });
<<<<<<< HEAD

=======
>>>>>>> 6dbbfc55cf727e685ddea0238b82205e9a4885bf
    User.hasMany(models.FoodLog, {
      onDelete: "cascade",
    });
  };

  return User;
};
