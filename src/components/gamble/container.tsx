import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import Bet from "./bet"
import Canvas from "./canvas"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>

export type TComponentProps = {
} & TReduxProps

const Container: React.FC<TComponentProps> = (props) => {
  return (
      <React.Fragment>
          <Canvas />
          <Bet />
      </React.Fragment>
  )
}

export default connector(Container)
