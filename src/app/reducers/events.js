import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialEvent, newFileState } from 'store/initialState'

export default function events (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.events

    default:
      return state || newFileState
  }
}