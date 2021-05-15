function checkRequestParams(params, rules = null) {
  if (!rules) {
    return true;
  }
  if (typeof rules !== 'object') {
    throw Error('rules must be object!');
  }
  return checkRequestRules(params, rules);
}

function checkRequestRules(params, rules, keyString = 'event') {
  const keys = Object.keys(rules);
  for(let i = keys.length - 1; i + 1 ; i--) {
    const key = keys[i];
    keyString = `${keyString}.${key}`;
    // 判断是否必传
    if (rules[key].includes('required') && !params[key]) {
      throw Error(`The ${keyString} argument is required`);
    }
    // 使用 typeof 判断参数的类型
    if (!rules[key].includes(typeof params[key])) {
      throw Error(`The '${keyString}' argument mast be of type ${rules[key]}`);
    }
    // 参数若是对象则递归， // 暂时只支持第一层参数进行验证
    // if (rules[key].includes('object') ) {
    //   checkRequestRules(params[key], rules[key], keyString)
    // }
  }
  return true;
}

function getJobs(LeJob, triggers) {
  const cronParse = require('cron-parser') 
  const { jobs } = LeJob;
  const time = new Date().getTime() - 1;
  return Object.keys(jobs).reduce((jobNames, key) => {
    const intervalTime = cronParse.parseExpression(key).prev().getTime();
    const job = jobs[key];
    if (time - intervalTime <= triggers) {
      if (typeof job === 'string') {
        jobNames.push(jobs[key]);
      } else if (typeof job === 'object') {
        jobNames.push(...jobs[key]);
      }
    }
    return jobNames;
  }, []);
}

module.exports= { checkRequestParams, getJobs }