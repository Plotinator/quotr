import i18n from 'format-message'
import { INITIAL_ZOOM_INDEX, INITIAL_ZOOM_STATE } from 'constants/zoom_states'
import { remote } from 'electron'
const app = remote.app
i18n.setup({
  translations: require('../../../locales'),
  locale: app.getLocale() || 'en'
})

// data structure

export const scene = {
  id: 0,
  title: '',
  position: 0
}

export const ui = {
  currentView: 'timeline',
  orientation: 'horizontal',
  darkMode: false,
  characterSort: 'name~asc',
  characterFilter: null,
  placeSort: 'name~asc',
  placeFilter: null,
  noteSort: 'title~asc',
  noteFilter: null,
  zoomState: INITIAL_ZOOM_STATE,
  zoomIndex: INITIAL_ZOOM_INDEX,
}

export const file = {
  fileName: '',
  loaded: false,
  dirty: false
}

export const storyName = i18n('My awesome story')

export const character = {
  id: 0,
  name: '',
  description: '',
  notes: '',
  color: null,
  cards: [],
  noteIds: []
}

export const place = {
  id: 0,
  name: '',
  description: '',
  notes: '',
  color: null,
  cards: [],
  noteIds: []
}

export const tag = {
  id: 0,
  title: '',
  color: null
}

export const card = {
  id: 0,
  lineId: 0,
  sceneId: 0,
  title: i18n('a new card'),
  description: '',
  tags: [],
  characters: [],
  places: []
}

export const line = {
  id: 0,
  color: '#6cace4',
  title: '',
  position: 0
}

export const customAttributes = {
  characters: [],
  places: [],
  cards: [],
  scenes: [],
  lines: []
}

export const note = {
  id: 0,
  title: '',
  content: '',
  tags: [],
  characters: [],
  places: [],
  lastEdited: new Date().getTime()
}


// data structure

// export const quote = {
//   byId: {
//     "q1": {
//       id: "q1",
//       text: "",
//       favorite: false,
//       authorId: "a1",
//       seriesId: "s1",
//       bookId: "b1",
//       characterId: "ch1",
//       eventId: "e1",
//       topicIds: [],
//       pageNumber: 123,
//       notes: "",
//     }
//   },
//   allIds: []
// }

// export const topic = {
//   byId: {
//     "t1": {
//       id: "t1",
//       color: "",
//       name: ""
//     }
//   },
//   allIds: ["t1"]
// }

// export const author = {
//   byId: {
//     "a1": {
//       name: "",
//       seriesIds: [],
//       bookIds: [],
//     }
//   },
//   allIds: ["a1"]
// }

// export const series = {
//   byId: {
//     "s1": {
//       name: "",
//       authorId: "a1",
//       bookIds: [],
//     }
//   },
//   allIds: ["s1"]
// }

// export const book = {
//   byId: {
//     "b1": {
//       name: "",
//       authorId: "a1",
//       characterIds: [],
//     }
//   },
//   allIds: ["b1"]
// }

// export const character = {
//   byId: {
//     "ch1": {
//       name: "",
//       bookId: "b1",
//     }
//   },
//   allIds: ["ch1"]
// }

// export const event = {
//   byId: {
//     "e1": {
//       name: "",
//       time: new Date(),
//       place: "",
//       authorId: "a1",
//     }
//   },
//   allIds: ["e1"]
// }