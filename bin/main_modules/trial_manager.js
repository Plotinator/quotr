const storage = require('electron-json-storage')
const { TRIAL_INFO_PATH } = require('./config_paths')
const writeToEnv = require('./env')

const TRIAL_LENGTH = 30
const EXTENSIONS = 2
let info = {}

function checkTrialInfo (hasStartedCallback, hasntStartedCallback, expiredCallBack) {
  storage.has(TRIAL_INFO_PATH, function (err, hasKey) {
    if (err) log.error(err)
    if (hasKey) {
      storage.get(TRIAL_INFO_PATH, function (err, data) {
        if (err) log.error(err)
        info = data
        const daysLeft = daysLeftOfTrial(data.endsAt)
        if (daysLeft <= 0) {
          expiredCallBack()
        } else {
          hasStartedCallback(daysLeft)
        }
      })
    } else {
      hasntStartedCallback()
    }
  })
}

function startTheTrial (callback) {
  turnOnTrialMode()
  const day = new Date()
  const startsAt = day.getTime()
  const end = addDays(startsAt, TRIAL_LENGTH)
  const endsAt = end.getTime()
  info = {startsAt, endsAt, extensions: EXTENSIONS}
  storage.set(TRIAL_INFO_PATH, info, function (err) {
    if (err) {
      log.error(err)
      rollbar.warn(err)
    }
    callback(TRIAL_LENGTH)
  })
}

function extendTheTrial (days, callback) {
  const newEnd = addDays(info.endsAt, days)
  info = {
    ...info,
    endsAt: newEnd.getTime(),
    extensions: --info.extensions,
  }

  storage.set(TRIAL_INFO_PATH, info, callback)
}

function extendWithReset (days, callback) {
  if (info.hasBeenReset) return

  const newEnd = addDays(info.endsAt, days)
  info = {
    ...info,
    endsAt: newEnd.getTime(),
    extensions: EXTENSIONS,
    hasBeenReset: true
  }
  storage.set(TRIAL_INFO_PATH, info, callback)
}

function addDays (date, days) {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  result.setHours(23, 59, 59, 999)
  return result
}

function daysLeftOfTrial (endsAt) {
  let oneDay = 24*60*60*1000
  var today = new Date()
  return Math.round((endsAt - today.getTime())/oneDay)
}

function turnOffTrialMode () {
  if (process.env.NODE_ENV !== 'dev') {
    process.env.TRIALMODE = 'false'
  }
  writeToEnv('TRIALMODE', 'false')
}

function turnOnTrialMode () {
  process.env.TRIALMODE = 'true'
  writeToEnv('TRIALMODE', 'true')
}

module.exports = { checkTrialInfo, turnOffTrialMode, startTheTrial, extendTheTrial, extendWithReset }
