import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { StyledContainer, P } from './style'

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


const GrPanel: React.FC<TComponentProps> = () => {

    return (
        <StyledContainer>
            <P>
                I'ts game rules panel, you stupid shit !!!
          </P>
        </StyledContainer>
    )
}

export default connector(GrPanel)
