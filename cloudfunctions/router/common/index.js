const LeBase = require('./LeBase')
const { checkRequestParams, getJobs } = require('./util/index')

class LeRouter extends LeBase {
  constructor(options) {
    super(options);
    this.routers = options.routers || {};
  }
  run() {
    return async (event, context) => {
      const router = this.routers[event.$url];
      if (!router) {
        throw Error('router not found')
      }
      const Controller = require(this.routers[event.$url]);
      checkRequestParams(event, Controller.rules);
      return await Controller.main.call(this, event, context);
    }
  }
}

class LeJob extends LeBase {
  constructor(options) {
    super(options);
    this.jobs = options.jobs || {};
  }
  run() {
    return async (event, context) => {
      const jobNames = getJobs(this, this.config.triggers);
      if (jobNames) {
        jobNames.forEach((jobName) => {
          const Controller = require(jobName);
          Controller.main.call(this, event, context);
        })
      }
    }
  }
}

module.exports = { LeRouter, LeJob }