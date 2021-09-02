// uses configuration above to initialize Sequelize
const mysql = require('mysql');
const Sequelize = require("sequelize");
require('dotenv').config();


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const sequelize = new Sequelize("HAnykTKdP9", "HAnykTKdP9", "Nf5EeX5KFk", {
  host: "remotemysql.com",
  dialect: 'mysql',
  operatorsAliases: false,
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.files = require("./file.model.js")(sequelize, Sequelize);
db.boards = require("./boards.model.js")(sequelize, Sequelize);

module.exports = db;