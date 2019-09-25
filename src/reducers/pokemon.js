import {
  INVALIDATE_POKEMON,
  REQUEST_POKEMON,
  RECEIVE_POKEMON
} from '../actions/pokemon'

function pokemon(
    state = {
      isFetching: false,
      didInvalidate: false,
      pokemon: []
    },
    action
  ) {
    switch (action.type) {
      case INVALIDATE_POKEMON:
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case REQUEST_POKEMON:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case RECEIVE_POKEMON:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          pokemon: action.pokemon,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }

  export default pokemon