import React, { useState } from 'react';

import { connect } from 'react-redux'
import { IAppState } from 'store'

import { StyledContainer, P, Button } from './style'

const mapStateToProps = (state: IAppState) => ({
    history: state.history
});

const connector = connect(mapStateToProps);

const History: React.FC = ({ history }: any) => {

    const [toggle, setToggle] = useState<boolean>(false);
    const amount = toggle ? 29 : 15;

    return (
        <StyledContainer toggle={toggle}>
            {
                history.history.slice(0, amount).map((item, index) => (<P key={index}>{item + "x"}</P>)
            }
            <Button onClick={() => setToggle(!toggle)}>{"all"}</Button>
        </StyledContainer>
    )
};

export default connector(History)
