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

const sequelize = new Sequelize("3934762_dashboard", "3934762_dashboard", "bm55027363@7", {
  host: "fdb32.awardspace.net",
  dialect: 'mysql',
  operatorsAliases: false,
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.files = require("./file.model.js")(sequelize, Sequelize);
db.boards = require("./boards.model.js")(sequelize, Sequelize);

module.exports = db;