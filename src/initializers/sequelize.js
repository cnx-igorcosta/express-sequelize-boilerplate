const Sequelize = require('sequelize')
const envLoader = require('env-o-loader')

const {
  primary: primarySqlUrl,
} = envLoader('../config/sql.yaml')

module.exports = () => new Sequelize(primarySqlUrl, {})
