import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { RouterState } from 'connected-react-router'

import { ICommonState, IHistoryOfBet, IHistory, ICheck, IStateForms } from 'reducers/common'

export interface IAction<T> extends Action<string> {
  payload?: T
}

export interface IAppState {
  router: RouterState;
  common: ICommonState;
  data: any;
  lang: any;
  history: IHistory;
  historyOfBet: IHistoryOfBet;
  check: ICheck;
  rate: any;
  rate2: any;
  toggle: boolean;
  toggle2: boolean;
  time: number;
  gamerules: boolean;
  wintext: boolean;
  stateForms: IStateForms;
  isFlying: boolean;
}

export interface IAppDispatch {
  startFetching: (item: ICommonState[]) => void;
  stopFetching: (item: ICommonState[]) => void;
  setData: (item: any) => void;
  setLang: (item: any) => void;
  addHistoryOfBet: (item: IHistoryOfBet[]) => void;
  addHistory: (item: IHistory[]) => void;
  addCheck: (item: ICheck) => void;
  deleteCheck: (item: number) => void;
  setRate: (item: boolean) => void;
  setRate2: (item: boolean) => void;
  openToggle: () => void;
  closeToggle: () => void;
  openToggleTwo: () => void;
  closeToggleTwo: () => void;
  setTimer: (item: number) => void;
  cleanTimer: () => void;
  outWintext: () => void;
  setWintext: () => void;
  setFormState: () => void;
  cleanFormState: () => void;
  setFlying: (item: boolean) => void;
}

export type TAppActionThunk<TPayload, TReturn = void,> = ThunkAction<
  TReturn,
  IAppState,
  unknown,
  IAction<TPayload>
  >

export type TAppDispatchThunk<TPayload> = ThunkDispatch<
  IAppState,
  unknown,
  IAction<TPayload>
  >
