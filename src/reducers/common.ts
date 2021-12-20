import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
  ADD_CHECK,
  DELETE_CHECK,
  RATE_ONE,
  RATE_TWO
} from 'actions/common'

const initState = { fetching: false };
const initCheckState = { check: 400 };
const initFirstRateState = { rate: false };
const initSecondRateState = { rate2: false };

export interface ICommonState {
  fetching: boolean;
};

export const commonReducer = (state: ICommonState = initState, { type }: any) => {
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
    default:
      return state
  }
};

export const checkReducer = (state: number = initCheckState, { type, count, bet }: any) => {
  switch (type) {
    case ADD_CHECK: {
      console.log(state.check, count, bet);
      return {
        ...state,
        check: state.check + bet
      }
    }
    case DELETE_CHECK: {
      console.log(state.check, count, bet);
      return {
        ...state,
        check: state.check - bet
      }
    }
    default:
      return state
  }
}

export const firstRateReducer = (state: any = { rate: false }, { type, bool }: any) => {
  if (type === RATE_TWO) {
    console.log(bool);
    return { ...state, rate: bool }
  }
  return state
};

export const secondRateReducer = (state: any = { rate2: false }, { type, bool }: any) => {
  if (type === RATE_TWO) {
    console.log(bool);

    return { ...state, rate2: bool }
  }
  return state
};
