import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialCharacter, newFileState } from 'store/initialState'

export default function characters (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.characters

    default:
      return state || newFileState
  }
}