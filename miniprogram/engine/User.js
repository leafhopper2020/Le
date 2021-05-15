import ServiceUtil from './util/ServiceUtil.js'

const serviceUtil = new ServiceUtil('router')
export default class User {
  static getById = async (id) => {
    return await serviceUtil.request('user.GetById', { id });
  }
}