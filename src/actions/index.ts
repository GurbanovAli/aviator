import { TAppDispatchThunk } from 'store'

const MODULE_NAME = 'COMMON'

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`
export const SET_LANG = 'SET_LANG'
export const ADD_HISTORY_OF_BET = 'ADD_HISTORY_OF_BET'
export const ADD_HISTORY = 'ADD_HISTORY'
export const ADD_CHECK = 'ADD_CHECK'
export const DELETE_CHECK = 'DELETE_CHECK'
export const RATE_ONE = 'RATE_ONE'
export const RATE_TWO = 'RATE_TWO'
export const OPEN_TOGGLE = 'OPEN_TOGGLE'
export const CLOSED_TOGGLE = 'CLOSED_TOGGLE'
export const OPEN_TOGGLE_TWO = 'OPEN_TOGGLE_TWO'
export const CLOSED_TOGGLE_TWO = 'CLOSED_TOGGLE_TWO'
export const SET_TIMER = 'SET_TIMER'
export const CLEAN_TIMER = 'CLEAN_TIMER'
export const IS_GAMERULES_PANEL = 'IS_GAMERULES_PANEL'
export const GAMERULES_PANEL = 'GAMERULES_PANEL'
export const IS_WINTEXT = 'IS_WINTEXT'
export const OUT_WINTEXT = 'OUT_WINTEXT'
export const FORM_TRUE = 'FORM_TRUE'
export const FORM_FALSE = 'FORM_FALSE'
export const SET_FLYING = 'SET_FLYING'
export const SET_BET = 'SET_BET'


export const startFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: START_FETCHING,
  })
};

export const stopFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: STOP_FETCHING,
  })
};

export const setLang = (lang: any) => ({
  type: SET_LANG,
  lang: lang
});

export const addHistoryOfBet = (arr: any[]) => ({
  type: ADD_HISTORY_OF_BET,
  arr: arr
});

export const addHistory = (arr: number[]) => ({
  type: ADD_HISTORY,
  arr: arr
});

export const addCheck = (count: number) => ({
  type: ADD_CHECK,
  count: count
});

export const deleteCheck = (count: number) => ({
  type: DELETE_CHECK,
  count: count
});

export const setRate = (res: boolean) => ({
  type: RATE_ONE,
  value: res
});

export const setRate2 = (res: boolean) => ({
  type: RATE_TWO,
  value: res
});

export const openToggle = () => ({
  type: OPEN_TOGGLE
});

export const closeToggle = () => ({
  type: CLOSED_TOGGLE
});

export const openToggleTwo = () => ({
  type: OPEN_TOGGLE_TWO
});

export const closeToggleTwo = () => ({
  type: CLOSED_TOGGLE_TWO
});

export const setTimer = (time: number) => ({
  type: SET_TIMER,
  time: time
});

export const cleanTimer = () => ({
  type: CLEAN_TIMER
});

export const setGrPanel = () => ({
  type: IS_GAMERULES_PANEL
});

export const closeGrPanel = () => ({
  type: GAMERULES_PANEL
});

export const setWintext = () => ({
  type: IS_WINTEXT
});

export const outWintext = () => ({
  type: OUT_WINTEXT
});

export const setFormState = () => ({
  type: FORM_TRUE
});

export const cleanFormState = () => ({
  type: FORM_FALSE
});

export const setFlying = (value: boolean) => ({
  type: SET_FLYING,
  value: value
});

export const setRoundedCount = (value: number) => ({
  type: SET_BET,
  value: value
});
