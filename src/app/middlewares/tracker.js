
const tracker = store => next => action => {

  const result = next(action)
  let state = store.getState()
  let attrs = {
    timeline_orientation: state.ui.orientation,
    version: state.file.version,
  }

  return result
}

export default tracker
