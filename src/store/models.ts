import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { RouterState } from 'connected-react-router'

import { ICommonState, ICheck, IStateForms } from 'reducers/common'

export interface IAction<T> extends Action<string> {
  payload?: T
}

export interface IAppState {
  router: RouterState;
  common: ICommonState;
  check: ICheck;
  rate: any;
  rate2: any;
  toggle: boolean;
  time: number;
  gamerules: boolean;
  wintext: boolean;
  stateForms: IStateForms;
}

export type TAppActionThunk<TPayload, TReturn = void, > = ThunkAction<
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
