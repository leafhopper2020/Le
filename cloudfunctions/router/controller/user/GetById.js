const { User } = require('model/index')

module.exports = class GetById {
  static rules = {
    id: ['required', 'string'],
  }
  
  static main = async function (event, context) {
    const project = new User(this.DB);
  
    const _ = this.DB.command
  
    const where = {
      _id: event.id,
      softDelete: _.neq(true),
    }
  
    return {
      data: await project.getProject(where)
    } 
  }
}