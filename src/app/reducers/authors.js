import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialAuthor, newFileState } from 'store/initialState'

export default function authors (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.authors

    default:
      return state || newFileState
  }
}