import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
  SET_CHECK
} from 'actions/common'

const initState = {
  fetching: false,
  check: 400
}

export interface ICommonState {
  fetching: boolean;
  check: number;
}

function commonReducer(state: ICommonState = initState, { type, count, bet }: AnyAction) {
  switch (type) {
    case START_FETCHING: {
      return {
        fetching: true,
      }
    }
    case STOP_FETCHING: {
      return {
        fetching: false,
      }
    }
    case SET_CHECK: {
      return {

        check: state.check + count + bet
      }
    }
    default:
      return state
  }
}

export default commonReducer
