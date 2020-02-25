import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialBook, newFileState } from 'store/initialState'

export default function books (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.books

    default:
      return state || newFileState
  }
}