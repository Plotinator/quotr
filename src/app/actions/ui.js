import { OPEN_CARD, SELECT_TOPIC, SELECT_CATEGORY, FILE_LOADED, FILE_SAVED,
  NEW_FILE, SET_DARK_MODE, INCREASE_ZOOM, DECREASE_ZOOM, FIT_ZOOM, RESET_ZOOM } from 'constants/ActionTypes'

export function openCard (path) {
  return { type: OPEN_CARD, path }
}

export function selectTopic (topicId) {
  return { type: SELECT_TOPIC, topicId }
}

export function selectCategory (categoryId) {
  return { type: SELECT_CATEGORY, categoryId }
}

export function loadFile (fileName, dirty, payload) {
  return { type: FILE_LOADED, data: payload, fileName, dirty }
}

export function newFile (fileName) {
  return { type: NEW_FILE, fileName }
}

export function fileSaved () {
  return { type: FILE_SAVED, dirty: false }
}

export function setDarkMode (on) {
  return { type: SET_DARK_MODE, on }
}

export function increaseZoom () {
  return { type: INCREASE_ZOOM }
}

export function decreaseZoom () {
  return { type: DECREASE_ZOOM }
}

export function fitZoom () {
  return { type: FIT_ZOOM }
}

export function resetZoom () {
  return { type: RESET_ZOOM }
}

