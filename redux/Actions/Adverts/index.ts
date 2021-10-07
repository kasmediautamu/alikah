import { ActionTypes } from "../../Types/types"
export const setAdverts = (adverts:any[]) => {
  return {
    type: ActionTypes.SET_ADVERTS,
    payload:adverts
  }
}

export const setSingleAdvert = (advert:any) => {
  return {
    type: ActionTypes.SET_SINGLE_ADVERT,
    payload:advert
  }

}

export const removeSingleAdvert = () => {
  return {
    type: ActionTypes.REMOVE_SINGLE_ADVERT,


  }

}


