import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import routeHistory from 'route-history'

import { commonReducer, checkReducer, firstRateReducer, secondRateReducer } from 'reducers/common'
import { IAppState } from './models'

const rootReducer = combineReducers<IAppState>({
  router: connectRouter(routeHistory),
  common: commonReducer,
  check: checkReducer,
  rate: firstRateReducer,
  rate2: secondRateReducer
});

export default rootReducer
