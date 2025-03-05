const { Sequelize } = require('sequelize');
require('dotenv').config();
import pg from "pg";

const sequelizeOptions = {
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: process.env.NEXT_PUBLIC_DB_PORT || 5432,
  dialect: 'postgres',
  dialectModule: pg,
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  ssl:true,
  dialectOptions: {
    ssl:true
  },
};

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.NEXT_PUBLIC_DB_NAME,
  process.env.NEXT_PUBLIC_DB_USER,
  process.env.NEXT_PUBLIC_DB_PASSWORD,
  sequelizeOptions
);

module.exports = sequelize;