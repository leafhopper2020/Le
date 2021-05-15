function initDB(leOptions) {
  const config = leOptions.config
  return leOptions._cloud.database({
    env: config && config.env,
    throwOnNotFound: config && config.DBThrowOnNotFound,
  });
}

module.exports = initDB