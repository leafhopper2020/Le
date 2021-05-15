function initAttr(options) {
  this._cloud = require('wx-server-sdk');
  this.config = options.config || {};
  setDB.call(this);
}

function setDB() {
  Object.defineProperty(this, 'DB', {
    configurable: false,
    get() {
      this._DB || (this._DB = require('./DB')(this));
      return this._DB;
    }
  })
}

function initCloud() {
  this._cloud.init({
    env: this.config.env,
  });
}

class LeBase {
  constructor(options) {
    initAttr.call(this, options);
    initCloud.call(this);
  }
}

module.exports = LeBase