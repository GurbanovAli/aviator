import React, { useState } from 'react';

import { connect } from 'react-redux'
import { IAppState } from 'store'

import { StyledContainer, P, Button } from './style'

import next from 'icons/next.svg';
import back from 'icons/back.svg';

const mapStateToProps = (state: IAppState) => ({
    history: state.history
});

const connector = connect(mapStateToProps);

const History: React.FC<IAppState> = ({ history }: IAppState) => {

    const [toggle, setToggle] = useState<boolean>(false);
    const start = toggle ? 15 : 0
    const end = toggle ? 29 : 14;

    return (
        <StyledContainer toggle={toggle}>
            {
                history.history.slice(start, end).map((item, index) => (<P key={index}>{item + "x"}</P>)
            }

            <Button onClick={() => setToggle(!toggle)}><img src={ toggle ? back : next} /></Button>
        </StyledContainer>
    )
};

export default connector(History)
