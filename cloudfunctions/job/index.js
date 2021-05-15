const { LeJob } = require('./common/index')

const options = {
  config: {
    name: 'router',
    triggers: 60 * 60 * 5 * 1000,
  },
  jobs: {
    "0 0 17 * * 6": ["controller/hello/HelloWorld"],
  },
}

const app = new LeJob(options)

exports.main = app.run()