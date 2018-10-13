const Sequelize = require('sequelize')
const model = require('../initializers/sequelize')()

module.exports = model.define(
  'generated_urls',
  {
    id: { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(200), allowNull: false },
    user_id: { type: Sequelize.BIGINT(11), allowNull: false },
    created_at: { type: Sequelize.DATE },
  },
)
