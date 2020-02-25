import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialSpeech, newFileState } from 'store/initialState'

export default function speeches (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.speeches

    default:
      return state || newFileState
  }
}