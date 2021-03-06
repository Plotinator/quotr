var fs = require('fs')
var { stringify } = require('dotenv-stringify')
var path = require('path')

console.log('writing env variables')
var env = {
  ROLLBAR_ACCESS_TOKEN: process.env.ROLLBAR_ACCESS_TOKEN,
  TRIALMODE: false,
  NODE_ENV: 'production',
}
var envstr = stringify(env)

fs.writeFileSync('.env', envstr)
