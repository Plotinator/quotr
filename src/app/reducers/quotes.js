import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialQuote, newFileState } from 'store/initialState'

export default function quotes (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.quotes

    default:
      return state || newFileState
  }
}