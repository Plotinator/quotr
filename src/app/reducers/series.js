import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialSerie, newFileState } from 'store/initialState'

export default function series (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.series

    default:
      return state || newFileState
  }
}