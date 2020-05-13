
const {Model} = require('sequelize');

// Definition of the Login model:

module.exports = (sequelize, DataTypes) => {

    class Login extends Model {}

    Login.init({

        }, {
            sequelize
        }
    );

    return Login;
};
