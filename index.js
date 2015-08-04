
module.exports =
  global.JSON &&
  typeof global.JSON === 'object' &&
  typeof global.JSON.stringify === 'function' &&
  typeof global.JSON.parse === 'function'
    ? { stringify: global.JSON.stringify, parse: global.JSON.parse }
    : require('./src/index');
