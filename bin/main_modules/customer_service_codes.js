const prompt = require('electron-prompt')
const { app, shell } = require('electron')
const i18n = require('format-message')
i18n.setup({
  translations: require('../../locales'),
  locale: app.getLocale() || 'en'
})
const storage = require('electron-json-storage')
const log = require('electron-log')
const { RECENT_FILES_PATH, BACKUP_BASE_PATH } = require('./config_paths')
const { checkTrialInfo, extendWithReset } = require('./trial_manager')
const SETTINGS = require('./settings')

function enterCustomerServiceCode () {
  prompt({
    title: i18n('Enter a code you were given'),
    label: i18n('code') + ':',
    inputAttrs: {
      type: 'text',
      required: true
    },
    type: 'input',
    alwaysOnTop: true
  })
  .then((r) => {
    if(r === null) {
      // cancelled
    } else {
      handleCustomerServiceCode(r)
    }
  })
  .catch(console.error);
}

function handleCustomerServiceCode (code) {
  switch (code) {
    case "xsu7wb":
      // extend free trial (one time)
      const ZhuLiDoTheThing = () => {
        extendWithReset(30, ()=>{})
      }
      checkTrialInfo(ZhuLiDoTheThing,()=>{}, ZhuLiDoTheThing)
      break;

    case "bafa09":
      // delete recentFiles file
      storage.remove(RECENT_FILES_PATH, error => {log.warn(error)})
      break;

    case "941ff8":
      // view backups
      shell.openItem(BACKUP_BASE_PATH)
      break;

    case "7c6a3a":
      // turn off backup
      SETTINGS.set('backup', false)
      break;

    case "dbfd51":
      // turn on backup
      SETTINGS.set('backup', true)
      break;

    case "3c66c9":
      // turn off allowPrerelease
      SETTINGS.set('allowPrerelease', false)
      break;

    case "a56a8a":
      // turn on allowPrerelease
      SETTINGS.set('allowPrerelease', true)
      break;

    default:
      break;
  }
}

module.exports = enterCustomerServiceCode