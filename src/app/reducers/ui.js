import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialUI } from 'store/initialState'

export default function ui (state = initialUI, action) {
  switch (action.type) {

    case NEW_FILE:
      return initialUI

    case RESET:
    case FILE_LOADED:
      return action.data.ui

    default:
      return state
  }
}
