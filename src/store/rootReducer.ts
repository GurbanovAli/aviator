import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import routeHistory from 'route-history'

import {
  commonReducer,
  historyReducer,
  checkReducer,
  firstRateReducer,
  secondRateReducer,
  toggleReducer,
  timerReducer,
  gamerulesReducer,
  winTextReducer,
  formReducer,
  isFlyingReducer
} from 'reducers/common'

import { IAppState } from './models'

const rootReducer = combineReducers<IAppState>({
  router: connectRouter(routeHistory),
  common: commonReducer,
  history: historyReducer,
  check: checkReducer,
  rate: firstRateReducer,
  rate2: secondRateReducer,
  toggle: toggleReducer,
  time: timerReducer,
  gamerules: gamerulesReducer,
  wintext : winTextReducer,
  stateForms: formReducer,
  isFlying: isFlyingReducer
});

export default rootReducer
