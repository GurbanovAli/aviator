import React from 'react'

import { connect } from 'react-redux'
import { setGrPanel } from 'actions'
import { IAppState, IAppDispatch } from 'store'

import { StyledButton, P2 } from './style'

const mapStateToProps = (state: IAppState) => ({
    lang: state.lang,
    gamerules: state.gamerules
});

const mapDispatchToProps = (dispatch: IAppDispatch) => ({
    setGrPanel: () => dispatch(setGrPanel())
});

const GrButton: React.FC<IAppState | IAppDispatch> = ({ lang, setGrPanel }: IAppState | IAppDispatch) => {
    const text = lang.settings.gamerules;

    return (
        <StyledButton onClick={() => setGrPanel()}>
            <P2> {text + " ?"}</P2>
        </StyledButton>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GrButton)
