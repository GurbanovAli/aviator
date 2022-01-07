import React from "react";

import { connect } from 'react-redux'
import { openToggle, closeToggle, openToggleTwo, closeToggleTwo } from 'actions'
import { IAppState, IAppDispatch } from 'store'

import { Div, Button } from './style'

const mapStateToProps = (state: IAppState) => ({
    lang: state.lang,
    toggle: state.toggle,
    toggle2: state.toggle2
});

const mapDispatchToProps = (dispatch: IAppDispatch) => ({
    openToggle: () => dispatch(openToggle()),
    closeToggle: () => dispatch(closeToggle()),
    openToggleTwo: () => dispatch(openToggleTwo()),
    closeToggleTwo: () => dispatch(closeToggleTwo())
});

const Switch: React.FC<boolean | IAppState | IAppDispatch> = ({ rates, ...props }: boolean | IAppState | IAppDispatch) => {
    const { lang, toggle, toggle2, openToggle, closeToggle, openToggleTwo, closeToggleTwo } = props;
    const auto = true;
    const getToggle = rates ? toggle : toggle2;

    return (
        <Div>
            <Button {...{ getToggle }} onClick={() => { rates ? closeToggle() : closeToggleTwo() }}>{lang.autoplay[0]}</Button>
            <Button {...{ getToggle, auto }} onClick={() => { rates ? openToggle() : openToggleTwo() }}>{lang.autoplay[1]}</Button>
        </Div >
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
