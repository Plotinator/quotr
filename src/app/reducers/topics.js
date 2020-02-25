import { FILE_LOADED, NEW_FILE, RESET } from '../constants/ActionTypes'
import { initialTopic, newFileState } from 'store/initialState'

export default function topics (state = newFileState, action) {
  switch (action.type) {

    case NEW_FILE:
      return newFileState

    case RESET:
    case FILE_LOADED:
      return action.data.entities.topics

    default:
      return state || newFileState
  }
}