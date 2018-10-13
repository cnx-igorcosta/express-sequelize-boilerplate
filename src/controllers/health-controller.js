const sequelize = require('../initializers/sequelize')

module.exports = {
  check(req, res) {
    sequelize.authenticate()
      .then(() => res.json({ db: true }))
      .catch(() => res.status(500).json({ db: false }))
  },
}
