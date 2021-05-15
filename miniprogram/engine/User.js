import ServiceUtil from './util/Service.js'

const serviceUtil = new ServiceUtil('router')
export default class User {
  static getById = async (id) => {
    return await serviceUtil.request('user.GetById', { id });
  }
}