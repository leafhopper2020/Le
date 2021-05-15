const { LeRouter } = require('./common/index')

const options = {
  config: {
  },
  routers: {
    "user.GetById": 'controller/user/GetById',
  },
}

const app = new LeRouter(options)

exports.main = app.run()