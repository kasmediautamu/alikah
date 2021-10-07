import { ActionTypes } from '../../Types/types'
type ALLADVERTS = {
  alladverts: any[]
}
type SINGLEADVERT = {
  singleadvert: any
}

export interface SET_ADVERTS {
  readonly type: 'SET_ADVERTS'
  payload: ALLADVERTS
}
export interface SET_SINGLE_ADVERT {
  readonly type: 'SET_SINGLE_ADVERT'
  payload: SINGLEADVERT
}

const INITIAL_STATE = {
  alladverts: []
}

export const AllAdvertsReducer = (state = INITIAL_STATE, action: SET_ADVERTS) => {
  switch (action.type) {
    case ActionTypes.SET_ADVERTS:
      return { ...state, alladverts: action.payload }

    default:
      return state
  }
}
export const SingleAdvertReducer = (state = {}, action: SET_SINGLE_ADVERT) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_ADVERT:
      return { ...state, singleadvert: action.payload }
    case ActionTypes.REMOVE_SINGLE_ADVERT:
      return {}
    default:
      return state
  }
}
