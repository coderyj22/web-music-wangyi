/**
 * 推荐页面 reducer
 * /discover/recommend
*/
import * as types from '../actionTypes'
const defaultState = {
  banners: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_TOP_BANNERS:
      return {
        ...state,
        banners: action.payload
      }
    default:
      return state
  }
}
