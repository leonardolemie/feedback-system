if (process.env.NOVE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
