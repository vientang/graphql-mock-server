const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('server/src/db/db.json')
const db = low(adapter)

const createFieldsModel = require('./fields')

module.exports = {
  models: {
    Fields: createFieldsModel(db),
  },
  db
}