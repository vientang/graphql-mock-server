const nanoid = require('nanoid')

const createFieldsModel = db => {
  return {
    findMany(filter) {
      return db.get('fields')
        .filter(filter)
        .value()
    },

    findOne(filter) {
      return db.get('fields')
        .find(filter)
        .value()
    },

    create(field) {
      const newField = {id: nanoid(), createdAt: Date.now(), ...field}
      
      db.get('field')
        .push(newField)
        .write()

      return newField
    }
  }
}

module.exports = createFieldsModel