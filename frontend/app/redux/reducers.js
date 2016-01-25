import clone from 'lodash/lang/clone'
import filter from 'lodash/collection/filter'

const Reducers = {}

Reducers.socket = function socket(state=false, action) {
  switch (action.type) {
    case 'INITIATE_SOCKET':
      let newState = action.socket
      return newState
    default:
      return state
  }
}

Reducers.currentUser = function currentUser(state=[], action) {
	switch (action.type) {
    case 'LOG_OUT':
      var newState = null
      return newState
    case 'SET_CURRENT_USER':
      let newState = action.currentUser
      return newState
    default:
      return null
  }
}

export default Reducers
