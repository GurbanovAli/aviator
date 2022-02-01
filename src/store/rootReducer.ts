import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import routeHistory from 'route-history'

import {
  commonReducer,
  getDataReducer,
  langReducer,
  historyOfBetReducer,
  historyReducer,
  checkReducer,
  firstRateReducer,
  secondRateReducer,
  toggleReducer,
  toggleTwoReducer,
  timerReducer,
  gamerulesReducer,
  winTextReducer,
  formReducer,
  isFlyingReducer,
  setCountReducer
} from 'reducers/common'

import { IAppState } from './models'

const rootReducer = combineReducers<IAppState>({
  router: connectRouter(routeHistory),
  common: commonReducer,
  data: getDataReducer,
  lang: langReducer,
  historyOfBet: historyOfBetReducer,
  history: historyReducer,
  check: checkReducer,
  rate: firstRateReducer,
  rate2: secondRateReducer,
  toggle: toggleReducer,
  toggle2: toggleTwoReducer,
  time: timerReducer,
  gamerules: gamerulesReducer,
  wintext: winTextReducer,
  stateForms: formReducer,
  isFlying: isFlyingReducer,
  bet: setCountReducer
});

export default rootReducer
