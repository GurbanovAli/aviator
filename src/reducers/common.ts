import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
  ADD_CHECK,
  DELETE_CHECK,
  RATE_ONE,
  RATE_TWO,
  OPEN_TOGGLE,
  CLOSED_TOGGLE,
  SET_TIMER,
  CLEAN_TIMER,
  IS_GAMERULES_PANEL,
  GAMERULES_PANEL,
  IS_WINTEXT,
  OUT_WINTEXT,
  FORM_TRUE,
  FORM_FALSE
} from 'actions/common'

const initState = { fetching: false };
const initCheckState = { check: 400 };
const initFirstRateState = { rate: false };
const initSecondRateState = { rate2: false };
const initStateForms = { stateForms: false };

export interface ICommonState {
  fetching: boolean;
};

export interface ICheck {
  check: number;
};

export interface IStateForms {
  stateForms: boolean;
};

export const commonReducer = (state: ICommonState = initState, { type }: any) => {
  switch (type) {
    case START_FETCHING: {
      return { fetching: true }
    }
    case STOP_FETCHING: {
      return { fetching: false }
    }
    default:
      return state
  }
};

export const firstRateReducer = (state: any = initFirstRateState, { type, value }: boolean | any) => {
  if (type === RATE_ONE) {
    return { ...state, rate: value }
  }
  return state
};

export const secondRateReducer = (state: any = initSecondRateState, { type, value }: boolean | any) => {
  if (type === RATE_TWO) {
    return { ...state, rate2: value }
  }
  return state
};

export const checkReducer = (state: ICheck = initCheckState, { type, count }: number | any) => {
  switch (type) {
    case ADD_CHECK: {
      return {
        ...state,
        check: state.check + count
      }
    }
    case DELETE_CHECK: {
      return {
        ...state,
        check: state.check - count
      }
    }
    default:
      return state
  }
};

export const toggleReducer = (state: boolean = false, { type }: boolean | any) => {
  switch (type) {
    case OPEN_TOGGLE: {
      return state = true;
    }
    case CLOSED_TOGGLE: {
      return state = false;
    }
    default:
      return state
  }
};

export const timerReducer = (state: number = 0, { type, time }: number | any) => {
  if (type === SET_TIMER) return state = time;
  if (type === CLEAN_TIMER) return state = 0;

  return state
};

export const gamerulesReducer = (state: boolean = false, { type }: boolean | any) => {
  if (type === IS_GAMERULES_PANEL) return state = true;
  if (type === GAMERULES_PANEL) return state = false;

  return state
}

export const winTextReducer = (state: boolean = false, { type }: boolean | any) => {
  if (type === IS_WINTEXT) return state = true;
  if (type === OUT_WINTEXT) return state = false;

  return state
}

export const formReducer = (state: IStateForms = initStateForms, { type }: boolean | any) => {
  if (type === FORM_TRUE) return { ...state, stateForms: true };
  if (type === FORM_FALSE) return { ...state, stateForms: false };

  return state
}
