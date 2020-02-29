import { FILE_LOADED, NEW_FILE, RESET, OPEN_CARD, SELECT_TOPIC, SELECT_CATEGORY } from '../constants/ActionTypes'
import { initialUI } from 'store/initialState'

export default function ui (state = initialUI, action) {
  switch (action.type) {

    case OPEN_CARD:
      return {
        ...state,
        openCard: action.path,
      }

    case SELECT_TOPIC:
      let selectedTopics = {}
      if (state.selectedTopics.includes(action.topicId)) {
        // unselect it
        selectedTopics = state.selectedTopics.filter(tp => tp != action.topicId)
      } else {
        // select it
        selectedTopics = state.selectedTopics.concat([action.topicId])
      }
      return {
        ...state,
        selectedTopics,
      }

    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.categoryId
      }

    case NEW_FILE:
      return initialUI

    case RESET:
    case FILE_LOADED:
      return action.data.ui

    default:
      return state
  }
}
